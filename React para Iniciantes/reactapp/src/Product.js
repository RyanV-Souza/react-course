import React from "react";

const Product = ({ data }) => {
  return (
    <>
      <h1>{data.nome}</h1>
      <p>R$ {data.preco}</p>
      {data.fotos.map((foto) => (
        <img key={foto.titulo} src={foto.src} alt={foto.titulo} />
      ))}
    </>
  );
};

export default Product;
