import React from "react";
import Title from "./Title";
import CardProduct from "./CardProduct";

const produtos = [
  { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
];

const Product = () => {
  return (
    <section>
      <Title text="Produtos"></Title>
      {produtos.map((produto) => (
        <CardProduct
          name={produto.nome}
          infos={produto.propriedades}
        ></CardProduct>
      ))}
    </section>
  );
};

export default Product;
