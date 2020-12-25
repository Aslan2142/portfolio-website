import React from 'react';
import { ProgressBar, Button } from 'react-bootstrap';
import { } from 'react-bootstrap-icons';

import { SkillData } from './SkillData';

class Skills extends React.Component {

    state = {
        show: false
    }

    darkBgStyle = {
        backgroundColor: "#343a40"
    }

    showSkills = () => {
        return SkillData.map(item => {
            if (item === null || item === undefined) return null;

            if (item.length === 2) {
                return (
                    <div class="row justify-content-md-center">
                        <div class="col col-lg-2">
                            <p>{item[0]}</p>
                        </div>
                        <div class="col col-lg-6 mt-1">
                            <ProgressBar style={this.darkBgStyle} variant="light" now={item[1]} />
                        </div>
                    </div>
                )
            } else if (item.length === 1) {
                return (
                    <br />
                )
            } else {
                return (
                    <div class="row justify-content-md-center">
                        <div class="col col-lg-2 mt-1">
                            <p>{item[0]}</p>
                        </div>
                        <div class="col col-lg-6">
                            <ProgressBar className="mb-1" style={this.darkBgStyle} variant="light" now={item[1]} />
                            <ProgressBar style={this.darkBgStyle}>
                                <ProgressBar variant="danger" label={item[2]} now={item[3]} key={1} />
                                <ProgressBar variant="info" label={item[4]} now={item[5]} key={2} />
                                <ProgressBar variant="success" label={item[6]} now={item[7]} key={3} />
                            </ProgressBar>
                        </div>
                    </div>
                )
            }
        });
    }

    render() {
        if (this.state.show) {
            return (
                <div className="text-center text-light mt-4">
                    <h2 className="mb-4">My Skills</h2>
                    <this.showSkills />
                    <Button className="mt-4" variant="dark" style={{ width: 320 }} onClick={ e => this.setState({show: false}) }>Hide Skills</Button>
                </div>
            )
        } else {
            return (
                <div className="text-center text-light mt-4">
                    <Button variant="dark" style={{ width: 320 }} onClick={ e => this.setState({show: true}) }>Show Skills</Button>
                </div>
            )
        }
    }

}

export default Skills;