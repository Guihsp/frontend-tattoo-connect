import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

import BackButton from "@/components/buttons/BackButton";
import Container from "@/components/global/Container";
import ProfileDetails from "@/components/tattooArtist/ProfileDetails";
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