import React from 'react';
import NavBar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products'
import ItemListContainer from './Components/ItemListContainer/itemlistcontainer';
import Carousel from './Components/Carousel/carousel';
import useFetch from './Components/Hooks/usefetch';





function App() {

    const products= useFetch('./productos.json',null)
     

  return (
    <div className="App">
    
    <NavBar />
    <ItemListContainer greeting="¡Bienvenido a La Fabrica!" />
    <Carousel />
    <Products products={products} />
      

    </div>
  );
}

export default App;

