import React from "react";
import { View, Image, TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { PortfolioItem } from "@/hooks/usePortfolio";
import { styles } from "./styles";

interface Props {
    portfolio: PortfolioItem[];
    loading?: boolean;
    error?: string | null;
    onImagePress?: (item: PortfolioItem) => void;
    columns?: number;
    canDelete?: boolean; 
    onDelete?: (id: string) => void; 
}

export default function PortfolioList({
    portfolio,
    loading = false,
    error = null,
    onImagePress,
    columns = 2,
    canDelete = false,
    onDelete,
}: Props) {
    if (loading) return <ActivityIndicator size="large" color="#222" />;
    if (error) return <Text style={styles.error}>{error}</Text>;
    if (portfolio.length === 0) return <Text style={styles.emptyText}>Sem imagens no portfólio</Text>;

    const rows = [];
    for (let i = 0; i < portfolio.length; i += columns) {
        rows.push(portfolio.slice(i, i + columns));
    }

    return (
        <View style={styles.grid}>
            {rows.map((row, rowIndex) => (
                <View style={styles.row} key={rowIndex}>
                    {row.map(item => (
                        <View key={item.id} style={styles.imageContainer}>
                            <TouchableOpacity
                                onPress={() => onImagePress && onImagePress(item)}
                                disabled={!onImagePress}
                            >
                                <Image source={{ uri: item.imageUrl }} style={styles.image} />
                            </TouchableOpacity>
                            {canDelete && onDelete && (
                                <TouchableOpacity
                                    style={styles.deleteButton}
                                    onPress={() => onDelete(item.id)}
                                >
                                    <Text style={styles.deleteButtonText}>Excluir</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    ))}
                </View>
            ))}
        </View>
    );
}