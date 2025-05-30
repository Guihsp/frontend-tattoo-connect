import { View, Text, ActivityIndicator, Image } from "react-native";

import PortfolioSection from "@/src/components/tattooArtist/PortfolioSection";
import ParametersListProfile from "@/src/components/tattooArtist/ParametersListProfile";
import { usePortfolio } from "@/src/hooks/usePortfolio";
import { useProfile } from "@/src/hooks/useProfile";
import { styles } from "./styles";
import icons from "@/src/assets/images";

interface Props {
    tattooArtistId?: string;
}

export default function ProfileDetails({ tattooArtistId }: Props) {
    const { profile, loading, error } = useProfile(tattooArtistId);
    const { portfolio, handleImagePress, selectedItem, modalVisible, setModalVisible, setSelectedItem,  } = usePortfolio(tattooArtistId);

    if (loading) return <ActivityIndicator size="large" color="#222" />;
    if (error) return <Text style={styles.error}>{error}</Text>;
    if (!profile) return <Text style={styles.empty}>Perfil não encontrado.</Text>;

    return (
        <>
            <View style={styles.bioContainer}>
                <View style={styles.avatar} />
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
        </>
    );
}