import { Modal, View, Text, TouchableOpacity, TextInput, Image, StyleSheet, ActivityIndicator } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

interface Props {
    visible: boolean;
    onClose: () => void;
    onUpload: (fileUri: string, description: string) => Promise<void>;
    loading?: boolean;
}

export default function UploadModal({ visible, onClose, onUpload, loading }: Props) {
    const [imageUri, setImageUri] = useState<string | null>(null);
    const [description, setDescription] = useState("");
    const [error, setError] = useState<string | null>(null);

    const pickImage = async () => {
        setError(null);
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 0.8,
        });
        if (!result.canceled && result.assets && result.assets.length > 0) {
            setImageUri(result.assets[0].uri);
        }
    };

    const handleSubmit = async () => {
        setError(null);
        if (!imageUri) {
            setError("Selecione uma imagem.");
            return;
        }
        await onUpload(imageUri, description);
        setImageUri(null);
        setDescription("");
    };

    const handleClose = () => {
        setImageUri(null);
        setDescription("");
        setError(null);
        onClose();
    };

    return (
        <Modal visible={visible} transparent animationType="slide">
            <View style={styles.overlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.title}>Adicionar Imagem ao Portfólio</Text>
                    <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
                        {imageUri ? (
                            <Image source={{ uri: imageUri }} style={styles.image} />
                        ) : (
                            <Text style={styles.imagePickerText}>Selecionar Imagem</Text>
                        )}
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        placeholder="Descrição (opcional)"
                        value={description}
                        onChangeText={setDescription}
                        multiline
                        numberOfLines={3}
                    />
                    {error && <Text style={styles.error}>{error}</Text>}
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.cancelButton} onPress={handleClose} disabled={loading}>
                            <Text style={styles.cancelText}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.uploadButton} onPress={handleSubmit} disabled={loading}>
                            {loading ? (
                                <ActivityIndicator color="#fff" />
                            ) : (
                                <Text style={styles.uploadText}>Enviar</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1, backgroundColor: "rgba(0,0,0,0.7)", justifyContent: "center", alignItems: "center"
    },
    modalContent: {
        backgroundColor: "#fff", borderRadius: 10, padding: 20, alignItems: "center", width: 320
    },
    title: {
        fontSize: 18, fontWeight: "bold", marginBottom: 16
    },
    imagePicker: {
        width: 200, height: 200, backgroundColor: "#eee", borderRadius: 10, justifyContent: "center", alignItems: "center", marginBottom: 16
    },
    imagePickerText: {
        color: "#888"
    },
    image: {
        width: 200, height: 200, borderRadius: 10
    },
    input: {
        width: "100%", borderColor: "#ccc", borderWidth: 1, borderRadius: 6, padding: 8, marginBottom: 12, textAlignVertical: "top"
    },
    error: {
        color: "red", marginBottom: 8
    },
    buttonRow: {
        flexDirection: "row", justifyContent: "space-between", width: "100%"
    },
    cancelButton: {
        backgroundColor: "#ccc", padding: 10, borderRadius: 6, flex: 1, marginRight: 8, alignItems: "center"
    },
    uploadButton: {
        backgroundColor: "#222", padding: 10, borderRadius: 6, flex: 1, marginLeft: 8, alignItems: "center"
    },
    cancelText: {
        color: "#222", fontWeight: "bold"
    },
    uploadText: {
        color: "#fff", fontWeight: "bold"
    }
});