
type CategoryFilterProps = {
  categorias: string[];
  categoriaSelecionada: string;
  onSelecionarCategoria: (categoria: string) => void;
};

export default function CategoryFilter({
  categorias,
  categoriaSelecionada,
  onSelecionarCategoria,
}: CategoryFilterProps) {
  const todasCategorias = ["Todas", ...categorias];

  return (
    <div className="mb-6 flex flex-wrap gap-3">
      {todasCategorias.map((categoria) => {
        const selecionada = categoria === categoriaSelecionada;

        return (
          <button
            key={categoria}
            type="button"
            onClick={() => onSelecionarCategoria(categoria)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              selecionada
                ? "border-red-900 bg-red-900 text-white"
                : "border-gray-300 bg-white text-gray-700 hover:border-red-900"
            }`}
          >
            {categoria}
          </button>
        );
      })}
    </div>
  );
}