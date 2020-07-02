import React from 'react';
import { Navbar } from 'react-bootstrap'


function ToolBar() {
    return(
        <Navbar bg="dark" expand="lg" className="d-flex justify-content-between">
            <Navbar.Brand className="text-white font-weight-bold">Todo</Navbar.Brand>  
            <div>
                <a href="https://github.com/derian-rods" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-alt text-white px-4 fa-2x"></i></a>
                <a href="https://www.linkedin.com/in/derian-salazar-215b50138/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in text-white fa-2x"></i></a>
            </div>
        </Navbar>
    );
}

export default ToolBar;