import React from 'react';
import NavBar from './Components/Navbar/Navbar';
import { ItemListContainer } from './pages';
import Carousel from './Components/Carousel/carousel';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { ItemDetailContainer } from './pages/ItemDetailContainer/ItemDetailContainer';
import Footer from './pages/ItemFooter/ItemFooter';
import Cart from './pages/Cart/Cart';
import CartProvider from './Components/Context/CartContext';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfGClzKYklgouKNj27-CDPwneRD5-Kyes",
  authDomain: "ecommerce-la-fabrica.firebaseapp.com",
  projectId: "ecommerce-la-fabrica",
  storageBucket: "ecommerce-la-fabrica.appspot.com",
  messagingSenderId: "948535340826",
  appId: "1:948535340826:web:2a1721a36de744273bc6a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
    </Routes>
    <Footer />
    </Router>
    
    </CartProvider>
     
        </div>
  );
}

export default App;

