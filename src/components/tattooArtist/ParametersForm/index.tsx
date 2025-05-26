import { View, Text, TextInput, ActivityIndicator } from "react-native";
import { Picker } from "@react-native-picker/picker";
import GenericButton from "@/src/components/buttons/GenericButton";
import { ParameterWithPrice, Parameter } from "@/src/hooks/useTattooParameters";
import { styles } from "./styles";
import Colors from "@/src/constants/Colors";

interface Props {
  grouped: Record<string, Parameter[]>;
  selected: Record<string, ParameterWithPrice[]>;
  handleSelect: (category: string, param: Parameter, price: string) => void;
  loading: boolean;
  onSubmit: () => void;
  error?: string | null;
}

export default function ParametersForm({
  grouped,
  selected,
  handleSelect,
  loading,
  onSubmit,
  error,
}: Props) {
  if (loading) return <ActivityIndicator />;

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Configurar Parâmetros</Text>
      {Object.entries(grouped).map(([category, params]) => {
        const selectedParam = selected[category]?.[0];
        return (
          <View key={category} style={{ marginBottom: 16 }}>
            <Text style={styles.category}>{category}</Text>
            <Picker
              selectedValue={selectedParam?.id || ""}
              onValueChange={(itemValue) => {
                const param = params.find((p) => p.id === itemValue);
                if (param) handleSelect(category, param, selectedParam?.price || "");
              }}
              style= {{
                height: 50,
                width: "100%",
                backgroundColor: Colors.inputBackground,
                color: Colors.primaryText,
              }}
            >
              <Picker.Item label={`Selecione ${category.toLowerCase()}`} value="" />
              {params.map((param) => (
                <Picker.Item key={param.id} label={param.name} value={param.id} />
              ))}
            </Picker>
            {selectedParam && (
              <TextInput
                style={styles.input}
                placeholder="Preço (R$)"
                keyboardType="numeric"
                value={selectedParam.price}
                onChangeText={(text) => handleSelect(category, selectedParam, text)}
              />
            )}
          </View>
        );
      })}
      {error && <Text style={{ color: "red", textAlign: "center" }}>{error}</Text>}
      <GenericButton title="Salvar Parâmetros" onPress={onSubmit} filled />
    </View>
  );
}