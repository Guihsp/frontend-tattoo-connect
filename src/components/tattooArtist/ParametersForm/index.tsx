import { View, Text, TextInput, ActivityIndicator, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import GenericButton from "@/src/components/buttons/GenericButton";
import { ParameterWithPrice, Parameter } from "@/src/hooks/useTattooParameters";
import { styles } from "./styles";
import Colors from "@/src/constants/Colors";

interface Props {
  grouped: Record<string, Parameter[]>;
  selected: Record<string, ParameterWithPrice[]>;
  handleSelect: (category: string, param: Parameter, price: string) => void;
  handlePriceChange: (category: string, paramId: string, price: string) => void;
  removeSelected: (category: string, paramId: string) => void;
  loading: boolean;
  onSubmit: () => void;
  error?: string | null;
  alreadyRegistered: string[];
}

export default function ParametersForm({
  grouped,
  selected,
  handleSelect,
  handlePriceChange,
  removeSelected,
  loading,
  onSubmit,
  error,
  alreadyRegistered,
}: Props) {
  if (loading) return <ActivityIndicator />;

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Configurar Parâmetros</Text>
      {Object.entries(grouped).map(([category, params]) => {
        const selectedParams = selected[category] || [];
        const availableParams = params.filter(
          (p) =>
            !selectedParams.some((sp) => sp.id === p.id) &&
            !alreadyRegistered.includes(p.id)
        );
        return (
          <View key={category}>
            <Text style={styles.category}>{category}</Text>
            <Picker
              selectedValue=""
              onValueChange={(itemValue) => {
                const param = params.find((p) => p.id === itemValue);
                if (param) handleSelect(category, param, "");
              }}
              style={styles.picker}
            >
              <Picker.Item label={`Adicionar ${category.toLowerCase()}`} value="" />
              {availableParams.map((param) => (
                <Picker.Item key={param.id} label={param.name} value={param.id} />
              ))}
            </Picker>
            {selectedParams.map((param) => (
              <View key={param.id} style={styles.selectedParamRow}>
                <Text style={{ flex: 1, color: Colors.primaryText }}>{param.name}</Text>
                <TextInput
                  style={[styles.input, { flex: 1 }]}
                  placeholder="Preço (R$)"
                  placeholderTextColor={Colors.inputBorder}
                  keyboardType="numeric"
                  value={param.price}
                  onChangeText={(text) => handlePriceChange(category, param.id, text)}
                />
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => removeSelected(category, param.id)}
                >
                  <Text style={styles.removeButtonText}>Remover</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        );
      })}
      {error && <Text style={styles.error}>{error}</Text>}
      <GenericButton title="Salvar Parâmetros" onPress={onSubmit} filled />
    </View>
  );
}