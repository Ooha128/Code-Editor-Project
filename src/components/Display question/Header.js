import React from 'react';
function Header(){
    return(
        <div className="header">
            <div className="header__left">
            <img className="logo h-1/10" src="https://codegnan.com/media/logo.png"/>
            </div>
             <div className="header__center">
                <ul>
                    <li><a href="#">Problems</a></li>
                    <li><a href="#">Contests</a></li>
                </ul>
            </div>
             <div className="header__right">
            </div>
        </div>
    );
}

export default Header;