
import Button from "./Button";

type ProductCardProps = {
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  imagem: string;
};

export default function ProductCard({
  nome,
  descricao,
  preco,
  categoria,
  imagem,
}: ProductCardProps) {
  const precoFormatado = preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <article className="overflow-hidden rounded-lg border border-gray-200 bg-white p-4">
      <div className="mb-4 overflow-hidden rounded bg-gray-100">
        <img
            src={imagem}
            alt={nome}
            className="h-40 w-full object-cover"
        />
        </div>

      <p className="text-sm text-gray-500">{categoria}</p>

      <h3 className="mt-1 font-semibold">{nome}</h3>

      <p className="my-2 text-sm text-gray-600">
        {descricao}
      </p>

      <p className="mb-4 font-semibold text-red-900">
        {precoFormatado}
      </p>

        <div className="mt-4 flex gap-2">
            <Button className="flex-1">
                Comprar
            </Button>

            <Button variant="secondary" className="flex-1">
                Carrinho
            </Button>
        </div>
    </article>
  );
}