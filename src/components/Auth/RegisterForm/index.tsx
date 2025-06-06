import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { Ionicons } from '@expo/vector-icons';

import GenericButton from "@/src/components/buttons/GenericButton";
import Colors from "@/src/constants/Colors";
import { styles } from "./styles"

interface RegisterFormProps {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone: string;
    type: string;
    cpf: string;
    onChangeCpf: (cpf: string) => void;
    onChangeName: (name: string) => void;
    onChangeEmail: (email: string) => void;
    onChangePassword: (password: string) => void;
    onChangeConfirmPassword: (confirmPassword: string) => void;
    onChangePhone: (phone: string) => void;
    onChangeType: (type: 'CLIENT' | 'TATTOO_ARTIST') => void;
    onSubmit: () => void;

    //bio
    bio: string;
    onChangeBio: (bio: string) => void;
    //studio
    studioAddress: string;
    onChangeStudioAddress: (studioAddress: string) => void;
    studioName: string;
    onChangeStudioName: (studioName: string) => void;
    studioPhone: string;
    onChangeStudioPhone: (studioPhone: string) => void;
    
    error: string | null;
    loading: boolean;
}

export const RegisterForm = ({
    name,
    email,
    password,
    confirmPassword,
    phone,
    type,
    cpf,
    onChangeCpf,
    onChangeName,
    onChangeEmail,
    onChangePassword,
    onChangeConfirmPassword,
    onChangePhone,
    onChangeType,
    onSubmit,
    //bio
    bio,
    onChangeBio,
    //studio
    studioAddress,
    onChangeStudioAddress,
    studioName,
    onChangeStudioName,
    studioPhone,
    onChangeStudioPhone,
    error,
    loading
}: RegisterFormProps) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.formContainer}>
            <View style={styles.typeContainer}>
                <TouchableOpacity
                    onPress={() => onChangeType("CLIENT")}
                    disabled={loading}
                    style={[
                        styles.btnType,
                        type === "CLIENT" ? styles.active : null,
                    ]}
                >
                    <Text style={styles.textType}>
                        Cliente
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => onChangeType("TATTOO_ARTIST")}
                    disabled={loading}
                    style={[
                        styles.btnType,
                        type === "TATTOO_ARTIST" ? styles.active : null,
                    ]}
                >
                    <Text style={styles.textType}>
                        Tatuador
                    </Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.label}>Nome:</Text>
                <TextInput
                    value={name}
                    onChangeText={onChangeName}
                    placeholder="Digite seu nome..."
                    style={styles.input}
                    editable={!loading}
                    placeholderTextColor={styles.inputPlaceholder.color}
                />
            </View>
            <View>
                <Text style={styles.label}>E-mail:</Text>
                <TextInput
                    value={email}
                    onChangeText={onChangeEmail}
                    placeholder="Digite seu e-mail..."
                    style={styles.input}
                    editable={!loading}
                    autoCapitalize="none"
                    placeholderTextColor={styles.inputPlaceholder.color}
                />
            </View>
            <View>
                <Text style={styles.label}>CPF:</Text>
                <TextInputMask
                    type={'cpf'}
                    value={cpf}
                    onChangeText={onChangeCpf}
                    placeholder="000.000.000-00"
                    style={styles.input}
                    editable={!loading}
                    keyboardType="numeric"
                    placeholderTextColor={styles.inputPlaceholder.color}
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
                        editable={!loading}
                        placeholderTextColor={styles.inputPlaceholder.color}
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
            <View>
                <Text style={styles.label}>Confirme sua senha:</Text>
                <TextInput
                    value={confirmPassword}
                    onChangeText={onChangeConfirmPassword}
                    placeholder="Confirme sua senha..."
                    secureTextEntry={!showPassword}
                    style={styles.input}
                    editable={!loading}
                    placeholderTextColor={styles.inputPlaceholder.color}
                />
            </View>
            <View>
                <Text style={styles.label}>Telefone:</Text>
                <TextInputMask
                    type={'cel-phone'}
                    options={{
                        maskType: 'BRL',
                        withDDD: true,
                        dddMask: '(99) '
                    }}
                    value={phone}
                    onChangeText={onChangePhone}
                    placeholder="(xx) xxxxx-xxxx"
                    style={styles.input}
                    editable={!loading}
                    keyboardType="phone-pad"
                    placeholderTextColor={styles.inputPlaceholder.color}
                />
            </View>
            { type === "TATTOO_ARTIST" && (
                <>
                    <View>
                        <Text style={styles.label}>Digite sua bio:</Text>
                        <TextInput
                            value={bio}
                            onChangeText={onChangeBio}
                            placeholder="Fale um pouco sobre você..."
                            style={styles.input}
                            editable={!loading}
                            multiline
                            numberOfLines={4}
                            placeholderTextColor={styles.inputPlaceholder.color}
                        />
                    </View>

                    <View>
                        <Text style={styles.label}>Endereço do estudio:</Text>
                        <TextInput
                            value={studioAddress}
                            onChangeText={onChangeStudioAddress}
                            placeholder="Digite o endereço do seu estúdio..."
                            style={styles.input}
                            editable={!loading}
                            placeholderTextColor={styles.inputPlaceholder.color}
                        />
                    </View>

                    <View>
                        <Text style={styles.label}>Nome do estdúio:</Text>
                        <TextInput
                            value={studioName}
                            onChangeText={onChangeStudioName}
                            placeholder="Digite o nome do seu estúdio..."
                            style={styles.input}
                            editable={!loading}
                            placeholderTextColor={styles.inputPlaceholder.color}
                        />
                    </View>

                    <View>
                        <Text style={styles.label}>Telefone do estúdio:</Text>
                        <TextInputMask
                            type={'cel-phone'}
                            options={{
                                maskType: 'BRL',
                                withDDD: true,
                                dddMask: '(99) '
                            }}
                            value={studioPhone}
                            onChangeText={onChangeStudioPhone}
                            placeholder="Digite o telefone do seu estúdio..."
                            style={styles.input}
                            editable={!loading}
                            keyboardType="phone-pad"
                            placeholderTextColor={styles.inputPlaceholder.color}
                        />
                    </View>
                </>
            )}
            {error ? (
                <Text style={{ color: Colors.error, textAlign: 'center', marginBottom: 10 }}>{error}</Text>
            ) : null}
            <GenericButton
                title={loading ? "Cadastrando..." : "Cadastrar"}
                onPress={onSubmit}
                filled
            />
            {loading && (
                <ActivityIndicator color={Colors.primaryText} style={{ marginVertical: 10 }} />
            )}
        </View>
    );
};