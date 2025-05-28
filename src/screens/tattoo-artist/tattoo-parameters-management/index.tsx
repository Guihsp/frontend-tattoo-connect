import { useEffect, useState } from "react";
import { Text } from "react-native";
import { router } from "expo-router";
import BackButton from "@/src/components/buttons/BackButton";
import Container from "@/src/components/global/Container";
import { styles } from "./styles";
import GenericButton from "@/src/components/buttons/GenericButton";
import ParametersList from "@/src/components/tattooArtist/ParametersList";
import { getAllTattooArtistParameters } from "@/src/services/api/parameters";
import { useAuth } from "@/src/contexts/AuthContext";

export default function TattooParametersManagementScreen() {
    const { user } = useAuth();
    const [parameters, setParameters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) return;
        setLoading(true);
        getAllTattooArtistParameters(user.id)
            .then(setParameters)
            .finally(() => setLoading(false));
    }, [user]);

    return (
        <Container scrollable justifyContent="flex-start">
            <BackButton style={{ marginVertical: 16 }} />

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