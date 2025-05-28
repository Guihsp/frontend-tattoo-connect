import { Text, View } from "react-native";

import Container from "@/src/components/global/Container";
import BioForm from "@/src/components/tattooArtist/BioForm/Index";
import { useBioRegister } from "@/src/hooks/useBio";
import { styles } from "./styles";
import BackButton from "@/src/components/buttons/BackButton";


export default function BioRegisterScreen() {
    const {
        bio,
        setBio,
        error,
        loading,
        handleBioRegister,
    } = useBioRegister();

    return (
        <Container>
            <BackButton />
            <View style={styles.bioContainer}>
                <View style={styles.avatar} />
                <View style={styles.bioTextContainer}>
                    <Text style={styles.name}>
                        {loading ? "Carregando..." : "Seu Nome Aqui"}
                    </Text>           
                    <Text style={styles.bioText}>
                        {loading ? "Carregando..." : (bio || "Escreva um pouco sobre você...")}
                    </Text>
                </View>
            </View>

            <BioForm
                bio={bio}
                onChangeBio={setBio}
                onSubmit={handleBioRegister}
                error={error}
                loading={loading}
            />
        </Container>
    );
}