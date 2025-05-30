import { View, Text } from "react-native";
import PortfolioList from "../PortfolioList";
import GenericButton from "@/src/components/buttons/GenericButton";
import PortfolioModal from "../PortfolioModal";
import UploadModal from "../UploadModal";
import { PortfolioItem } from "@/src/hooks/usePortfolio";

interface Props {
    portfolio: PortfolioItem[];
    loading: boolean;
    error: string | null;
    showAddButton?: boolean;
    onAddPress?: () => void;
    onImagePress: (item: PortfolioItem) => void;
    uploadVisible?: boolean;
    onUploadClose?: () => void;
    onUpload?: (fileUri: string, description: string) => Promise<void>; 
    uploading?: boolean;
    modalVisible?: boolean;
    selectedItem?: PortfolioItem | null;
    onModalClose?: () => void;
    canDelete?: boolean; 
    onDelete?: (id: string) => void;
}

export default function PortfolioSection({
    portfolio,
    loading,
    error,
    showAddButton = false,
    onAddPress,
    onImagePress,
    uploadVisible = false,
    onUploadClose,
    onUpload,
    uploading = false,
    modalVisible = false,
    selectedItem,
    onModalClose,
    canDelete = false,
    onDelete,
}: Props) {
    return (
        <View>
            {showAddButton && onAddPress && (
                <GenericButton title="Adicionar Imagem" onPress={onAddPress} style={{ marginVertical: 16 }} />
            )}
            
            <PortfolioList
                portfolio={portfolio}
                loading={loading}
                error={error}
                onImagePress={onImagePress}
                canDelete={canDelete}
                onDelete={onDelete}
            />
            {onUpload && uploadVisible !== undefined && (
                <UploadModal
                    visible={uploadVisible}
                    onClose={onUploadClose ?? (() => { })}
                    onUpload={onUpload ?? (async () => { })}
                    loading={uploading}
                />
            )}
            {selectedItem && modalVisible !== undefined && (
                <PortfolioModal
                    visible={modalVisible}
                    imageUrl={selectedItem.imageUrl}
                    description={selectedItem.description}
                    onClose={onModalClose ?? (() => { })}
                />
            )}
        </View>
    );
}