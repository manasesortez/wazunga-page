import React from 'react';

const NavbarLogo = ({ logo }) => (
    <div className="nav__custom__logo__box" >
        <img alt="Wazunga brand"
            src={logo}
            className="wazunga__brand" />
    </div>
);

export default NavbarLogo;