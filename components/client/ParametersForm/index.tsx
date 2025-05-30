import React from "react";
import { View, Text, ActivityIndicator, TouchableOpacity, TextInput, Alert } from "react-native";
import { useTattooParameters } from "@/hooks/useTattooMatching";
import { useTattooMatchingForm } from "@/hooks/useTattooMatchingForm";
import { styles } from "./styles";
import GenericButton from "@/components/buttons/GenericButton";
import { useRouter } from "expo-router";

const CATEGORIES = [
    "ESTILO", "CORES", "DETALHAMENTO", "LOCAL", "ALTURA_CM", "LARGURA_CM",
    "COMPLEXIDADE", "SESSAO", "DURACAO", "PERSONALIZADA", "COVER_UP", "MATERIAL", "URGENCIA"
];

const orderOptions = [
    { label: "Crescente", value: "asc" },
    { label: "Decrescente", value: "desc" }
];

const distanceOptions = [
    { label: "5 km", value: "5" },
    { label: "10 km", value: "10" },
    { label: "20 km", value: "20" },
    { label: "50 km", value: "50" },
    { label: "80 km", value: "80" },
    { label: "100 km", value: "100" },
];

export default function ParametersForm() {
    const { grouped, loading, error } = useTattooParameters();
    const {
        selected,
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
    } = useTattooMatchingForm();

    const router = useRouter();

    if (loading) return <ActivityIndicator />;
    if (error) return <Text>{error}</Text>;

    return (
        <View>
            {CATEGORIES.map((category) => (
                grouped[category] && (
                    <View key={category} style={{ marginBottom: 20 }}>
                        <Text style={styles.category}>{category}</Text>
                        <View style={styles.buttonsContainer}>
                            {grouped[category].map((param) => {
                                const isSelected = (selected[category] || []).includes(param.id);
                                return (
                                    <TouchableOpacity
                                        key={param.id}
                                        style={[
                                            styles.button,
                                            isSelected && styles.buttonSelected
                                        ]}
                                        onPress={() => handleToggle(category, param.id)}
                                    >
                                        <Text style={[
                                            styles.buttonText,
                                            isSelected && styles.buttonTextSelected
                                        ]}>
                                            {param.name}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </View>
                )
            ))}

            <Text style={styles.category}>Distância máxima:</Text>
            <View style={styles.buttonsContainer}>
                {distanceOptions.map(opt => (
                    <TouchableOpacity
                        key={opt.value}
                        style={[
                            styles.button,
                            maxDistanceKm === opt.value && styles.buttonSelected
                        ]}
                        onPress={() => setMaxDistanceKm(opt.value)}
                    >
                        <Text style={[
                            styles.buttonText,
                            maxDistanceKm === opt.value && styles.buttonTextSelected
                        ]}>{opt.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Text style={styles.category}>Ordenar por preço:</Text>
            <View style={styles.buttonsContainer}>
                {orderOptions.map(opt => (
                    <TouchableOpacity
                        key={opt.value}
                        style={[
                            styles.button,
                            priceOrder === opt.value && styles.buttonSelected
                        ]}
                        onPress={() => setPriceOrder(opt.value as "asc" | "desc")}
                    >
                        <Text style={[
                            styles.buttonText,
                            priceOrder === opt.value && styles.buttonTextSelected
                        ]}>{opt.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Text style={styles.category}>Ordenar por avaliação:</Text>
            <View style={styles.buttonsContainer}>
                {orderOptions.map(opt => (
                    <TouchableOpacity
                        key={opt.value}
                        style={[
                            styles.button,
                            ratingOrder === opt.value && styles.buttonSelected
                        ]}
                        onPress={() => setRatingOrder(opt.value as "asc" | "desc")}
                    >
                        <Text style={[
                            styles.buttonText,
                            ratingOrder === opt.value && styles.buttonTextSelected
                        ]}>{opt.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Text style={styles.category}>Ordenar por distância:</Text>
            <View style={styles.buttonsContainer}>
                {orderOptions.map(opt => (
                    <TouchableOpacity
                        key={opt.value}
                        style={[
                            styles.button,
                            distanceOrder === opt.value && styles.buttonSelected
                        ]}
                        onPress={() => setDistanceOrder(opt.value as "asc" | "desc")}
                    >
                        <Text style={[
                            styles.buttonText,
                            distanceOrder === opt.value && styles.buttonTextSelected
                        ]}>{opt.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <GenericButton
                title={searching ? "Buscando..." : "Buscar Tatuadores"}
                onPress={() => handleSearch((result) => {
                    if (result.length === 0) {
                        Alert.alert("Nenhum resultado encontrado", "Tente ajustar seus filtros.");
                    } else {
                        router.push({
                            pathname: "/(client)/searchTattoosMatch",
                            params: { results: JSON.stringify(result) }
                        });
                    }
                })}
                filled
                style={{ marginVertical: 20 }}
            />
        </View>
    );
}