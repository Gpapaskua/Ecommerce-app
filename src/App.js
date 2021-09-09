import { Route, Switch } from "react-router";
import Navbar from "./components/layouts/Navbar";
import About from "./components/view/about/About";
import Home from "./components/view/home/Home";


const App = () => {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
    </Switch>
    </>
  );
}

export default App;
