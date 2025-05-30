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
        cpf,
        setCpf,
        //bio
        bio,
        setBio,
        //studio
        studioAddress,
        setStudioAddress,
        studioName,
        setStudioName,
        studioPhone,
        setStudioPhone,
    
        error, 
        loading 
    } = useSignUp();
        
    return (
        <Container scrollable>
            <BackButton />
            <Text style={styles.title}>Cadastrar</Text>
            <RegisterForm 
                name={name}
                email={email}
                password={password}
                confirmPassword={confirmPassword}
                phone={phone}
                type={type}
                cpf={cpf}
                onChangeCpf={setCpf}
                onChangeName={setName}
                onChangeEmail={setEmail}
                onChangePassword={setPassword}
                onChangeConfirmPassword={setConfirmPassword}
                onChangePhone={setPhone}
                onChangeType={setType}
                onSubmit={handleRegister}
                error={error}
                loading={loading}
                //bio
                bio={bio}
                onChangeBio={setBio}
                //studio
                studioAddress={studioAddress}
                onChangeStudioAddress={setStudioAddress}
                studioName={studioName}
                onChangeStudioName={setStudioName}
                studioPhone={studioPhone}
                onChangeStudioPhone={setStudioPhone}
            
            />
        </Container>
    );
}