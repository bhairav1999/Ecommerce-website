import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Product from "./components/product/Product";
import SingleProduct from "./components/singleProduct/SingleProduct";
import Cart from "./components/cart/Cart";
import ErrorPage from "./components/errorPage/ErrorPage";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";

function App() {
  const theme ={
    colors:{
      bg:"#000"
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/singleproduct/:id" element={<SingleProduct />}></Route>
            <Route path="/*" element={<ErrorPage />}></Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
