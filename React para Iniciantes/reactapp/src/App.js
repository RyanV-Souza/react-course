import { useState, useEffect } from "react";
import Product from "./Product";

const App = () => {
  const [product, setProduct] = useState(null);

  async function handleClick(event) {
    setProduct(event.target.innerText);
  }

  useEffect(() => {
    const productLocalStorage = window.localStorage.getItem("produto");

    if (productLocalStorage !== null) setProduct(productLocalStorage);
  }, []);

  useEffect(() => {
    if (product !== null) window.localStorage.setItem("produto", product);
  }, [product]);

  return (
    <>
      <h1>Preferência: {product}</h1>
      <button style={{ marginLeft: "3px" }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ marginLeft: "3px" }} onClick={handleClick}>
        smartphone
      </button>

      {product && <Product product={product} />}
    </>
  );
};

export default App;
