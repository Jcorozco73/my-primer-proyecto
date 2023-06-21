import React from 'react';
import NavBar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products'
import { ItemListContainer } from './pages';
import Carousel from './Components/Carousel/carousel';
import useFetch from './Components/Hooks/usefetch';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';








function App() {

    // const products= useFetch('./productos.json',null)
     

  return (
   
    <div className="App">
    
    <Router>
    <NavBar />
    <Carousel />
    <Routes>
    <Route path="/" element={<ItemListContainer />} />
    <Route path="/productos" element={<ItemListContainer greeting="¡Bienvenido a La Fabrica!"/>}/>
    <Route path="/category/:id" element={<ItemListContainer />} />
    
    
    </Routes>
    
    </Router>
    
    
    
        </div>
  );
}

export default App;

