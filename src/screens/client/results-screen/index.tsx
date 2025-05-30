import { useRouter, useLocalSearchParams } from "expo-router";
import Container from "@/src/components/global/Container";
import BackButton from "@/src/components/buttons/BackButton";
import { View, FlatList, Text } from "react-native";
import CardTattooArtist from "@/src/components/client/CardTattooArtist";
import { styles } from "./styles";

export default function ResultsScreen() {
  const router = useRouter();
  const { results } = useLocalSearchParams();

  const parsedResults = results ? JSON.parse(results as string) : [];

  if (!parsedResults || parsedResults.length === 0) {
    return <Text style={{ margin: 20 }}>Nenhum tatuador encontrado.</Text>;
  }

  return (
    <Container>
      <BackButton style={{marginTop: 10}}/>
      <Text style={styles.title}>
        Resultados da Busca
      </Text>
      <FlatList
        data={parsedResults}
        keyExtractor={item => item.tattooArtistId}
        renderItem={({ item }) => (
          <CardTattooArtist
            tattooArtistId={item.tattooArtistId}
            averageRating={item.averageRating}
            distanceKm={item.distanceKm}
            averagePrice={item.averagePrice}
            onPressProfile={() => router.push({
              pathname: "/(client)/TattooArtistProfile",
              params: { id: item.tattooArtistId }
            })}
          />
        )}
        contentContainerStyle={{ gap: 20, padding: 10 }}
      />

    </Container>
  );
}