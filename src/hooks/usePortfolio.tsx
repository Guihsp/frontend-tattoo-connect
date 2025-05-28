import { useState, useEffect } from "react";
import { getPortfolio, submitImageForPortfolio, deletePortfolioImage } from "@/src/services/api/portfolio";
import { useAuth } from "@/src/contexts/AuthContext";

export interface PortfolioItem {
    id: string;
    imageUrl: string;
    description: string;
}

export function usePortfolio() {
    const { user } = useAuth();
    const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [uploadVisible, setUploadVisible] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

    const fetchPortfolio = async () => {
        if (!user?.id) return;
        setLoading(true);
        setError(null);
        try {
            const data = await getPortfolio(user.id);
            setPortfolio(Array.isArray(data) ? data : [data]);
        } catch (err) {
            setError("Erro ao carregar portfólio.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPortfolio();
    }, [user?.id]);

    const handleImagePress = (item: PortfolioItem) => {
        setSelectedItem(item);
        setModalVisible(true);
    };

    const handleUpload = async (fileUri: string, description: string) => {
        setUploading(true);
        try {
            await submitImageForPortfolio(fileUri, description);
            setUploadVisible(false);
            fetchPortfolio();
        } catch (e) {
            setError("Erro ao enviar imagem.");
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (id: string) => {
        setLoading(true);
        try {
            await deletePortfolioImage(id);
            fetchPortfolio();
        } catch (e) {
            setError("Erro ao excluir imagem.");
        } finally {
            setLoading(false);
        }
    };

    return {
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
        handleDelete,
    };
}