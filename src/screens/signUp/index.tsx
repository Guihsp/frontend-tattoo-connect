import { Text } from "react-native";

import Container from "@/src/components/global/Container";
import { RegisterForm } from "@/src/components/Auth/RegisterForm";
import { styles } from "./styles";
import { router } from "expo-router";

export default function SignUpScreen() {
    return (
        <Container>
            <Text style={styles.title}>Cadastrar</Text>
            
        </Container>
    );
}