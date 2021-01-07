import React from 'react';
import { Container } from 'react-bootstrap';

import Header from './Header';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';

import CoverBackground from '../Images/CoverBackground.jpg';

class Home extends React.Component {

    render() {
        return (
            <>
                <Header />
                <div id="home">
                    <div style={{ position: "relative", zIndex: 0 }}>
                        <img className="no-drag" src={CoverBackground} alt="background" width="100%" style={{ position: "relative" }} />
                        <div className="text-center text-light" style={{ position: "absolute", margin: "auto", top: 0, left: 0, right: 0, bottom: 90, height: 0 }}>
                            <h1>JÁN TRENČANSKÝ</h1>
                            <p className="text-muted">Junior Software Developer</p>
                        </div>
                    </div>
                    <Container className="my-auto" fluid="lg">
                        <About />
                        <Skills />
                        <Portfolio />
                        <Contact />
                    </Container>
                </div>
            </>
        )
    }

}

export default Home;