import React from 'react';
import './Navbar.scss'

const BranNav = () => {
    
    return(
      <div className='Logo'>
      <img src= {process.env.PUBLIC_URL + '/logo.png'} alt='LogoNav'/>
      </div>
    
    )

}

export default BranNav