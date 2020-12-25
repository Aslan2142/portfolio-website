import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import GitHubLogo from '../Images/GitHubLogo.svg';
import LinkedInLogo from '../Images/LinkedInLogo.svg';

function Header() {
    return (
        <div>
            <Navbar variant="dark" expand="sm" style={{ position: "absolute", width: "100%", zIndex: 1 }}>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="">
                        <Nav.Link href="https://www.linkedin.com/in/j%C3%A1n-tren%C4%8Dansk%C3%BD-3a914b172/"><img src={LinkedInLogo} alt="LinkedIn Logo" width="30" /></Nav.Link>
                        <Nav.Link href="https://github.com/Aslan2142/"><img src={GitHubLogo} alt="GitHub Logo" width="30" /></Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href={'#home'}>HOME</Nav.Link>
                        <Nav.Link href={'#about'}>ABOUT ME</Nav.Link>
                        <Nav.Link href={'#portfolio'}>PORTFOLIO</Nav.Link>
                        <Nav.Link href={'#contact'}>CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;