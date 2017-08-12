import * as React from 'react';
import { PageTitle } from './page-components/PageTitle';

export class Contact extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
        document.title = "Contact";
    }

    public render() {
        return (
            <div>
                <div className="row">
                    <PageTitle titleText="Ascend Parkour - Contact Us" />
                </div>
            </div>
        );
    }
}
