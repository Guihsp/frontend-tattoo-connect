import { useEffect, useState } from "react";
import { getAllParameters, createTattooArtistParameter, getAllTattooArtistParameters } from "@/services/api/parameters";
import { useAuth } from "@/contexts/AuthContext";

export interface Parameter {
  id: string;
  category: string;
  name: string;
}

export interface ParameterWithPrice extends Parameter {
  price: string;
}

export const useTattooParameters = () => {
  const [parameters, setParameters] = useState<Parameter[]>([]);
  const [grouped, setGrouped] = useState<Record<string, Parameter[]>>({});
  const [selected, setSelected] = useState<Record<string, ParameterWithPrice[]>>({});
  const [loading, setLoading] = useState(true);
  const [alreadyRegistered, setAlreadyRegistered] = useState<string[]>([]);

  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const params = await getAllParameters();
      let registered: string[] = [];
      if (user) {
        const registeredParams = await getAllTattooArtistParameters(user.id);
        registered = registeredParams.map((p: any) => p.parameterId);
        setAlreadyRegistered(registered);
      }
      setParameters(params);
      const groupedParams: Record<string, Parameter[]> = {};
      params.forEach((p: Parameter) => {
        if (!groupedParams[p.category]) groupedParams[p.category] = [];
        groupedParams[p.category].push(p);
      });
      setGrouped(groupedParams);
      setLoading(false);
    })();
  }, [user]);

  const handleSelect = (category: string, param: Parameter, price: string) => {
    setSelected((prev) => {
      const alreadySelected = prev[category]?.some((p) => p.id === param.id);
      if (alreadySelected) return prev;
      return {
        ...prev,
        [category]: [...(prev[category] || []), { ...param, price }]
      };
    });
  };

  const handlePriceChange = (category: string, paramId: string, price: string) => {
    setSelected((prev) => ({
      ...prev,
      [category]: prev[category]?.map((p) =>
        p.id === paramId ? { ...p, price } : p
      ) || [],
    }));
  };

  const removeSelected = (category: string, paramId: string) => {
    setSelected((prev) => ({
      ...prev,
      [category]: prev[category]?.filter((p) => p.id !== paramId) || [],
    }));
  };

  const submitParameters = async () => {
    if (!user) throw new Error("Usuário não autenticado");
    for (const [category, params] of Object.entries(selected)) {
      for (const param of params) {
        if (param && param.price) {
          await createTattooArtistParameter(user.id, param.id, Number(param.price));
        }
      }
    }
  };

  // NOVO: retorna também os parâmetros já cadastrados
  return { grouped, selected, handleSelect, handlePriceChange, removeSelected, loading, submitParameters, alreadyRegistered, parameters };
};