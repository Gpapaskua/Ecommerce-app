import { Route, Switch } from "react-router";

/** Layouts */
import Navbar from "./components/layouts/Navbar";
import Header from "./components/layouts/Header";

/** View */
import About from "./view/about/About";
import Home from "./view/home/Home";
import ProductsByCategory from "./view/productsByCategory/ProductsByCategory";
import Footer from "./components/layouts/Footer";


const App = () => {
  return (
    <>
    <Navbar />
    <Header />
    <Switch>
      <Route exact path='/' component={Home}/> 
      <Route path='/about' component={About}/>
      <Route path='/products/category/:category' component={ProductsByCategory}/>
    </Switch>
    <Footer />
    </>
  );
}

export default App;
