import { useRouter, useLocalSearchParams } from "expo-router";
import Container from "@/components/global/Container";
import BackButton from "@/components/buttons/BackButton";
import { View, FlatList, Text } from "react-native";
import CardTattooArtist from "@/components/client/CardTattooArtist";
import { styles } from "./styles";

export default function ResultsScreen() {
  const router = useRouter();
  const { results } = useLocalSearchParams();

  const parsedResults = results ? JSON.parse(results as string) : [];

  if (!parsedResults || parsedResults.length === 0) {
    return <Text style={{ margin: 20 }}>Nenhum tatuador encontrado.</Text>;
  }
  console.log("ResultsScreen parsedResults:", parsedResults);
  return (
    <Container>
      <BackButton style={{marginTop: 10}}/>
      <Text style={styles.title}>
        Resultados da Busca
      </Text>

      <Text style={styles.subtitle}>
        Tatuadores disponíveis com
        base na localidade e parâmetros da tatuagem.
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
            foto={item.foto || null}
            name={item.name}
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