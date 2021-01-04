import React from 'react';
import { Image } from 'react-bootstrap';

import FacePhoto from '../Images/FacePhoto.jpg';

class About extends React.Component {

    render() {
        return (
            <div className="text-center text-light mt-5" id="about">
                <h2 className="mb-4">About Me</h2>
                <div className="row justify-content-md-center">
                    <div className="col col-lg-2">
                        <Image src={FacePhoto} width="128" style={{ borderRadius: 64 }} />
                    </div>
                    <div className="col col-lg-5 text-left">
                        <p>
                            Motivated and passionate junior software developer looking for an entry level developer job. Eager to learn and have a proven knowledge of several programming languages, frameworks, libraries and I’m able to develop both web and desktop applications. Strong problem solving skills and a creative and open mind. Fast learner that is not afraid to work alone or in a team. Proficient with working in Windows as well as in Linux-based systems as I use them on daily basis.
                        </p>
                    </div>
                </div>
            </div>
        )
    }

}

export default About;
