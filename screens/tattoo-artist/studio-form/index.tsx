import { Text } from "react-native";
import Container from "@/components/global/Container";
import StudioForm from "@/components/tattooArtist/StudioForm";
import BackButton from "@/components/buttons/BackButton";
import { useStudio } from "@/hooks/useStudio";
import { useAuth } from '@/contexts/AuthContext';
import { styles } from "./styles";

export default function StudioFormScreen() {
    const { user } = useAuth();
    const {
        name,
        setName,
        address,
        setAddress,
        phone,
        setPhone,
        handleSaveStudio,
        error,
        loading,
    } = useStudio(user?.id);

    return (
        <Container>
            <BackButton/>
            <Text style={styles.title}>
                {loading ? "Carregando..." : "Dados do Estúdio"}
            </Text>
            <StudioForm
                name={name}
                onChangeName={setName}
                address={address}
                onChangeAddress={setAddress}
                phone={phone}
                onChangePhone={setPhone}
                onSubmit={handleSaveStudio}
                error={error}
                loading={loading}
            />
        </Container>
    );
}