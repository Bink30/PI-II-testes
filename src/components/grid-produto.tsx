import ProductCard from "./card-produto";

type Produto = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  imagem: string;
};

type GridProps = {
  produtos: Produto[];
};

export default function Grid({ produtos }: GridProps) {
  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {produtos.map((produto) => (
        <ProductCard
          key={produto.id}
          nome={produto.nome}
          descricao={produto.descricao}
          preco={produto.preco}
          categoria={produto.categoria}
          imagem={produto.imagem}
        />
      ))}
    </section>
  );
}