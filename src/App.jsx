import React from 'react';
import NavBar from './Components/Navbar/Navbar';
import { ItemListContainer } from './pages';
import Carousel from './Components/Carousel/carousel';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { ItemDetailContainer } from './pages/ItemDetailContainer/ItemDetailContainer';
import Footer from './pages/ItemFooter/ItemFooter';


function App() {


  return (
   
    <div className="App">
    
    <Router>
    <NavBar />
    <Carousel />

    <Routes>
    <Route path="/productos" element={<ItemListContainer greeting="¡Bienvenido a La Fabrica!"/>}/>
    <Route path="/category/:id" element={<ItemListContainer />} />
    <Route path="/item-detail/:id" element={<ItemDetailContainer />} />
    </Routes>
    <Footer />
    </Router>
     
        </div>
  );
}

export default App;

