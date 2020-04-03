import React from 'react';
import cs from './Dashbord.module.css';
import Linegraph from './Linegraph/Linegraph.jsx';
import Content_midle from './Content_midle/Content_midle';
import Table from './Table/Table';

const Dashbord = () => {
    return (
        <div >
            <Linegraph />
            <Content_midle />
            <Table />
        </div>
    );
}

export default Dashbord;