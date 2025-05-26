import { View, ScrollView, SafeAreaView, KeyboardAvoidingView, Platform } from "react-native";
import { styles } from "./styles";

interface ContainerProps {
    children: React.ReactNode;
    scrollable?: boolean;
    justifyContent?: "center" | "flex-start" | "flex-end";
}

export default function Container({ children, scrollable = false, justifyContent }: ContainerProps) {
    const containerStyle = {
        ...styles.container,
        flex: 1,
    };

    if (scrollable) {
        return (
            <SafeAreaView style={containerStyle}>
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    keyboardVerticalOffset={20}
                >
                    <ScrollView
                        contentContainerStyle={{
                            flexGrow: 1,
                            justifyContent: justifyContent || "center",
                        }}
                        showsVerticalScrollIndicator={false}
                        keyboardShouldPersistTaps="handled"
                    >
                        {children}
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={{ ...containerStyle, justifyContent: justifyContent || "center" }}>
            {children}
        </SafeAreaView>
    );
}