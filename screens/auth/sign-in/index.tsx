import { Text } from 'react-native';

import { LoginForm } from '@/components/auth/LoginForm';
import Container from '@/components/global/Container';
import { useSignIn } from '@/hooks/useSignIn';
import { styles } from './styles'

const SignInScreen = () => {
    const { email, password, setEmail, setPassword, handleLogin, error, loading } = useSignIn();

    return (
        <Container justifyContent='center'>
            <Text style={styles.title}>Login</Text>
            <LoginForm
                email={email}
                password={password}
                onChangeEmail={setEmail}
                onChangePassword={setPassword}
                onSubmit={handleLogin}
                error={error}
                loading={loading}
            />
        </Container>
    );
};

export default SignInScreen;