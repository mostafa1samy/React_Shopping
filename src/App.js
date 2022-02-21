import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./component/home";
import Navbar from "./component/navbar";
import Product from "./component/product";
import Products from "./component/products";
import About from "./component/about";
import Contact from "./component/concat";
import Cart from "./component/cart";
import Checkout from "./component/checkout";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/checkout" component={Checkout} />

        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/about" component={About} />
        <Route exact path="/concat" component={Contact} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </>
  );
}

export default App;
