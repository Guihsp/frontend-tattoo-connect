import { Text } from "react-native";
import Container from "@/src/components/global/Container";
import StudioForm from "@/src/components/tattooArtist/StudioForm";
import BackButton from "@/src/components/buttons/BackButton";
import { useStudio } from "@/src/hooks/useStudio";
import { styles } from "./styles";

export default function StudioRegisterScreen() {
    const {
        name,
        setName,
        address,
        setAddress,
        phone,
        setPhone,
        handleRegisterStudio,
        error,
        loading,
    } = useStudio();

    return (
        <Container>
            <BackButton/>
            <Text style={styles.title}>Cadastrar Estúdio</Text>
            <StudioForm
                name={name}
                onChangeName={setName}
                address={address}
                onChangeAddress={setAddress}
                phone={phone}
                onChangePhone={setPhone}
                onSubmit={handleRegisterStudio}
                error={error}
                loading={loading}
            />
        </Container>
    );
}