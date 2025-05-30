import { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GenericButton from '@/components/buttons/GenericButton';
import { styles } from './styles';
import { router } from 'expo-router';
import Colors from '@/constants/Colors';

interface Props {
    email: string;
    password: string;
    onChangeEmail: (text: string) => void;
    onChangePassword: (text: string) => void;
    onSubmit: () => void;
    error?: string | null;
    loading?: boolean;
}

export const LoginForm = ({
    email,
    password,
    onChangeEmail,
    onChangePassword,
    onSubmit,
    error,
    loading,
}: Props) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.formContainer}>
            <View>
                <Text style={styles.label}>E-mail:</Text>
                <TextInput
                    value={email}
                    onChangeText={onChangeEmail}
                    placeholder="Digite seu e-mail..."
                    style={styles.input}
                    placeholderTextColor={styles.inputPlaceholder.color}
                    editable={!loading}
                />
            </View>
            <View>
                <Text style={styles.label}>Senha:</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput
                        value={password}
                        onChangeText={onChangePassword}
                        placeholder="Digite sua senha..."
                        secureTextEntry={!showPassword}
                        style={[styles.input, { flex: 1 }]}
                        placeholderTextColor={styles.inputPlaceholder.color}
                        editable={!loading}
                    />
                    <TouchableOpacity
                        onPress={() => setShowPassword((prev) => !prev)}
                        disabled={loading}
                        style={{ marginLeft: -35, padding: 8 }}
                    >
                        <Ionicons
                            name={showPassword ? 'eye-off' : 'eye'}
                            size={22}
                            color={Colors.primaryText}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            {error ? (
                <Text style={{ color: Colors.error, textAlign: 'center', marginBottom: 10 }}>{error}</Text>
            ) : null}
            <GenericButton title={loading ? "Entrando..." : "Entrar"} onPress={onSubmit} filled  />
            {loading && (
                <ActivityIndicator color={Colors.primaryText} style={{ marginVertical: 10 }} />
            )}
            <View style={styles.textContainer}>
                <View style={styles.line} />
                <Text style={styles.text}>ou</Text>
                <View style={styles.line} />
            </View>
            <GenericButton title="Criar conta" onPress={() => {
                router.push('/(auth)/sign-up');
            }}/>
        </View>
    );
};