import * as React from 'react';

interface PageTitleProps {
    titleText: string
}

export class PageTitle extends React.Component<PageTitleProps, {}> {
    public render() {
        return (
            <div className="title">
                <h1>{this.props.titleText}</h1>
            </div>
        );
    }
}
