type ProductCardProps = {
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  imagem: string | null;
  onEditar?: () => void;
  onExcluir?: () => void;
};

export default function ProductCard({
  nome,
  descricao,
  preco,
  categoria,
  imagem,
  onEditar,
  onExcluir,
}: ProductCardProps) {
  const precoFormatado = preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <article className="overflow-hidden rounded-lg border border-gray-200 bg-white p-4">

      {/* Imagem e ações administrativas */}
      <div className="relative mb-4 overflow-hidden rounded bg-gray-100">

        <img
          src={imagem || ""}
          alt={nome}
          className="h-40 w-full object-cover"
        />

        {/* Botão editar */}
        <button
          type="button"
          onClick={onEditar}
          aria-label={`Editar ${nome}`}
          title="Editar produto"
          className="absolute left-2 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 shadow transition hover:bg-gray-100 hover:text-red-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L8 18l-4 1 1-4Z" />
          </svg>
        </button>

        {/* Botão excluir */}
        <button
          type="button"
          onClick={onExcluir}
          aria-label={`Excluir ${nome}`}
          title="Excluir produto"
          className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 shadow transition hover:bg-red-100 hover:text-red-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>

      {/* Informações do produto */}
      <p className="text-sm text-gray-500">{categoria}</p>

      <h3 className="mt-1 font-semibold">{nome}</h3>

      <p className="my-2 text-sm text-gray-600">
        {descricao}
      </p>

      <p className="font-semibold text-red-900">
        {precoFormatado}
      </p>
    </article>
  );
}
