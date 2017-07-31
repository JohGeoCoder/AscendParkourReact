import * as React from 'react';

export class Contact extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
        document.title = "Contact";
    }

    public render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>Contact</h1>
                    </div>
                </div>
            </div>
        );
    }
}
