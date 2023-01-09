import React from "react";

const CardProduct = ({ name, infos }) => {
  return (
    <div style={{ border: "1px solid", margin: "1rem 0", padding: "1rem" }}>
      <p> {name} </p>
      <ul>
        {infos.map((info) => (
          <li key={info}> {info} </li>
        ))}
      </ul>
    </div>
  );
};

export default CardProduct;
