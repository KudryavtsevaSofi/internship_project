import { useState, useEffect } from 'react';
import TG from '../images/tg.png';
import GH from '../images/gh.png'

const Footer = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return (
        <footer className="text-center bg-dark">
            <section className="p-3">
                <div className="d-flex justify-content-center">
                    <a href="https://t.me/kudryavtseva_si">
                        <img src={TG} style={{width: '30px', marginRight: '30px'}}></img>
                    </a>
                    <a href="https://github.com/KudryavtsevaSofi">
                        <img src={GH} style={{width: '30px', marginLeft: '30px'}}></img>
                    </a>
                </div>
            </section>
            <div className="text-center p-3" style={{color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                © 2025 InternSpaceShip
            </div>
      </footer>
    );
};

export default Footer;