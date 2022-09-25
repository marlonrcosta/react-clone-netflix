import React from 'react';
import './Header.css'

function Header({black}) {
    return (
        <header className={black ? 'black' : ''}>
            <div className='header--logo'>
                <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="Netflix" />
            </div>
            <div className='header--user'>
                <img src="https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png" alt="Logo Usuário" />
            </div>
        </header>
    );
}

export default Header;