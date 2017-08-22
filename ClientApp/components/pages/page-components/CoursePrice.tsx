import * as React from 'react';

interface CoursePriceProps {
    courseTitle: String,
    price: String,
    duration? : string

}

export class CoursePrice extends React.Component<CoursePriceProps, {}> {
    public render() {
        let duration = this.props.duration ? <h4>{this.props.duration}</h4> : null;

        return (
            <div className="course-price flexbox-item">
                <div className="flexbox-vertical">
                    <div className="price-title flexbox-item">
                        <h3>{this.props.courseTitle}</h3>
                        {duration}
                        <div>
                            {this.props.children}
                        </div>
                    </div>
                    <div className="price-value flexbox-item">
                        <p>{this.props.price} - Book Now!</p>
                    </div>
                </div>
            </div>
        );
    }
}
