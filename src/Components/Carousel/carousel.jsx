import React from 'react';
import Carousel from 'react-bootstrap/Carousel';



function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
        width={300}
        height={400}
        className="d-block w-100"
        src={process.env.PUBLIC_URL+ "/Assets/pasta1.jpg"}
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
        width={300}
        height={400}
        className="d-block w-100"
        src={process.env.PUBLIC_URL+ "/Assets/pasta2.jpg"}
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
        width={300}
        height={400}
        className="d-block w-100"
        src={process.env.PUBLIC_URL+ "/Assets/pasta3.jpg"}
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