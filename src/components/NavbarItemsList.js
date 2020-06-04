import React from 'react';
import './Navbar.css';

const NavbarItemsList = ({ buttons }) => (
    <ol className="menu__content" style={{ "margin-top": "20px" }}>
        {buttons.map((button, i) => {
            return (
                <li className="menu-item" style={{ marginBottom: "30px" }}>
                    <a href={button.ref} key={i} className="button__nhulox">{button.name}</a>
                </li>
            )
        })}
    </ol>
);

export default NavbarItemsList;