import { View, Text } from "react-native";
import { styles } from "./styles";

interface Parameter {
  id: string;
  name: string;
  category?: string;
}

interface Props {
  title?: string;
  parameters: Parameter[];
}

export default function ParametersListProfile({ title = "Parâmetros", parameters }: Props) {
  if (!parameters || parameters.length === 0) {
    return (
      <Text style={{ marginVertical: 8, color: "#888" }}>
        Nenhum parâmetro cadastrado.
      </Text>
    );
  }

  return (
    <View style={{ marginVertical: 8 }}>
      {title && (
        <Text style={styles.title}>
          {title}
        </Text>
      )}
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {parameters.map(param => (
          <View
            key={param.id}
            style={{
              backgroundColor: "#EEE",
              borderRadius: 16,
              paddingHorizontal: 12,
              paddingVertical: 4,
              marginRight: 8,
              marginBottom: 8,
            }}
          >
            <Text style={{ color: "#333" }}>{param.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}