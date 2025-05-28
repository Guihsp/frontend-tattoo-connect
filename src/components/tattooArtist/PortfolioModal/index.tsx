import { 
    Modal, 
    View, 
    Image, 
    Text, 
    TouchableOpacity 
} from "react-native";
import { styles } from "./styles";

interface Props {
    visible: boolean;
    imageUrl: string;
    description: string;
    onClose: () => void;
}

export default function PortfolioModal({ visible, imageUrl, description, onClose }: Props) {
    console.log("PortfolioModal rendered with imageUrl:", imageUrl);
    return (
        <Modal visible={visible} transparent animationType="fade">
            <View style={styles.overlay}>
                <View style={styles.modalContent}>
                    <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="contain" />
                    <Text style={styles.description}>{description}</Text>
                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <Text style={styles.closeText}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

