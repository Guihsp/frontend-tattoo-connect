import { View, Text, ActivityIndicator, Image, Alert, TouchableOpacity } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Linking from "expo-linking";

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
import GenericButton from "../../buttons/GenericButton";


interface Props {
    tattooArtistId?: string;
}

export default function ProfileDetails({ tattooArtistId }: Props) {
    const { profile, loading, error } = useProfile(tattooArtistId);
    const { portfolio, handleImagePress, selectedItem, modalVisible, setModalVisible, setSelectedItem,  } = usePortfolio(tattooArtistId);
    const { user } = useAuth();
    const [uploading, setUploading] = useState(false);
    const [contactLoading, setContactLoading] = useState(false);

    const handleContactPress = async () => {
        if (!tattooArtistId) return;
        setContactLoading(true);
        try {
            const data = await getTattooArtistContact(tattooArtistId);
            const phone = data?.whatsapp || data?.phone || data?.number;
            if (!phone) {
                Alert.alert("Erro", "Contato do tatuador não encontrado.");
                return;
            }
            // Remove caracteres não numéricos e garante o DDI (ex: 55 para Brasil)
            let cleanPhone = phone.replace(/\D/g, "");
            if (cleanPhone.length === 11) cleanPhone = "55" + cleanPhone;
            const url = `https://wa.me/${cleanPhone}`;
            Linking.openURL(url);
        } catch (e) {
            Alert.alert("Erro", "Não foi possível obter o contato do tatuador.");
        } finally {
            setContactLoading(false);
        }
    };

    const handleAvatarPress = async () => {
        // Só permite se for o próprio tatuador
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
                // Aqui você pode recarregar o perfil, se necessário
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

    return (
        <>
            { profile.user.role !== "TATTOO_ARTIST" && (
                <Text style={styles.subtitle}>*Clique no icone para alterar a foto</Text>
            )}
            <View style={styles.bioContainer}>
                <TouchableOpacity
                    onPress={handleAvatarPress}
                    disabled={!user || user.role !== "TATTOO_ARTIST" || user.id !== profile.user.id || uploading}
                    activeOpacity={0.7}
                >
                    {profile.profileImageUrl ? (
                        <Image source={{ uri: profile.profileImageUrl }} style={styles.avatar} />
                    ) : (
                        <View style={styles.avatar} />
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
                <ParametersListProfile
                    title="Estilos"
                    parameters={profile.parameters}
                />
            </View>

            <View >
                <Text style={styles.title}>Portfólio</Text>
                <PortfolioSection
                    portfolio={portfolio}
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

            {(!user || user.role !== "TATTOO_ARTIST" || user.id !== profile.user.id) && (
                <GenericButton
                    title={contactLoading ? "Abrindo WhatsApp..." : "Entrar em contato"}
                    onPress={handleContactPress}
                />
            )}
        </>
    );
}