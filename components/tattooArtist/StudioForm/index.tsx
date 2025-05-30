import { View, TextInput, Text } from "react-native";

import GenericButton from "@/components/buttons/GenericButton";
import { styles } from "./styles";

interface Props {
    name: string;
    onChangeName: (text: string) => void;
    phone: string;
    onChangePhone: (text: string) => void;
    address: string;
    onChangeAddress: (text: string) => void;
    onSubmit: () => void;
    error?: string | null;
    loading?: boolean;
}

export default function StudioForm({
    name,
    onChangeName,
    phone,
    onChangePhone,
    address,
    onChangeAddress,
    onSubmit,
    error,
    loading,
}: Props) {
    return (
        <View style={styles.formContainer}>
            <View>
                <Text style={styles.label}>Nome do estudio:</Text>
                <TextInput
                    value={name}
                    onChangeText={onChangeName}
                    placeholder="Digite o nome do estúdio..."
                    style={styles.input}
                    placeholderTextColor={styles.inputPlaceholder.color}
                    editable={!loading}
                />
            </View>
            <View>
                <Text style={styles.label}>Telefone:</Text>
                <TextInput
                    value={phone}
                    onChangeText={onChangePhone}
                    placeholder="Digite o telefone do estúdio..."
                    style={styles.input}
                    placeholderTextColor={styles.inputPlaceholder.color}
                    editable={!loading}
                />
            </View>
            <View>
                <Text style={styles.label}>Endereço:</Text>
                <TextInput
                    value={address}
                    onChangeText={onChangeAddress}
                    placeholder="Digite o endereço do estúdio..."
                    style={styles.input}
                    placeholderTextColor={styles.inputPlaceholder.color}
                    editable={!loading}
                />
            </View>
            {error && <Text style={styles.error}>{error}</Text>}
            <GenericButton
                title="Salvar"
                onPress={onSubmit}
                filled={true}
            />
        </View>
    );
}