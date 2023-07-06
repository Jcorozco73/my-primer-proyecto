import {collection, getDoc, getDocs, doc, getFirestore} from 'firebase/firestore'


const getProducts = async(id) => {
  const db = getFirestore()
  const docRef = doc(db, "products")

 const snapshot = await getDocs(docRef)

 if (snapshot.exist()) {
  return { id: snapshot.id, ...snapshot.data}
 }

 return null

}    

export { getProducts}