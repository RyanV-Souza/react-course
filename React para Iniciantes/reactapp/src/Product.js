import { useEffect, useState } from "react";

const Product = ({ product }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (product !== null) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${product}`)
        .then((response) => response.json())
        .then((json) => setData(json));
    }
  }, [product]);
  return (
    <>
      <h1>{data.nome}</h1>
      <p>R$ {data.preco}</p>
    </>
  );
};

export default Product;
