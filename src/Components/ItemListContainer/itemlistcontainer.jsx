import React from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {

  const {id} = useParams()

  return (
    <div>

    <h1 className='text-center'>{props.greeting}:{id} </h1>

    </div>
     
  )

}

export default ItemListContainer;