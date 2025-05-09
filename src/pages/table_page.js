import React from 'react';
import { Container } from "react-bootstrap";
import { observer } from 'mobx-react-lite';
import Navbar from '../components/navbar';
import { BasicTable } from '../components/BasicTable';

const Table_page = observer(() => {
    return(
        <div>
            <Navbar/>
        <Container>
        {/* <p>Таблица</p> */}
        <BasicTable/>
        </Container>
        </div>
    )
});

export default Table_page;