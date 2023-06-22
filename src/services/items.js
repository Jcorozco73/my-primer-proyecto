import {products} from '../Tmp/data'

const getProducts = async(id) => {

    return new Promise((resolve, reject) => {
        resolve(products.filter((product) => product.id === id))

    })
    }
const getProduct = async(id) => {
    return new Promise((resolve, reject) =>{
        resolve(products.find((product)=> product.id === id));
    })
}    

export { getProducts, getProduct }