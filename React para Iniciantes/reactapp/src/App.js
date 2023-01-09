import { useState } from "react";
import Product from "./Product";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  async function handleClick(event) {
    setLoading(true);

    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );

    const json = await response.json();

    setData(json);
    setLoading(false);
  }

  return (
    <>
      <button style={{ marginLeft: "3px" }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ marginLeft: "3px" }} onClick={handleClick}>
        smartphone
      </button>
      <button style={{ marginLeft: "3px" }} onClick={handleClick}>
        tablet
      </button>

      {loading && <p> Carregando... </p>}
      {data && !loading && <Product data={data} />}
    </>
  );
};

export default App;
