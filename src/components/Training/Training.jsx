import React from 'react';
import {Button} from 'antd';
import cs from './Training.module.css';

const Training = () => {
    return (
       <div className={cs.wrapper}>
            <div className={cs.upper}>
            </div>
            <div className={cs.lower}>
                <div className={cs.item}>
                    <div className={cs.picture}></div>
                    <div className={cs.lower_box}></div>
                </div>
                <div className={cs.item}>picrure</div>
                <div className={cs.item}>picture</div>
                <div className={cs.item}>picture</div>
            </div>
        </div> 
    );
}

export default Training;