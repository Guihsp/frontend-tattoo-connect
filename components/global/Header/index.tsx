import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@/contexts/AuthContext";
import icons from "@/assets/images";
import { styles } from "./styles";

export default function AppHeader() {
  const { user, handleSignOut } = useAuth();
  const router = useRouter();

  if (!user) return null;

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => router.push("/(tattoo-artist)")}>
        <Image
          source={icons.logoVertical}
          style={styles.logo}
        />
      </TouchableOpacity>

      {user.role === "TATTOO_ARTIST" ? (
        <View style={styles.userInfo}>
          <Text style={styles.text} onPress={handleSignOut}>
            Sair
          </Text>
          <TouchableOpacity onPress={() => router.push("/(tattoo-artist)/profile")}>
            <Image
              source={icons.avatarIcon}
              style={styles.avatar}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={styles.text} onPress={handleSignOut}>
        Sair
        </Text>
      )}
    </View>
  );
}