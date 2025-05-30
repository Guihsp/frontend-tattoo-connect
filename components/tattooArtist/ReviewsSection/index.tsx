import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { getReviewsByArtist } from "@/services/api/reviews";
import { styles } from "./styles";

interface Props {
    tattooArtistId: string;
}

export default function ReviewsSection({ tattooArtistId }: Props) {
    const [reviews, setReviews] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchReviews = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await getReviewsByArtist(tattooArtistId);
                setReviews(data);
            } catch (e) {
                setError("Erro ao carregar avaliações.");
            } finally {
                setLoading(false);
            }
        };
        fetchReviews();
    }, [tattooArtistId]);

    if (loading) return <ActivityIndicator size="small" color="#222" />;
    if (error) return <Text style={styles.error}>{error}</Text>;
    if (!reviews.length) return <Text style={styles.empty}>Nenhuma avaliação ainda.</Text>;

    return (
        <View style={{ marginTop: 24 }}>
            <Text style={styles.title}>Avaliações</Text>
            <FlatList
                data={reviews}
                keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.name}>{item.user?.name || "Cliente"}</Text>
                        <Text style={styles.rating}>Nota: {item.rating}/5</Text>
                        <Text style={styles.comment}>{item.comment}</Text>
                    </View>
                )}
                scrollEnabled={false}
            />
        </View>
    );
}

