import "./App.css";
import Collection from "./components/collection/Collection";
import Footer from "./components/footer/Footer";
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
      <Footer />
    </>
  );
}

export default App;
