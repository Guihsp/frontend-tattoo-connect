import { Text, View, TextInput } from "react-native"
import { styles } from "./styles";
import GenericButton from "@/src/components/buttons/GenericButton";

interface Props {
    bio: string;
    onChangeBio: (text: string) => void;
    onSubmit: () => void;
    error?: string | null;
    loading?: boolean;
}

export default function BioForm({
    bio,
    onChangeBio,
    onSubmit,
    error,
    loading,
}: Props) {

    return (
        <View style={styles.formContainer}>
            <View>
                <Text style={styles.label}>Digite sua bio:</Text>
                <TextInput
                    value={bio}
                    onChangeText={onChangeBio}
                    placeholder="Digite sua bio..."
                    style={styles.input}
                    placeholderTextColor={styles.inputPlaceholder.color}
                    editable={!loading}
                    multiline
                    numberOfLines={4}
                />
            </View>
            
            {error && <Text style={styles.error}>{error}</Text>}
            <GenericButton
                title="Salvar"
                onPress={onSubmit}
                filled={true}
            />
        </View>
    )
}