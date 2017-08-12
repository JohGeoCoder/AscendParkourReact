import * as React from 'react';
import { PageTitle } from './page-components/PageTitle';

export class Classes extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
        document.title = "Classes";
    }

    public render() {
        return (
            <div>
                <div className="row">
                    <PageTitle titleText="Ascend Parkour Classes" />
                </div>
            </div>
        );
    }
}
