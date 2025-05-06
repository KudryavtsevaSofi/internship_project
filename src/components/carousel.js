import React from 'react';
import { Carousel } from 'react-bootstrap';
import Carousel1 from '../images/carousel1.jpg';
import Carousel2 from '../images/carousel2.jpg';
import Carousel3 from '../images/carousel3.jpg';
import Portrait from '../images/portrait_.png';

const CarouselMain = () => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Carousel1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Carousel2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Carousel3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <div
        style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            textAlign: 'center',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            maxWidth: '80%',
          }}
    >
        <img
            style={{ width: '40%', height: 'auto' }}
            src={Portrait}
            alt="Portrait"
        />
        <div style={{ flex: 1, textAlign: 'center' }}>
          <blockquote className="styled-quote" style={{padding: '20px'}}>
            <h3 >
              У каждого мира есть голос. Я здесь только для того, чтобы услышать его.
            </h3>
            <footer style={{ textAlign: 'right', fontStyle: 'italic',  marginTop: '10px' }}>
              - Элиас Торрен
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default CarouselMain;