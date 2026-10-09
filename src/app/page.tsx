'use client'
import { Product } from "../lib/firebase/models/product";
import { useState } from "react";

export default function Home() {
  const productService = new Product();

  async function generic() {
    await productService.getData();
  }

  return (
    

    <div className="flex flex-col gap-5 w-2xs p-2">

      {/* <button className="bg-gray-600 p-2 cursor-pointer hover:bg-gray-400 transition" onClick={createProduct}>
        botão criar
      </button> */}

      <button className="bg-gray-600 p-2 cursor-pointer hover:bg-gray-400 transition" onClick={generic}>
        botão 
      </button>



    </div>
  );
}
