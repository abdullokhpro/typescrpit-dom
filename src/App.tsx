import "./App.css";
import Collection from "./components/collection/Collection";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Collection />
        <Products />
      </main>
    </>
  );
}

export default App;
