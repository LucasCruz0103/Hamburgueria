import { useEffect, useState } from 'react';
import {ProductList} from "./Components/ProductList";
import {Header} from "./Components/Header";
import {Cart} from "./Components/Cart";
import api  from './Services/api';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export function App() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);

  useEffect(() => {
    api
      .get("/products")
      .then((response) => setProducts(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [])

  const showProducts = (Product) => { 
    const validate = Product.toLowerCase();
    const filter = products.filter((product) => product.name.toLowerCase().includes(validate) || product.category.toLowerCase().includes(validate))
    setFilteredProducts(filter);
  }

  return (
    <>
      <ToastContainer/>
      <Header showProducts={showProducts}/>
      <main>
        <ProductList products={products} filteredProducts={filteredProducts} setCurrentSale={setCurrentSale} currentSale={currentSale} />
        <Cart cartProducts={currentSale} setCurrentSale={setCurrentSale}/>
      </main>
    </>
  );
}