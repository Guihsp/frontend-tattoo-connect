import { Text, View } from "react-native";

import Container from "@/src/components/global/Container";
import BioForm from "@/src/components/tattooArtist/BioForm/Index";
import { useBioRegister } from "@/src/hooks/useBio";
import { styles } from "./styles";


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

            <View style={styles.bioContainer}>
                <View style={styles.avatar} />
                <Text style={styles.bioText}>
                    {bio || "Escreva um pouco sobre você..."}
                </Text>
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