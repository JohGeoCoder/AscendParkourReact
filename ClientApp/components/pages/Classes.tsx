import * as React from 'react';
import { PageTitle } from './page-components/PageTitle';
import { HeroText } from './page-components/HeroText';
import { Course } from './page-components/Course';

const ImageKidVault = require('../../images/KidVault.jpeg').toString();



export class Classes extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
        document.title = "Classes";
    }

    public render() {
        return (
            <main className="classes-container row">
                <PageTitle titleText="Ascend Parkour Classes" />
                <div className="col-xs-12">
                    <div className="row">
                        <div className="col-xs-12">
                            <HeroText>
                                <p>
                                    Regardless what you hear or see online or on TV, parkour is achievable by
                                    anybody willing to take a step outdoors. What you rarely see in the media
                                    is the wide range of diversity among parkour practitioners.
                                </p>
                                <p>
                                    Whether you're just getting into fitness or are a star athlete, it's the journey
                                    towards your next goal that is most important. People of all levels of athletic
                                    ability are welcome to join Ascend Parkour.
                                </p>
                            </HeroText>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <h2><strong>Private Lessons</strong></h2>
                        </div>
                    </div>
                    <Course Image={ImageKidVault} >
                        <h3><strong>Sparrow</strong> - Ages 3 to 5</h3>
                        <p>
                            Your child will get a jump-start by learning to explore, discover, and view the world with wonder.
                        </p>
                    </Course>
                    <Course Image={ImageKidVault} >
                        <h3><strong>Hawk</strong> - Ages 6 to 8</h3>
                        <p>
                            This is a critical time for children to develop confidence in all areas of life. Your child will
                            learn to manage fears and work towards surmounting them.
                        </p>
                    </Course>
                    <Course Image={ImageKidVault} >
                        <h3><strong>Eagle</strong> - Ages 9 to 12</h3>
                        <p>
                            Children at this age begin to experience more peer pressure. This is an important time for 
                            children to gain a sense of responsibility along with their growing independence. Your child
                            will learn how to reason through problems and make choices.
                        </p>
                    </Course>
                </div>
            </main>
        );
    }
}


