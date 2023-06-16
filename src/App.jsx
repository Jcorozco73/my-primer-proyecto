import React from 'react';
import NavBar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products'
import ItemListContainer from './Components/ItemListContainer/itemlistcontainer';
import Carousel from './Components/Carousel/carousel';
import useFetch from './Components/Hooks/usefetch';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';


function App() {

    const products= useFetch('./productos.json',null)
     

  return (
   
    <div className="App">
    
    <Router>
    <NavBar />
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/productos" element={<ItemListContainer greeting="¡Bienvenido a La Fabrica!"/>}/>
    
    </Routes>
    
    </Router>
    
    <Carousel />
    
    <Products products={products} />
        </div>
  );
}

export default App;

