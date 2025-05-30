import { Text } from "react-native";

import Container from "@/src/components/global/Container";
import BackButton from "@/src/components/buttons/BackButton";
import { styles } from "./styles";
import ParametersForm from "@/src/components/client/ParametersForm";

export default function ParametersFormScreen() {
    return (
        <Container scrollable justifyContent="flex-start">
            <BackButton style={{marginVertical: 20}} />
            <Text style={styles.title}>
                Parâmetros da Tatuagem
            </Text>

            <Text style={styles.description}>
                Selecione os parâmetros para obter estimativas e tatuadores compatíveis.
            </Text>

            <ParametersForm />
        </Container>
    )
}