import * as React from 'react';
import { PageTitle } from './page-components/PageTitle';

export class About extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
        document.title = "About";
    }

    public render() {
        return (
            <main className="about-container row">
                <PageTitle titleText="About Ascend Parkour" />
                <div className="hero-text">

                </div>
            </main>
        );
    }
}
