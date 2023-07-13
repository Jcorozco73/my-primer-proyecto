import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';
import {BsFacebook, BsTwitter, BsGoogle, BsLinkedin, BsInstagram, BsGithub} from 'react-icons/bs'

const Footer =()=> {
  return (
    <MDBFooter className='text-center ' style={{ backgroundColor: '#f1f1f1' }}>
      <MDBContainer className='pt-4'>
        <section className='mb-4'>
          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
          <BsFacebook/>
          
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
           <BsTwitter/>
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <BsGoogle />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <BsInstagram />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <BsLinkedin/>
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <BsGithub/>
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      <a className='text-dark' href='https://mdbootstrap.com/'>
      © 2023 Copyright:   https://www.lafabrica.com.ar  
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer



