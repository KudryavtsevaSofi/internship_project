import React from 'react';
import { Container } from "react-bootstrap";
import { observer } from 'mobx-react-lite';
import NavBar from '../components/navbar';
import CarouselMain from '../components/carousel';
import ScrollSpy from '../components/scrollSpy';
import Footer from '../components/footer';

const Main_page = observer(() => {

    return(
        <div>
            <NavBar/>
            <CarouselMain/>
            <ScrollSpy/>
            <Footer/>
        </div>
    )
});

export default Main_page;