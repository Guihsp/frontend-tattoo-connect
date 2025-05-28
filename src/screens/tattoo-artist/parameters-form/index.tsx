import BackButton from "@/src/components/buttons/BackButton";
import Container from "@/src/components/global/Container";
import ParametersForm from "@/src/components/tattooArtist/ParametersForm";
import { useTattooParameters } from "@/src/hooks/useTattooParameters";
import { useState } from "react";
import { router } from "expo-router"; 

export default function ParametersFormScreen() {
  const {
    grouped,
    selected,
    handleSelect,
    handlePriceChange,
    removeSelected,
    loading,
    submitParameters,
    alreadyRegistered
  } = useTattooParameters();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
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