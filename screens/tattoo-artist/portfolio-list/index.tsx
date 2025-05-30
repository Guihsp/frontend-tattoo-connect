import { Text } from "react-native";

import Container from "@/components/global/Container";
import { usePortfolio } from "@/hooks/usePortfolio";
import { styles } from "./styles";
import BackButton from "@/components/buttons/BackButton";
import PortfolioSection from "@/components/tattooArtist/PortfolioSection";
import { useAuth } from "@/contexts/AuthContext";



export default function PortfolioListScreen() {
    const { user } = useAuth();
    const {
        portfolio,
        loading,
        error,
        uploadVisible,
        setUploadVisible,
        uploading,
        handleUpload,
        modalVisible,
        setModalVisible,
        selectedItem,
        setSelectedItem,
        handleImagePress,
        handleDelete
    } = usePortfolio();

    return (
        <Container scrollable justifyContent="flex-start">
            <BackButton style={{ marginTop: 16 }} />
            <Text style={styles.title}>Gerencie seu Portfólio</Text>
            
            <PortfolioSection
                portfolio={portfolio}
                loading={loading}
                error={error}
                showAddButton
                onAddPress={() => setUploadVisible(true)}
                onImagePress={handleImagePress}
                uploadVisible={uploadVisible}
                onUploadClose={() => setUploadVisible(false)}
                onUpload={handleUpload}
                uploading={uploading}
                modalVisible={modalVisible}
                selectedItem={selectedItem}
                onModalClose={() => {
                    setModalVisible(false);
                    setSelectedItem(null);
                }}
                canDelete={!!user && user.role === "TATTOO_ARTIST"}
                onDelete={handleDelete}
            />
        </Container>
    );
}