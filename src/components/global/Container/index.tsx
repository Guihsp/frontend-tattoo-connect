import { View, ScrollView } from "react-native";
import { styles } from "./styles";

interface ContainerProps {
    children: React.ReactNode;
    scrollable?: boolean;
    justifyContent?: "center" | "flex-start" | "flex-end";
}

export default function Container({ children, scrollable = false, justifyContent }: ContainerProps) {
    const containerStyle = {
        ...styles.container,
        justifyContent: justifyContent || "center",
    };

    return (
        <View style={containerStyle}>
            {scrollable ? (
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
                    showsVerticalScrollIndicator={false}
                >
                    {children}
                </ScrollView>
            ) : (
                children
            )}
        </View>
    );
}