import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { getProduct } from "../../services/items"
import { useState } from "react"
import { useEffect } from "react"
import { Spinner } from 'react-bootstrap'
import { CartContext } from "../../Components/Context/CartContext"

const ItemDetailContainer =() => {
    
    const {id} = useParams()
    const [product, SetProduct] = useState()
    const [added, SetAdded] = useState(false)

    

    useEffect(() => {
        getProduct(id).then((data) =>{
            SetProduct(data)
        })
    }, [id])

 

    if(!product) return
     <div>
    <Spinner animation='border' role='status' />
    Cargando...
    </div>

    return (

        <div>
            
            <ItemDetail 
            name={product.name}
            description={product.description}
            id={product.id}
            category={product.category}
            price={product.price}
            stock={product.stock}
            image={product.image}
            />
        </div>
    )

}

export{ItemDetailContainer}