import React from 'react';
import Axios from 'axios';
import { Carousel, CardColumns, Card, Button } from 'react-bootstrap';

import { FeaturedProjects, BlacklistedProjects } from './ProjectData';

class Portfolio extends React.Component {

    state = {
        projects: []
    }

    requestImage = require.context('../Images/Projects', true, /.jpg$/);

    carouselItemStyle = {
        backgroundColor: "#343a40",
        borderRadius: "0.25rem",
        width: "100%"
    }

    componentDidMount = () => {
        Axios.get('https://api.github.com/users/Aslan2142/repos').then(response => {
            this.setState({
                projects: response.data
            });
        });
    }

    slideItems = () => {
        return this.state.projects.map((item, index) => {
            if (!FeaturedProjects.includes(item.name)) return null;
            return (
                <Carousel.Item key={'slide' + index} interval={2500} style={this.carouselItemStyle}>
                    <a href={item.html_url}>
                        <img src={this.requestImage('./' + item.name + '.jpg').default} width="100%" alt={item.name} style={{ borderRadius: "0.25rem" }} />
                        <Carousel.Caption>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                        </Carousel.Caption>
                    </a>
                </Carousel.Item>
            )
        });
    }

    slideshow = () => {
        return (
            <div className="mt-5" id="portfolio">
                <Carousel >
                    {this.slideItems()}
                </Carousel>
            </div>
        )
    }

    cardItems = () => {
        if (this.state.projects.length === 0) return null;

        return this.state.projects.map((item, index) => {
            if (BlacklistedProjects.includes(item.name)) return null;
            return (
                <a key={'card-link' + index} href={item.html_url} style={{ textDecoration: "none" }}>
                    <Card key={'card' + index} bg="dark" text="light">
                        <Card.Header>{item.language}</Card.Header>
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>{item.description}</Card.Text>
                        </Card.Body>
                        <Card.Footer className="d-flex">{item.created_at.substring(0, 10)}<span className="ml-auto">{item.license === null ? '' : item.license.spdx_id}</span></Card.Footer>
                    </Card>
                </a>
            )
        });
    }

    cards = () => {
        return (
            <div className="text-center text-light mt-5">
                <h2 className="mb-4">My Projects</h2>
                <CardColumns>
                    {this.cardItems()}
                </CardColumns>
            </div>
        )
    }

    render() {
        return (
            <div>
                <this.slideshow />
                <this.cards />
                <div className="text-center mt-2">
                    <a href="https://github.com/Aslan2142?tab=repositories"><Button variant="dark">All my Projects</Button></a>
                </div>
            </div>
        )
    }

}

export default Portfolio;
