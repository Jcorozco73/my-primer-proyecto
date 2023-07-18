import React from 'react';
import NavBar from './Components/Navbar/Navbar';
import { ItemListContainer } from './pages';
import Carousel from './Components/Carousel/carousel';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { ItemDetailContainer } from './pages/ItemDetailContainer/ItemDetailContainer';
import Footer from './pages/ItemFooter/ItemFooter';
import Cart from './pages/Cart/Cart';
import CartProvider from './Components/Context/CartContext';
import CartWidget from './Components/Cartwidgets/cartwidgets';
import Header from './pages/Blog/header';
import PostList from './pages/Blog/postlist';
import PostItem from './pages/Blog/postitem';




function App() {


  return (
   
    <div className="App">
    <CartProvider>
    
    <Router>
    <NavBar />
    <Carousel />
   
    
    
    <Routes>
    <Route path="/productos" element={<ItemListContainer greeting="¡Bienvenido a La Fabrica!"/>}/>
    <Route path="/category/:id" element={<ItemListContainer />} />
    <Route path="/item-detail/:id" element={<ItemDetailContainer />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/blogcocina" element={<PostList />} />
    <Route path="/cartwidget" element={<CartWidget />} />
    </Routes>
    <Footer />
    </Router>
    
    </CartProvider>
     
        </div>
  );
}

export default App;

