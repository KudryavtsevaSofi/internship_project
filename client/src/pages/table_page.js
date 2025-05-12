import React from 'react';
import { Container } from "react-bootstrap";
import { observer } from 'mobx-react-lite';
import Navbar from '../components/navbar';
import { BasicTable } from '../components/BasicTable';
import Footer from '../components/footer';

const Table_page = observer(() => {
    return(
        <div style={{ overflowX: 'hidden' }}>
            <Navbar/>
            <Container fluid className="mb-3 px-0">
                <h1 className='text-center mt-4'>Публичный каталог экзопланет Элиаса Торрена</h1>
                <BasicTable/>
            </Container>
            <Footer/>
        </div>
    )
});

export default Table_page;