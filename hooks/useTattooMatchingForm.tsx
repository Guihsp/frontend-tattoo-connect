import { useState } from "react";
import * as Location from "expo-location";
import { Alert } from "react-native";
import { getTattooMatching } from "@/services/api/tattooMatching";

type Order = "asc" | "desc";

export function useTattooMatchingForm() {
  const [selected, setSelected] = useState<Record<string, string[]>>({});
  const [maxDistanceKm, setMaxDistanceKm] = useState("10");
  const [priceOrder, setPriceOrder] = useState<Order>("asc");
  const [ratingOrder, setRatingOrder] = useState<Order>("desc");
  const [distanceOrder, setDistanceOrder] = useState<Order>("asc");
  const [searching, setSearching] = useState(false);

  const handleToggle = (category: string, paramId: string) => {
    const current = selected[category] || [];
    let updated: Record<string, string[]> = { ...selected };
    if (current.includes(paramId)) {
      updated[category] = current.filter(id => id !== paramId);
    } else {
      updated[category] = [...current, paramId];
    }
    setSelected(updated);
  };

  const handleSearch = async (onResult: (result: any) => void) => {
    setSearching(true);

    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert("Permissão negada", "Permita o acesso à localização para buscar tatuadores próximos.");
        setSearching(false);
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      const latitude = location.coords.latitude;
      const longitude = location.coords.longitude;


    
      const parameterIds = Object.values(selected).flat();
      console.log("Parâmetros selecionados:", parameterIds);

      const result = await getTattooMatching({
        parameterIds,
        latitude,
        longitude,
       
        priceOrder,
        ratingOrder,
        distanceOrder
      });

      console.log("Resultado da busca:", JSON.stringify(result, null, 2));
      if (!result || result.length === 0) {
        Alert.alert("Nenhum resultado encontrado", "Tente ajustar seus filtros.");
      }

      onResult(result);

    } catch (err) {
      Alert.alert("Erro", "Não foi possível buscar tatuadores.");
    }
    setSearching(false);
  };

  return {
    selected,
    setSelected,
    handleToggle,
    maxDistanceKm,
    setMaxDistanceKm,
    priceOrder,
    setPriceOrder,
    ratingOrder,
    setRatingOrder,
    distanceOrder,
    setDistanceOrder,
    searching,
    handleSearch,

  };
}