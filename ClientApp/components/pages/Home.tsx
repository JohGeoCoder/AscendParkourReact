import * as React from 'react';
import { NavItem } from '../navigation/NavItem';

const ImageAORGroup = require('../../images/AOR2016Group.jpg').toString();
const ImageAORJahava = require('../../images/AORJahava.jpg').toString();
const ImageBenFranklinYann = require('../../images/BenFranklinYann.jpg').toString();
const ImageClimb = require('../../images/climb.jpeg').toString();
const ImageKidVault = require('../../images/KidVault.jpeg').toString();
const ImageRailBalance = require('../../images/RailBalance.jpeg').toString();

export class Home extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
        document.title = "Home";
    }

    public render() {
        return (
            <main className="home-container row">
                <div className="title">
                    <h1>Ascend Parkour</h1>
                </div>
                <div className="hero-text">
                    <p>
                        Ascend Parkour is a fitness community dedicated to guiding it's students
                        towards engaging personal development in a fun way using the holistic
                        movement discipline known as Parkour.
                    </p>
                    <p>
                        Parkour is a non-competitive sport that focuses on personal, interpersonal,
                        and environmental discovery. It's one of the only sports in the world
                        that does not require any special training, expensive clothing, or equipment.
                    </p>
                    <p>
                        <strong> Parkour is for ANYBODY, so please come as you are!</strong>
                    </p>
                </div>
                <div className="flexbox">
                    <div className="quote-container flexbox-item">
                        <div className="image cover kid-vault">
                            <div className="quote">
                                <span>Improvement</span>
                            </div>
                        </div>
                    </div>
                    <div className="quote-container flexbox-item">
                        <div className="image cover rail-balance">
                            <div className="quote">
                                <span>Confidence</span>
                            </div>
                        </div>
                    </div>
                    <div className="quote-container flexbox-item">
                        <div className="image cover franklin-steps">
                            <div className="quote">
                                <span>Community</span>
                            </div>
                        </div>
                    </div>
                    <div className="quote-container full-width flexbox-item">
                        <div className="image cover climb">
                            <div className="quote">
                                <span><NavItem linkText="Begin Your Ascent" url="/classes" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}
