import { useState } from "react";
import { View, Text, TouchableOpacity, Modal, TextInput, ActivityIndicator, Alert } from "react-native";
import { styles } from "./styles";
import { updateTattooArtistParameter, deleteTattooArtistParameter } from "@/services/api/parameters";

interface ParameterItem {
    id: string;
    parameter: {
        id: string;
        category: string;
        name: string;
    };
    price: string;
}

interface Props {
    data: ParameterItem[];
    onChange?: () => void; 
}

export default function ParametersList({ data, onChange }: Props) {
    const [selected, setSelected] = useState<ParameterItem | null>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [price, setPrice] = useState("");
    const [loading, setLoading] = useState(false);

    const openModal = (item: ParameterItem) => {
        setSelected(item);
        setPrice(item.price);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelected(null);
        setPrice("");
    };

    const handleUpdate = async () => {
        if (!selected) return;
        setLoading(true);
        try {
            await updateTattooArtistParameter(
                selected.id,
                selected.parameter.id,
                Number(price),  
                selected.parameter.category,
                selected.parameter.name
            );
            closeModal();
            onChange && onChange();
        } catch (e) {
            Alert.alert("Erro", "Não foi possível atualizar o parâmetro.");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!selected) return;
        setLoading(true);
        try {
            await deleteTattooArtistParameter(selected.id);
            closeModal();
            onChange && onChange();
        } catch (e) {
            Alert.alert("Erro", "Não foi possível excluir o parâmetro.");
        } finally {
            setLoading(false);
        }
    };

    if (!data?.length) {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>Nenhum parâmetro cadastrado.</Text>
            </View>
        );
    }

    return (
        <View style={styles.listContainer}>
            {data.map((item) => (
                <TouchableOpacity key={item.id} onPress={() => openModal(item)} style={styles.itemContainer}>
                    <Text style={styles.category}>{item.parameter.category}</Text>
                    <Text style={styles.name}>{item.parameter.name}</Text>
                    <Text style={styles.price}>R$ {Number(item.price).toFixed(2)}</Text>
                </TouchableOpacity>
            ))}

            <Modal
                visible={modalVisible}
                transparent
                animationType="slide"
                onRequestClose={closeModal}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <View style={{
                        backgroundColor: "#222",
                        padding: 24,
                        borderRadius: 12,
                        width: "85%"
                    }}>
                        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18, marginBottom: 12 }}>
                            Editar Parâmetro
                        </Text>
                        <Text style={{ color: "#aaa", marginBottom: 8 }}>
                            {selected?.parameter.category} - {selected?.parameter.name}
                        </Text>
                        <TextInput
                            style={{
                                backgroundColor: "#333",
                                color: "#fff",
                                borderRadius: 8,
                                padding: 10,
                                marginBottom: 16,
                                borderWidth: 1,
                                borderColor: "#444"
                            }}
                            placeholder="Preço (R$)"
                            placeholderTextColor="#888"
                            keyboardType="numeric"
                            value={price}
                            onChangeText={setPrice}
                            editable={!loading}
                        />
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <TouchableOpacity
                                onPress={handleUpdate}
                                style={{
                                    backgroundColor: "#50c76c",
                                    padding: 10,
                                    borderRadius: 8,
                                    flex: 1,
                                    marginRight: 8,
                                    alignItems: "center"
                                }}
                                disabled={loading}
                            >
                                {loading ? <ActivityIndicator color="#fff" /> : <Text style={{ color: "#fff", fontWeight: "bold" }}>Salvar</Text>}
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={handleDelete}
                                style={{
                                    backgroundColor: "#E74C3C",
                                    padding: 10,
                                    borderRadius: 8,
                                    flex: 1,
                                    marginLeft: 8,
                                    alignItems: "center"
                                }}
                                disabled={loading}
                            >
                                {loading ? <ActivityIndicator color="#fff" /> : <Text style={{ color: "#fff", fontWeight: "bold" }}>Excluir</Text>}
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={closeModal} style={{ marginTop: 16, alignItems: "center" }}>
                            <Text style={{ color: "#aaa" }}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}