import { useCallback, useState } from "react";
import { Text } from "react-native";
import { router } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";
import BackButton from "@/components/buttons/BackButton";
import Container from "@/components/global/Container";
import { styles } from "./styles";
import GenericButton from "@/components/buttons/GenericButton";
import ParametersList from "@/components/tattooArtist/ParametersList";
import { getAllTattooArtistParameters } from "@/services/api/parameters";
import { useAuth } from "@/contexts/AuthContext";

export default function TattooParametersManagementScreen() {
    const { user } = useAuth();
    const [parameters, setParameters] = useState([]);
    const [loading, setLoading] = useState(true);

    useFocusEffect(
        useCallback(() => {
            if (!user) return;
            setLoading(true);
            getAllTattooArtistParameters(user.id)
                .then(setParameters)
                .finally(() => setLoading(false));
        }, [user])
    );

    return (
        <Container scrollable justifyContent="flex-start">
            <BackButton style={{ marginTop: 40, marginBottom: 20 }} />

            <Text style={styles.title}>
                Gerencie os parâmetros de tatuagem
            </Text>

            <GenericButton
                title="Cadastrar Parâmetros"
                onPress={() => router.push("/(tattoo-artist)/tattooParametersForm")}
            />

            <Text style={styles.titleList}>
                Parâmetros Cadastrados
            </Text>

            {loading ? (
                <Text style={{ textAlign: "center", marginTop: 16 }}>Carregando...</Text>
            ) : (
                <ParametersList 
                data={parameters} 
                onChange={() => {getAllTattooArtistParameters(user.id).then(setParameters);}}
                />
            )}
        </Container>
    );
}