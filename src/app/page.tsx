'use client'
import Grid from "@/src/components/grid-produto";
import CategoryFilter from "@/src/components/filtro-categoria";
import Header from "@/src/components/Header";
import productService, {TypeProduct} from "../lib/firebase/models/product";
import { useState, useEffect, Suspense } from "react";

// const produtos = [
//   {
//     id: 1,
//     nome: "Óleo essencial",
//     descricao: "Aroma para o seu ambiente",
//     preco: 39.9,
//     categoria: "Aromaterapia",
//     imagem: "/images/oleo-essencial.jpg",
//   },
//   {
//     id: 2,
//     nome: "Vela aromática",
//     descricao: "Perfume e aconchego para sua casa",
//     preco: 29.9,
//     categoria: "Aromatização",
//     imagem: "/images/vela-aromatica.jpg",
//   },
//   {
//     id: 3,
//     nome: "Sabonete artesanal",
//     descricao: "Cuidado especial para a pele",
//     preco: 19.9,
//     categoria: "Cuidados pessoais",
//     imagem: "/images/sabonete-artesanal.jpg",
//   },
//   {
//     id: 4,
//     nome: "Banho de Ano Novo 2027",
//     descricao: "Purifica o corpo e a mente, trazendo boas energias e prosperidade, equilíbrio e bem-estar",
//     preco: 15,
//     categoria: "Cuidados pessoais",
//     imagem: "/images/banho-ano-novo-2027.jpg",
//   },
//   {
//     id: 5,
//     nome: "Teste",
//     descricao: "Teste",
//     preco: 15,
//     categoria: "Aromaterapia",
//     imagem: "Teste",
//   },
//   {
//     id: 6,
//     nome: "Teste",
//     descricao: "Teste",
//     preco: 15,
//     categoria: "Aromaterapia",
//     imagem: "Teste",
//   },
//   {
//     id: 7,
//     nome: "Teste",
//     descricao: "Teste",
//     preco: 15,
//     categoria: "Aromatização",
//     imagem: "Teste",
//   },
// ];

export default function Home() {
  const products = productService.getData();

  // const [categoriaSelecionada, setCategoriaSelecionada] =
  //   useState("Todas");

  // const categorias = [
  //   ...new Set(produtos.map((produto) => produto.category)),
  // ];

  // const produtosFiltrados =
  //   categoriaSelecionada === "Todas"
  //     ? produtos
  //     : produtos.filter(
  //         (produto) => produto.categoria === categoriaSelecionada
  //       );

  return (
    <main className="mx-auto max-w-6xl p-6">
      <Header />

      <h1 className="mb-6 text-2xl font-bold">
        Filtros
      </h1>


      <Suspense fallback={
        <div>
          loading...
        </div>
      }
      
      >
        <Grid produtos={products} />
      </Suspense>
      

    </main>
  );
}
