import * as React from 'react';

interface CourseProps {
    Image: string
};

export class Course extends React.Component<CourseProps, {}> {
    public render() {
        return (
            <div className="course row">
                <div className="col-xs-6">
                    <img src={this.props.Image} className="img-responsive" />
                </div>
                <div className="col-xs-6">
                    {this.props.children}
                </div>
            </div>
        )
    }
};