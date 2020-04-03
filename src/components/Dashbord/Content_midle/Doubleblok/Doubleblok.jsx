import React from 'react';
import cs from './Doubleblok.module.css';
import Timeline from './Timeline/Timeline';
import Numbershots from './Numbershots/Numbershots';


const Doubleblok = () => {
    return (
        <div className ={cs.wrapper}>
            <div className={cs.item1}>
                <Timeline />
            </div>
            <div className={cs.item2}>
                <Numbershots/>
            </div>
        </div>
    );
}

export default Doubleblok;