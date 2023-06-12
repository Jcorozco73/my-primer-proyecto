import React from 'react';
/* import React, { useEffect, useState } from 'react'; */
// import  ItemList  from './Components/ItemList/itemlist';

const ItemListContainer = (props) => {

/*   const [productosFetch, setProductosFetch] = useState([]);

  useEffect(() => {
    fetch('../data/data.json')
      .then((res) => res.json())
      .then((data) => setProductosFetch(data))
      .catch((err) => console.log(err));
  }, []); */

  return (
    <>
     
      <h1 className='text-center'>{props.greeting}</h1>
    </>
  )

}

export default ItemListContainer;