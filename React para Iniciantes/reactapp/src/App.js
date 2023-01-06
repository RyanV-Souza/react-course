// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const App = () => {
  const dados = mario;
  const total = dados.compras.reduce(
    (a, b) => a + Number(b.preco.split(" ")[1]),
    0
  );

  return (
    <div>
      <p>
        <strong>Nome: </strong> {dados.cliente}
      </p>
      <p>
        <strong>Idade: </strong> {dados.idade}
      </p>
      <p>
        <strong>Situação: </strong>{" "}
        <span style={{ color: dados.ativa ? "green" : "red" }}>
          {dados.ativa ? "Ativa" : "Inativa"}
        </span>
      </p>
      <p>
        <strong> Total gasto: </strong> R$ {total}
      </p>

      {total > 10000 && <p> Você está gastando demais</p>}
    </div>
  );
};

export default App;
