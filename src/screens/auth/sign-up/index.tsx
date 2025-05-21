import { Image, Text, View } from "react-native";

import Container from "@/src/components/global/Container";
import { RegisterForm } from "@/src/components/auth/RegisterForm";
import BackButton from "@/src/components/buttons/BackButton";
import { useSignUp } from "@/src/hooks/useSignUp";
import { styles } from "./styles";

export default function SignUpScreen() {
    const { 
        name, 
        email, 
        password, 
        confirmPassword,
        phone, 
        type, 
        setName, 
        setEmail, 
        setPassword, 
        setConfirmPassword,
        setPhone, 
        setType, 
        handleRegister, 
        error, 
        loading 
    } = useSignUp();
        
    return (
        <Container scrollable={true}>
            <BackButton />
            <Text style={styles.title}>Cadastrar</Text>
            <RegisterForm 
                name={name}
                email={email}
                password={password}
                confirmPassword={confirmPassword}
                phone={phone}
                type={type}
                onChangeName={setName}
                onChangeEmail={setEmail}
                onChangePassword={setPassword}
                onChangeConfirmPassword={setConfirmPassword}
                onChangePhone={setPhone}
                onChangeType={setType}
                onSubmit={handleRegister}
                error={error}
                loading={loading}
            />
        </Container>
    );
}