import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = () => {
    // State to track whether the screen is in mobile view or not
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        // Function to handle window resize
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Add event listener to handle resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className="app-header" style={{ display: 'flex', alignItems: 'center' }}>
            {/* Conditional rendering based on screen size */}
            {isMobile ? (
                <img 
                    src="https://i.ibb.co/9hnvhLL/Schweitzer-Engineering-Laboratories-idt-ARIYZv-F-1.png" 
                    alt="SEL Logo" 
                    className="sel-logo" 
                    style={{ height: '37px', width: '60px', marginRight: '10px' }} 
                />
            ) : (
                <img 
                    src="https://i.ibb.co/9cPbgpy/Schweitzer-Engineering-Laboratories-idt-ARIYZv-F-1.png" 
                    alt="SEL Logo" 
                    className="sel-logo" 
                    style={{ height: '38px', width: '150px', marginRight: '10px' }} 
                />
            )}
            <div className="app-title">SEL Interview Task</div>
        </header>
    );
};

export default Header;
