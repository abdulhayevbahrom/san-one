import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/home/Home";
import Cart from "./routes/cart/Cart";
import Catalog from "./routes/catalog/Catalog";
import SinglePage from "./routes/single-page/SinglePage";
import { createContext, useState } from "react";
import About from "./routes/about/About";
import Profil from "./routes/profil/Profil";
// productType
export const proType = createContext(null);

function App() {
  const [mahsulotTuri, setMahsulotTuri] = useState("");
  return (
    <div className="app">
      <proType.Provider value={{ mahsulotTuri, setMahsulotTuri }}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/products/:id" component={SinglePage} />
            <Route path="/catalog" component={Catalog} />
            <Route path="/cart" component={Cart} />
            <Route path="/profil" component={Profil} />
          </Switch>
        </Router>
      </proType.Provider>
    </div>
  );
}

export default App;
