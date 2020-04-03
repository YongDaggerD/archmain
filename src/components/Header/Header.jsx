import React from 'react';
import cs from './Header.module.css';

const Header = () => {
    return (
        <div className={cs.header_block}>
            <div className={cs.header_block_left}>
                <div className={cs.header_block_word}>
                    Dashbord
                </div>
                <div className={cs.header_block_seaching}>
                    searching...
                </div>
            </div>
            <div className={cs.header_block_profile}>
                <div className={cs.header_block_profile_bell}>
                <i class="fas fa-bell"></i>
                </div>
                <div className={cs.header_block_profile_elements}> picture </div>
                <div className={cs.header_block_profile_elements}> profile </div>
            </div>
        </div>
    );
}

export default Header;