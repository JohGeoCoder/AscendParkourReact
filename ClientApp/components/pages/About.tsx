import * as React from 'react';
import { PageTitle } from './page-components/PageTitle';
import { HeroText } from './page-components/HeroText';

export class About extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
        document.title = "About";
    }

    public render() {
        return (
            <main className="about-container row">
                <PageTitle titleText="About Ascend Parkour" />
                <div className="col-xs-12">
                    <div className="row">
                        <div className="col-xs-12">
                            <HeroText>
                                <p>
                                    Ascend Parkour is committed to providing its students with a safe, engaging,
                                    and memorable learning experience. Our mission is to help our students realize
                                    their potential physically, mentally, emotionally, and interpersonally through
                                    engaging personal development.
                                </p>
                            </HeroText>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">

                        </div>
                    </div>
                </div>
            </main>
        );
    }
}
