import * as React from 'react';

interface HeroTextProps {

}

export class HeroText extends React.Component<HeroTextProps, {}> {
    public render() {
        return (
            <div className="hero-text">
                {this.props.children}
            </div>
        );
    }
}
