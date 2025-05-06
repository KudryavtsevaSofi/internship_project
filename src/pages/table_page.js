import React from 'react';
import { Container } from "react-bootstrap";
import { observer } from 'mobx-react-lite';
import Navbar from '../components/navbar';

const Table_page = observer(() => {
    return(
        <div>
            <Navbar/>
        <Container>
        <p>Таблица</p>
        </Container>
        </div>
    )
});

export default Table_page;