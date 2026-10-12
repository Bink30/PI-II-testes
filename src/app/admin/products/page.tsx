'use client'
import { useState } from "react";
import productService from "@/src/lib/firebase/models/product";
import { TypeProduct } from "@/src/lib/firebase/models/product";
import imageManipulator from "@/src/lib/image-manipulator/image-manipulator";
import imageService from "@/src/lib/firebase/storage/image-service";
import AdminHeader from "@/src/components/admin/Header";
import AdminFormCard from "@/src/components/admin/form-card";

export default function Home() {
  const [img, setImg] = useState<string | null>();

  // função que roda quando clica em criar produto
  async function handleSubmit(event: any) {
    // impede funcionamento padrão que é de mandar os dados via http para o servidor
    event.preventDefault();

    

    try {
      // lida primeiro com a imagem
      const img = event.target[4].files[0];
  
      const compressedImg = await imageManipulator.compress(img);
      const imgType = '.' + compressedImg.type.split('/')[1];
      
      const productKey = productService.getNewRandomId();
      const imgName = productKey + imgType;

      const imgDownloadUrl = await imageService.uploadNewImage(imgName, compressedImg);

      // seria bom adicionar aqui uma forma de apagar a imagem ou tentar de novo se falhar salvar no banco de dados

      // lida com banco de dados
      const product: TypeProduct = {
        name: event.target[0].value,
        description: event.target[1].value,
        category: event.target[2].value,
        value: event.target[3].value,
        imgName: imgName,
        imgUrl: imgDownloadUrl
      }

      await productService.save(productKey, product);

      console.log("Produto criado");

      setImg(imgDownloadUrl);
    } catch (err: any) {
      console.error("erro criando produto:", err.message);
    } 

  }

  return (

    <div className="flex flex-col gap-5 rounded border-2 border-black p-5">
      <AdminHeader/>
      
      {img && 
        <img src={img}></img>
      }

      <form className="flex gap-5 flex-col" onSubmit={(event) => handleSubmit(event)}>
        
        <div className="flex gap-2 flex-col md:flex-row align-middle justify-items-center">
          
          <label htmlFor='input_nome_produto' className="p-2" >Nome do produto:</label>
          <input 
            required
            type="text" 
            id="input_nome_produto" 
            placeholder="Coloque o nome"
            className="p-2 rounded border-gray-400 border focus:ring-4 ring-blue-300 transition"
          />

        </div>

        <div className="flex gap-2 flex-col md:flex-row align-middle justify-items-center">
          
          <label htmlFor='input_descricao_produto' className="p-2" >Descrição:</label>
          <input
            required
            type="text" 
            id="input_descricao_produto" 
            placeholder="Coloque o nome"
            className="p-2 rounded border-gray-400 border focus:ring-4 ring-blue-300 transition"
          />

        </div>

        <div className="flex gap-2 flex-col md:flex-row align-middle justify-items-center">
          
          <label htmlFor='input_categoria_produto' className="p-2" >categoria:</label>
          <input 
            required
            type="text" 
            id="input_categoria_produto" 
            placeholder="Coloque o nome"
            className="p-2 rounded border-gray-400 border focus:ring-4 ring-blue-300 transition"
          />

        </div>
        
        <div className="flex gap-2 flex-col md:flex-row align-middle justify-items-center">
          
          <label htmlFor='input_valor_produto' className="p-2" >Valor em R$:</label>
          <input 
            required
            type="number" 
            id="input_valor_produto" 
            placeholder="Coloque o valor"
            className="p-2 rounded border-gray-400 border focus:ring-4 ring-blue-300 transition"
            />

        </div>

        <div className="flex gap-2 flex-col md:flex-row align-middle justify-items-center">
          
          <label htmlFor='input_imagem_produto' className="p-2" >Imagem:</label>
          <input 
            type="file" 
            className="p-2 rounded border-gray-400 border hover:ring-4 ring-blue-300 transition cursor-pointer"          
          />

        </div>

        <button type="submit" className="p-4 bg-gray-400 cursor-pointer hover:bg-gray-700 transition">
          criar produto      
        </button>
      </form>
    </div>


  );
}
