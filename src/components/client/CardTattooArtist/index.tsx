import { View, Text, TouchableOpacity, Image } from "react-native";

import icons from "@/src/assets/images";
import { styles } from "./styles";

interface Props {
  tattooArtistId: string;
  averageRating: number;
  distanceKm: number;
  averagePrice: number | null;
  onPressProfile?: () => void;
  foto?: string | null;
  name: string;
}

export default function CardTattooArtist({
  tattooArtistId,
  averageRating,
  distanceKm,
  averagePrice,
  name,
  foto,
  onPressProfile,
}: Props & {foto?: string}) {
  console.log("CardTattooArtist foto:", foto);

  return (
    <View style={styles.card}>

      <View style={styles.infoContainer}>
        <Image
          source={
            foto
              ? { uri: foto }
              : icons.avatarIcon 
          }
          style={styles.avatar}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>
            {name}
          </Text>
          <Text style={styles.price}>
            Preço médio: {averagePrice ? `R$ ${averagePrice.toFixed(2)}` : "Não informado"}
          </Text>
          <Text style={styles.distance}>
            Distância: {distanceKm.toFixed(2)} km
          </Text>
        </View>
      </View>


      <View style={styles.footerCard}>
        <TouchableOpacity
          style={styles.button}
          onPress={onPressProfile}
        >
          <Text style={styles.buttonText}>Ver perfil</Text>
        </TouchableOpacity>

        <View style={styles.ratingContainer}>
          <Image
            source={icons.star}
            resizeMode="contain"
          />
          <Text style={styles.ratingText}>
            {averageRating.toFixed(1)}
          </Text>
        </View>
          
      </View>
    </View>
  );
}