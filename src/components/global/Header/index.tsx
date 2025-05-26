import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@/src/contexts/AuthContext";
import icons from "@/src/assets/images";
import { styles } from "./styles";

export default function AppHeader() {
  const { user, handleSignOut } = useAuth();
  const router = useRouter();

  if (!user) return null;

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={handleSignOut}>
        <Text style={styles.text}>
          Sair
        </Text>
      </TouchableOpacity>

      {user.role === "TATTOO_ARTIST" ? (
        <TouchableOpacity onPress={() => router.push("/(tattoo-artist)/profile")}>
          <Image
            source={icons.avatarIcon}
            style={styles.avatar}
          />
        </TouchableOpacity>
      ) : (
        <Text style={styles.text}>
          Bem-vindo, Cliente
        </Text>
      )}
    </View>
  );
}