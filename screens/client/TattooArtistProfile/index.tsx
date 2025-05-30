import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

import BackButton from "@/src/components/buttons/BackButton";
import Container from "@/src/components/global/Container";
import ProfileDetails from "@/src/components/tattooArtist/ProfileDetails";
import { styles } from "../home/styles";

export default function TattooArtistProfileScreen() {
    const { id } = useLocalSearchParams();
    console.log("TattooArtistProfileScreen id:", id);
    return (
        <Container scrollable justifyContent="flex-start">
            <View style={styles.header}>
                <BackButton route='/(tattoo-artist)/' />
                <Text style={styles.title}>Perfil do tatuador</Text>
            </View>

            <ProfileDetails tattooArtistId={id as string} />

        </Container>
    )
}