import * as React from 'react';

export class About extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
        document.title = "About";
    }

    public render() {
        return (
            <main className="about-container row">
                <div className="title">
                    <h1>About Ascend Parkour</h1>
                </div>
                <div className="hero-text">

                </div>
            </main>
        );
    }
}
