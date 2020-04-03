import React from 'react';
import cs from './Content_midle.module.css';
import Hitstatus from './Hitstatus/Hitstatus';
import Time from './Time/Time';
import Doubleblok from './Doubleblok/Doubleblok';


const Content_midle = () => {
        return (
                <div className={cs.content_block}>
                        <div className={cs.item}><Doubleblok /></div>
                        <div className={cs.item}><Hitstatus /></div>
                        <div className={cs.item}><Time /></div>
                </div>
        );
}

export default Content_midle;