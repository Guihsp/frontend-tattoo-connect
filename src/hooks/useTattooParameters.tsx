import { useEffect, useState } from "react";
import { getAllParameters, createTattooArtistParameter } from "@/src/services/api/parameters";
import { useAuth } from "@/src/contexts/AuthContext";
import { useRouter } from "expo-router";

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
  const router = useRouter();

  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const params = await getAllParameters();
      setParameters(params);
      const groupedParams: Record<string, Parameter[]> = {};
      params.forEach((p: Parameter) => {
        if (!groupedParams[p.category]) groupedParams[p.category] = [];
        groupedParams[p.category].push(p);
      });
      setGrouped(groupedParams);
      setLoading(false);
    })();
  }, []);

  const handleSelect = (category: string, param: Parameter, price: string) => {
    setSelected((prev) => ({
      ...prev,
      [category]: [{ ...param, price }]
    }));
  };

  const submitParameters = async () => {
    if (!user) throw new Error("Usuário não autenticado");
    for (const [category, params] of Object.entries(selected)) {
      const param = params[0];
      if (param && param.price) {
        console.log(`Criando parâmetro para ${category}:`, param);
        await createTattooArtistParameter(user.id, param.id, Number(param.price));
      }
    }
    router.replace('/(tattoo-artist)');
  };

  return { grouped, selected, handleSelect, loading,submitParameters };
};