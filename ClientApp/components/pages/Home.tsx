import * as React from 'react';

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
            <main className="home-container flexbox row">
                <div className="quote-container flexbox-item">
                    <div className="image cover kid-vault">
                        <div className="quote left">
                            <span>Great things come from little things</span>
                        </div>
                    </div>
                </div>
                <div className="quote-container flexbox-item">
                    <div className="image cover rail-balance">
                        <div className="quote right">
                            <span>Those who bravely dare must sometimes risk a fall</span>
                        </div>
                    </div>
                </div>
                <div className="quote-container flexbox-item">
                    <div className="image cover climb">
                        <div className="quote right">
                            <span>Begin Your Ascent</span>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}
