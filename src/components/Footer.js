import React from 'react';


function Footer() {
    let date = new Date();
    return(
        <div className="d-flex justify-content-center fixed-bottom">
            <span>Copyright © {date.getFullYear()} - <a href="mailto:derian.rods@gmail.com" target="_blank" rel="noopener noreferrer" className="text-info">Derian.RS</a></span>
        </div> 
    );
}

export default Footer;