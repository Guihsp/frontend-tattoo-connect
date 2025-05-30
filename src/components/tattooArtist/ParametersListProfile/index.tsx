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
      <View style={styles.parametersList}>
        {parameters.map(param => (
          <View
            key={param.id}
            style={styles.parameterItem}
          >
            <Text style={styles.parameterText}>{param.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}