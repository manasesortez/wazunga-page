import React from 'react';
import NavbarItemsList from './NavbarItemsList';
import './Navbar.css';
import NavbarLogo from './NavbarLogo';

const Navbar = () => {

    let buttonsData = [
        { name: 'Home', ref: '#0' },
        { name: 'About', ref: '#0' },
        { name: 'Widgets', ref: '#0' },
        { name: 'Kabobs', ref: '#0' },
        { name: 'Contact', ref: '#0' },
    ]

    //let brand = 'https://firebasestorage.googleapis.com/v0/b/wazunga-briefcase.appspot.com/o/wazunga_brand2.png?alt=media&token=08a28931-ddaf-4247-a965-6caa855c37e1'
    let brand = 'https://firebasestorage.googleapis.com/v0/b/wazunga-briefcase.appspot.com/o/wazunga_brand.png?alt=media&token=ecc0df7a-16fd-4778-aa64-b4716df0c088'
    return (
        <div className="nav-custom">
            <div className="menu__custom">
                <input style={{ marginInlineStart: "50px" }} id="menu__toggle" type="checkbox" className="menu__toggle" />
                <label for="menu__toggle" className="menu__toggle-label menu-custom-icon">
                    <svg preserveAspectRatio="xMinYMin" viewBox="0 0 24 24">
                        <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                    </svg>
                    <svg preserveAspectRatio="xMinYMin" viewBox="0 0 24 24">
                        <path
                            d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                        />
                    </svg>
                </label>
                <NavbarItemsList buttons={buttonsData} />
            </div>
           <NavbarLogo logo={brand}/>
        </div>
    );
}

export default Navbar;