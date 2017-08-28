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
                                    We are committed to providing its students with a safe, engaging, and memorable 
                                    learning experience. Our mission is to help our students realize their potential 
                                    physically, mentally, emotionally, and interpersonally through engaging personal 
                                    development.
                                </p>
                                <p>
                                    Ascend Parkour is an aspiring fitness community in the Scranton area.  Parkour 
                                    focuses on using creativity and everyday surroundings to find fitness 
                                    opportunities anywhere.  Therefore, many classes will be held in outdoor venues 
                                    such as parks and urban settings.  Being in these "real-life" environments allows 
                                    students to develop their perspective to view their entire world as an opportunity 
                                    for growth.
                                </p>
                                <p>
                                    Our head coach is John George.  John became fascinated with parkour as a young 
                                    child and has been practicing for over 10 years.  In 2011, John became a certified 
                                    parkour trainer with ADAPT Qualifications.  John is thrilled and eager to establish 
                                    a parkour community in the Scranton area and help others discover the joys and 
                                    excitement of an alternative fitness model.
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
