import Container from "@/src/components/global/Container";
import ParametersForm from "@/src/components/tattooArtist/ParametersForm";
import { useTattooParameters } from "@/src/hooks/useTattooParameters";
import { useState } from "react";

export default function ParametersFormScreen() {
  const { grouped, selected, handleSelect, loading,submitParameters } = useTattooParameters();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    const hasEmpty = Object.values(selected).some(
      (arr) => !arr[0] || !arr[0].id || !arr[0].price
    );
    if (hasEmpty) {
      setError("Selecione e preencha o preço para todas as categorias.");
      return;
    }
    setError(null);
    try {
      console.log("aqui")
      await submitParameters();
    } catch (e) {
      console.log(e)
      setError("Erro ao salvar parâmetros.");
    }
  };

  return (
    <Container scrollable>
      <ParametersForm
        grouped={grouped}
        selected={selected}
        handleSelect={handleSelect}
        loading={loading}
        onSubmit={handleSubmit}
        error={error}
      />
    </Container>
  );
}