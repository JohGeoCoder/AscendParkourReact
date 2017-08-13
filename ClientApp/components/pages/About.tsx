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
                <HeroText>

                </HeroText>
            </main>
        );
    }
}
