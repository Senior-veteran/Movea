import React from 'react';
import "./Header.css";
import { FiSearch } from 'react-icons/fi';
import { GrInstall } from 'react-icons/gr';
import { AiOutlineAppstore } from 'react-icons/ai';

const Header = () => {
    return (
        <nav className='navbar'>
            <h4 className="header_logo">
                MOVEA
            </h4>
            <div className="header_midle">
                <ul className="header_item">
                    <li className="header_list">
                        <a href="" className="header_link">Movies</a>
                    </li>
                    <li className="header_list">
                        <a href="" className="header_link">TV Shows</a>
                    </li>
                    <li className="header_list">
                        <a href="" className="header_link">Animations</a>
                    </li>
                    <li className="header_list">
                        <a href="" className="header_link">Plans</a>
                    </li>
                </ul>
            </div>
            <div className="header__icons">
                <p className="icons">
                    <FiSearch />
                    <GrInstall />
                    <AiOutlineAppstore />
                </p>
                <img className='header_img' src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg" alt="veteran" />
            </div>
        </nav>
    )
}

export default Header