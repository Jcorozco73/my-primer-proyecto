import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, } from 'react-router-dom';
import { Container, Navbar } from "react-bootstrap";
import { ItemList } from '../ItemList/itemList';
import { Link} from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/Resource/Firebase';




const ItemListContainer = () => {
  
  const {id} = useParams()

  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  
  
  /* useEffect (() => {
    getProducts(id).then((data) => {
      setProducts(data)
      })
      getCategories().then((data) => {
        setCategories(data)
      })

  },[id])
 */

  useEffect(()=>{
    const data = collection(db,"categories")
    getDocs(data)
    .then((result) => {
      const lista = result.docs.map((cat) =>{
        return {
          id: cat.id,
          ...cat.data(),
        }
      })
      setCategories(lista)
    })
    .catch((error) => console.log(error))
  },[])


  useEffect(() => {
    
    const productos = id ? query(collection(db, "products"), where("category", "==", id)) : collection(db,"products")
    getDocs(productos)
    .then((result) => {
      const lista = result.docs.map((producto) =>{
        return {
          id: producto.id,
          ...producto.data(),
        }
      })
      setProducts(lista)
    })
    .catch((error) => console.log(error))
    
  }, [id])
  console.log(products)
  return (
    <>
    <h1 className='text-center'>Bienvenido a la Fabrica</h1> 
     <Container>
     <h4>Categorias</h4>
     <Navbar bg="light" expand="lg" className='top-menu'>
        <Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {categories.map((category) => (
          <Navbar.Brand key={category.id}>
          <Link to= {`/category/${category.category}`}> 
          {category.category} 
          </Link>
          </Navbar.Brand>
          ))}
        </Navbar.Brand>
        </Navbar>
      
        <ItemList products= {products} />
     </Container> 
    
    </>
  )
}

export {ItemListContainer}  ;