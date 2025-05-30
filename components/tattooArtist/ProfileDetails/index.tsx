import { View, Text, ActivityIndicator, Image, Alert, TouchableOpacity } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Linking from "expo-linking";
import {  useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

import ReviewsSection from "@/src/components/tattooArtist/ReviewsSection";
import PortfolioSection from "@/src/components/tattooArtist/PortfolioSection";
import ParametersListProfile from "@/src/components/tattooArtist/ParametersListProfile";
import { usePortfolio } from "@/src/hooks/usePortfolio";
import { useProfile } from "@/src/hooks/useProfile";
import { styles } from "./styles";
import icons from "@/src/assets/images";
import { useAuth } from "@/src/contexts/AuthContext";
import { uploadTattooArtistPhoto } from "@/src/services/api/tattoArtist";
import { getTattooArtistContact } from "@/src/services/api/tattoArtist";
import { router } from "expo-router";
import GenericButton from "@/src/components/buttons/GenericButton";
import { Modal, TextInput } from "react-native";
import { createReview } from "@/src/services/api/reviews";


interface Props {
    tattooArtistId?: string;
}

export default function ProfileDetails({ tattooArtistId }: Props) {
    const { portfolio, handleImagePress, selectedItem, modalVisible, setModalVisible, setSelectedItem,  } = usePortfolio(tattooArtistId);
    const { user } = useAuth();
    const [uploading, setUploading] = useState(false);
    const [contactLoading, setContactLoading] = useState(false);
    const [reviewModalVisible, setReviewModalVisible] = useState(false);
    const [reviewComment, setReviewComment] = useState("");
    const [reviewRating, setReviewRating] = useState<number | null>(null);
    const [reviewLoading, setReviewLoading] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0);
    const { profile, loading, error } = useProfile(tattooArtistId, refreshKey);

    useFocusEffect(
        useCallback(() => {
            setRefreshKey((k) => k + 1);
        }, [tattooArtistId])
    );

    console.log(JSON.stringify(profile, null, 2));

    const handleSendReview = async () => {
        if (!tattooArtistId || reviewRating === null) return;
        setReviewLoading(true);
        try {
            await createReview(tattooArtistId, reviewRating, reviewComment);
            Alert.alert("Avaliação enviada!", "Obrigado pelo seu feedback.");
            setReviewModalVisible(false);
            setReviewComment("");
            setReviewRating(null);
        } catch (e) {
            Alert.alert("Erro", "Não foi possível enviar sua avaliação.");
        } finally {
            setReviewLoading(false);
        }
    };

    const handleContactPress = async () => {
        if (!tattooArtistId) return;
        setContactLoading(true);
        try {
            const data = await getTattooArtistContact(tattooArtistId);

            if (data?.whatsappUrl) {
                Linking.openURL(data.whatsappUrl);
                return;
            } else {
                Alert.alert("Contato não disponível", "O tatuador não possui um contato de WhatsApp cadastrado.");
                return;
            }

        } catch (e) {
            Alert.alert("Erro", "Não foi possível obter o contato do tatuador.");
        } finally {
            setContactLoading(false);
        }
    };

    const handleAvatarPress = async () => {

        if (!user || user.role !== "TATTOO_ARTIST" || user.id !== profile.user.id) return;

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.7,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            setUploading(true);
            const asset = result.assets[0];
            const formData = new FormData();
            formData.append('file', {
                uri: asset.uri,
                name: 'profile.jpg',
                type: 'image/jpeg',
            } as any);

            try {
                await uploadTattooArtistPhoto(formData);
                Alert.alert('Sucesso', 'Foto de perfil atualizada!');
                
                router.replace("/(tattoo-artist)/profile");
            } catch (e) {
                Alert.alert('Erro', 'Não foi possível atualizar a foto.');
            } finally {
                setUploading(false);
            }
        }
    };

    if (loading) return <ActivityIndicator size="large" color="#222" />;
    if (error) return <Text style={styles.error}>{error}</Text>;
    if (!profile) return <Text style={styles.empty}>Perfil não encontrado.</Text>;

    console.log(profile.foto)

    console.log("Portfolio:", JSON.stringify(portfolio, null, 2));
    return (
        <>
            { user?.role === "TATTOO_ARTIST" && (
                <Text style={styles.subtitle}>*Clique no icone para alterar a foto</Text>
            )}
            <View style={styles.bioContainer}>
                <TouchableOpacity
                    onPress={handleAvatarPress}
                    disabled={!user || user.role !== "TATTOO_ARTIST" || user.id !== profile.user.id || uploading}
                    activeOpacity={0.7}
                >
                    {profile.foto  === null || profile.foto === "" || user?.role !== "TATTOO_ARTIST" || user.id !== profile.user.id ? (
                        <View style={[styles.avatar, { justifyContent: "center", alignItems: "center" }]}>
                            <Image source={icons.edit} style={styles.editIcon} />
                        </View>
                    ) : (
                            <Image source={{ uri: profile.foto }} style={styles.avatar} />
                    )}
                    {uploading && (
                        <View style={[styles.avatar, { position: "absolute", backgroundColor: "rgba(255,255,255,0.6)", justifyContent: "center", alignItems: "center" }]}>
                            <ActivityIndicator color="#222" />
                        </View>
                    )}
                </TouchableOpacity>
                <View style={styles.bioText}>
                    <Text style={styles.name}>{profile.user.name}</Text>
                    <Text style={styles.bio}>{profile.bio}</Text>
                </View>
            </View>

            <View style={styles.infoContainer}>
                <View style={styles.infoItem}>
                    <Image source={icons.locationPin} style={styles.icon} />
                    <Text style={styles.infoValue}>{profile.studio.address}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Image source={icons.email} style={styles.icon} />
                    <Text style={styles.infoValue}>{profile.user.email}</Text>    
                </View>

                <View style={styles.infoItem}>
                    <Image source={icons.phone} style={styles.icon}/>
                    <Text style={styles.infoValue}>{profile.user.phone}</Text>
                </View>
            </View>

            <View>
                <Text style={styles.title}>Parâmetros</Text>
                <ParametersListProfile
                    parameters={profile.parameters}
                />
            </View>

            <View >
                <Text style={styles.title}>Portfólio</Text>
                <PortfolioSection
                    portfolio={profile.portfolio}
                    loading={loading}
                    error={error}
                    onImagePress={handleImagePress}
                    modalVisible={modalVisible}
                    selectedItem={selectedItem}
                    onModalClose={() => {
                        setModalVisible(false);
                        setSelectedItem(null);
                    }}
                />
            </View>

            {tattooArtistId && (
                <ReviewsSection tattooArtistId={tattooArtistId} />
            )}

            {(!user || user.role !== "TATTOO_ARTIST" || user.id !== profile.user.id) && (
                <>
                    <GenericButton
                        title={contactLoading ? "Abrindo WhatsApp..." : "Entrar em contato"}
                        onPress={handleContactPress}
                        filled
                        style={{ marginTop: 16 }}
                    />
                    <GenericButton
                        title="Avaliar tatuador"
                        onPress={() => setReviewModalVisible(true)}
                        filled={false}
                        style={{ marginTop: 16 }}
                    />
                </>
            )}

            <Modal
                visible={reviewModalVisible}
                transparent
                animationType="slide"
                onRequestClose={() => setReviewModalVisible(false)}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <View style={{
                        backgroundColor: "#fff",
                        padding: 24,
                        borderRadius: 12,
                        width: "85%"
                    }}>
                        <Text style={{ fontWeight: "bold", fontSize: 18, }}>Avaliar tatuador</Text>
                        <Text style={{ marginBottom: 8 }}>Comentário:</Text>
                        <TextInput
                            placeholder="Deixe seu comentário"
                            value={reviewComment}
                            onChangeText={setReviewComment}
                            style={{
                                borderWidth: 1,
                                borderColor: "#ccc",
                                borderRadius: 8,
                                padding: 8,
                                marginBottom: 16,
                                minHeight: 60,
                                textAlignVertical: "top"
                            }}
                            multiline
                        />
                        <Text style={{ marginBottom: 8 }}>Nota:</Text>
                        <View style={{ flexDirection: "row", marginBottom: 16 }}>
                            {[0, 1, 2, 3, 4, 5].map((num) => (
                                <TouchableOpacity
                                    key={num}
                                    onPress={() => setReviewRating(num)}
                                    style={{
                                        marginHorizontal: 4,
                                        padding: 8,
                                        borderRadius: 20,
                                        backgroundColor: reviewRating === num ? "#222" : "#eee"
                                    }}
                                >
                                    <Text style={{
                                        color: reviewRating === num ? "#fff" : "#222",
                                        fontWeight: "bold"
                                    }}>{num}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                            <TouchableOpacity
                                onPress={() => setReviewModalVisible(false)}
                                style={{ marginRight: 16 }}
                                disabled={reviewLoading}
                            >
                                <Text style={{ color: "#888" }}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={handleSendReview}
                                disabled={reviewLoading || reviewRating === null}
                                style={{
                                    backgroundColor: reviewRating === null ? "#ccc" : "#222",
                                    paddingHorizontal: 16,
                                    paddingVertical: 8,
                                    borderRadius: 8
                                }}
                            >
                                <Text style={{ color: "#fff" }}>{reviewLoading ? "Enviando..." : "Enviar"}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>


        </>
    );
}