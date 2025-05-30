import { useLocalSearchParams } from "expo-router";

import BackButton from "@/src/components/buttons/BackButton";
import Container from "@/src/components/global/Container";
import ProfileDetails from "@/src/components/tattooArtist/ProfileDetails";

export default function TattooArtistProfileScreen() {
    const { id } = useLocalSearchParams();
    console.log("TattooArtistProfileScreen id:", id);
    return (
        <Container scrollable>
           <BackButton  style={{marginTop: 10}}/>

            <ProfileDetails tattooArtistId={id as string} />

        </Container>
    )
}