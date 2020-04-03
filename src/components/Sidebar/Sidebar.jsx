import React from 'react';
import cs from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={cs.wrapper}>
            <div className={cs.text}>Sidebar</div>
        </div>
    );
}

export default Sidebar;