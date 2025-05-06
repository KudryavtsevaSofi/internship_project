import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import Carousel1 from '../images/carousel1.jpg';
import Carousel2 from '../images/carousel2.jpg';
import Carousel3 from '../images/carousel3.jpg';
import Portrait from '../images/portrait_new.png';

const CarouselMain = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
      <div style={{ position: 'relative', overflow: 'hidden' }}>
      {!isMobile && (
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
      )}
      <div
        style={{
          position: isMobile ? 'static' : 'absolute',
          top: isMobile ? 'auto' : '50%',
          left: isMobile ? 'auto' : '50%',
          transform: isMobile ? 'none' : 'translate(-50%, -50%)',
          backgroundColor: isMobile ? 'transparent' : 'rgba(0, 0, 0, 0.5)',
          color: isMobile ? 'black' : 'white',
          textAlign: 'center',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          maxWidth: isMobile ? '100%' : '80%',
          flexDirection: isMobile ? 'column' : 'row',
          padding: isMobile ? '20px' : '0',
        }}
      >
        <img
          style={{ width: isMobile ? '80%' : '40%', height: 'auto' }}
          src={Portrait}
          alt="Portrait"
        />
        <div style={{ flex: 1, textAlign: 'center' }}>
          <blockquote className="styled-quote" style={{ padding: '20px' }}>
            <h3>
              У каждого мира есть голос. Я здесь только для того, чтобы услышать его.
            </h3>
            <footer style={{ textAlign: 'right', fontStyle: 'italic', marginTop: '10px' }}>
              - Элиас Торрен
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
    );
};

export default CarouselMain;