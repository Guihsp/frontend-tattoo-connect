import BackButton from "@/components/buttons/BackButton";
import Container from "@/components/global/Container";
import ParametersForm from "@/components/tattooArtist/ParametersForm";
import { useTattooParameters } from "@/hooks/useTattooParameters";
import { useState } from "react";
import { router } from "expo-router"; 
import { Parameter } from "@/hooks/useTattooParameters";


export default function ParametersFormScreen() {
  const {
    grouped,
    selected,
    handleSelect,
    handlePriceChange,
    removeSelected,
    loading,
    submitParameters,
    alreadyRegistered,
    parameters 
  } = useTattooParameters();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    // IDs dos parâmetros de cada categoria
    const estiloIds = (grouped["ESTILO"] || []).map((p: Parameter) => p.id);
    const localIds = (grouped["LOCAL"] || []).map((p: Parameter) => p.id);

    // Verifica se já existe algum cadastrado OU selecionado no formulário atual
    const temEstilo =
      estiloIds.some((id) => alreadyRegistered.includes(id)) ||
      (selected["ESTILO"] && selected["ESTILO"].length > 0);

    const temLocal =
      localIds.some((id) => alreadyRegistered.includes(id)) ||
      (selected["LOCAL"] && selected["LOCAL"].length > 0);

    if (!temEstilo || !temLocal) {
      setError("Selecione ou cadastre pelo menos um Estilo e um Local.");
      return;
    }

    const hasEmpty = Object.values(selected).some(
      (arr) => arr.some((p) => !p.id || !p.price)
    );
    if (hasEmpty) {
      setError("Preencha o preço para todos os parâmetros selecionados.");
      return;
    }
    setError(null);
    try {
      await submitParameters();
      router.replace("/(tattoo-artist)/tattooPatametersManagement");
    } catch (e) {
      setError("Erro ao salvar parâmetros.");
    }
  };

  return (
    <Container scrollable>
      <BackButton style={{ marginTop: 16 }} />
      <ParametersForm
        grouped={grouped}
        selected={selected}
        handleSelect={handleSelect}
        handlePriceChange={handlePriceChange}
        removeSelected={removeSelected}
        loading={loading}
        onSubmit={handleSubmit}
        error={error}
        alreadyRegistered={alreadyRegistered}
      />
    </Container>
  );
}