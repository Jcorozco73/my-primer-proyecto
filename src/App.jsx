import React from 'react';
import NavBar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/itemlistcontainer';
import Carousel from './Components/Carousel/carousel';
import useFetch from './Components/Hooks/usefetch';
import { urlApiProducts} from './Components/Utils/constants'



function App() {
    const result= useFetch(urlApiProducts)
      console.log(result)

  return (
    <div className="App">
     
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a La Fabrica!" />
      <Carousel />

    </div>
  );
}

export default App;

