import * as React from 'react';

export class About extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
        document.title = "About";
    }

    public render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>About</h1>
                    </div>
                </div>
            </div>
        );
    }
}
