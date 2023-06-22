import {products} from '../Tmp/data'

const getProducts = async(id) => {

    return new Promise((resolve, reject) => {
        resolve(id ? products.filter((product) => product.category === id): products)

    })
    }
const getProduct = async(id) => {
    return new Promise((resolve, reject) =>{
        resolve(products.find((product)=> product.id === id));
    })
}    

export { getProducts, getProduct }