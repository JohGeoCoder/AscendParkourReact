import * as React from 'react';

interface CoursePriceProps {
    courseTitle: String,
    price: String,

}

export class CoursePrice extends React.Component<CoursePriceProps, {}> {
    public render() {
        return (
            <div className="course-price flexbox-item">
                <div className="flexbox-vertical">
                    <div className="price-title flexbox-item">
                        <h3>{this.props.courseTitle}</h3>
                        <div>
                            {this.props.children}
                        </div>
                    </div>
                    <div className="price-value flexbox-item">
                        <p>{this.props.price}</p>
                    </div>
                </div>
            </div>
        );
    }
}
