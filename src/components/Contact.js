import React from 'react';
import { Button } from 'react-bootstrap';
import { Envelope, Phone } from 'react-bootstrap-icons';

import GitHubLogo from '../Images/GitHubLogo.svg';
import LinkedInLogo from '../Images/LinkedInLogo.svg';

class Contact extends React.Component {

    render() {
        return (
            <div className="text-center text-light mt-5 mb-5" id="contact">
                <h2 className="mb-4">Contact</h2>
                <p><a href="mailto:jan.trencansky2142@gmail.com"><Button variant="dark" style={{ width: 320 }}><Envelope size="22" width="40" />jan.trencansky2142@gmail.com</Button></a></p>
                <p><a href="tel:+421950766907"><Button variant="dark" style={{ width: 320 }}><Phone size="22" width="32" />+421950766907</Button></a></p>
                <p><a href="https://www.linkedin.com/in/j%C3%A1n-tren%C4%8Dansk%C3%BD-3a914b172/"><Button variant="dark" style={{ width: 320 }}><img src={LinkedInLogo} alt="LinkedIn Logo" width="22" style={{ marginRight: 8 }} />LinkedIn Profile</Button></a></p>
                <p><a href="https://github.com/Aslan2142/"><Button variant="dark" style={{ width: 320 }}><img src={GitHubLogo} alt="GitHub Logo" width="22" style={{ marginRight: 8 }} />GitHub Profile</Button></a></p>
            </div>
        )
    }

}

export default Contact;