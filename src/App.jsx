import React from 'react';
import NavBar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products'
import ItemListContainer from './Components/ItemListContainer/itemlistcontainer';
import Carousel from './Components/Carousel/carousel';
import useFetch from './Components/Hooks/usefetch';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { MiTienda } from './Components/Home/Home';







function App() {

    const products= useFetch('./productos.json',null)
     

  return (
   
    <div className="App">
    
    <Router>
        <Routes>
        
        <Route path="/" element={< MiTienda/>}/>
        <Route path="/Nosotros" element={<Nosotros />}/>
        <Route path="/Productos" element={<Productos />}/>
        <Route path="/Contacto" element={<Contacto />}/>
        <Route path="/Blog Cocin" element={<BlogCocina />}/>
        </Routes>
    
    </Router>


    
    <NavBar />
    <ItemListContainer greeting="¡Bienvenido a La Fabrica!" />
    <Carousel />
    <Products products={products} />
      

    </div>
  );
}

export default App;

