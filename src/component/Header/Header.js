
import React from 'react';
import Logo from '../../component/img/logo.png';


function Header(props){ 
 return(
    <header className="Header">
      <div className="Header_container">
          <img className="Header_logo" src={Logo} alt="" />
          <div className="Header_title">SHELFIE</div>;
 
      </div>
    </header>
  );
 }
export default Header;
