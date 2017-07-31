import * as React from 'react';

export class Classes extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
        document.title = "Classes";
    }

    public render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>Classes</h1>
                    </div>
                </div>
            </div>
        );
    }
}
