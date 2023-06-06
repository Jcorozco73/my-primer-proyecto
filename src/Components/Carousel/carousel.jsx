import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pasta1 from '../../Assets/pasta1.jpg'
import pasta2 from '../../Assets/pasta2.jpg'
import pasta3 from '../../Assets/pasta3.jpg'


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
        width={100}
        height={400}
        className="d-block w-100"
        src={pasta1} 
          //"holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
        width={100}
        height={400}
        className="d-block w-100"
          src={pasta2}
          //"holder.js/800x400?text=First slide&bg=373940"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        width={100}
        height={400}
        className="d-block w-100"
        src= {pasta3}
          //"holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>seguir</h3>
          <p>
            
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;