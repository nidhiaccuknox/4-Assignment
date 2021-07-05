import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/home/Home';
import MyCart from './pages/myCart/MyCart';
import Product from './pages/product/Product';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/mycart'>
            <MyCart />
          </Route>
          <Route path='/product/:idInParam'>
            <Product />
          </Route>
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
