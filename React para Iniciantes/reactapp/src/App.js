import Header from "./Header";
import Home from "./Home";
import Product from "./Product";

const App = () => {
  const { pathname } = window.location;

  let Component = null;

  pathname === "/product" ? (Component = Product) : (Component = Home);

  return (
    <>
      <Header> </Header>
      <Component></Component>
    </>
  );
};

export default App;
