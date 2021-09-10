import { Route, Switch } from "react-router";
import Navbar from "./components/layouts/Navbar";
import About from "./view/about/About";
import Home from "./view/home/Home";


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
