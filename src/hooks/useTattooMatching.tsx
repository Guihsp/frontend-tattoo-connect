import { useEffect, useState } from "react";
import { getAllParameters } from "@/src/services/api/parameters";

export interface TattooParameter {
  id: string;
  category: string;
  name: string;
}

export interface ParametersByCategory {
  [category: string]: TattooParameter[];
}

export function useTattooParameters() {
  const [parameters, setParameters] = useState<TattooParameter[]>([]);
  const [grouped, setGrouped] = useState<ParametersByCategory>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchParameters() {
      setLoading(true);
      try {
        const data = await getAllParameters();
        setParameters(data);

        const groupedParams: ParametersByCategory = {};
        data.forEach((param: TattooParameter) => {
          if (!groupedParams[param.category]) {
            groupedParams[param.category] = [];
          }
          groupedParams[param.category].push(param);
        });
        setGrouped(groupedParams);
      } catch (err) {
        setError("Erro ao carregar parâmetros");
      } finally {
        setLoading(false);
      }
    }
    fetchParameters();
  }, []);

  return { parameters, grouped, loading, error };
}