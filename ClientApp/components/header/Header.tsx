import * as React from 'react';

const Logo = require('../../images/AscendParkourLogoBlue.png').toString();
const BackgroundHeroImage = require('../../images/McDade.jpg').toString();

export class Header extends React.Component<{}, {}> {

    public render() {
        return (
            <div>
                <header className="header-logo-container row">
                    <div className="header-logo-container col-xs-12">
                        <img src={Logo} className="header-logo img-responsive" ></img>
                    </div>
                </header>
            </div>
        );
    }
}
