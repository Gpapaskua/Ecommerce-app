import { Categories } from "./components/Categories";
import { Header } from "./components/Header";
import { Navbar } from "./components/navbar/Navbar";
import { Offers } from "./components/Offers.jsx";

const App = () => {
  return (
    <>
     <Navbar /> 
     <Header /> 
     <Categories />
     <Offers />
    </>
  );
}

export default App;
