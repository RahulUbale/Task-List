
import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
<header className="app-header" style={{ display: 'flex', alignItems: 'center' }}>
            <img 
                src="https://cdn.brandfetch.io/idhdOkjxFs/w/57/h/57/theme/dark/logo.png?k=id64Mup7ac&t=1720641587749" 
                alt="SEL Logo" 
                className="sel-logo" 
                style={{ height: '50px', width: '50px', marginRight: '10px' }} 
            />
            <div className="app-title">SEL Interview Task</div>
        </header>
    );
};

export default Header;
