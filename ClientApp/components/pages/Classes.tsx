import * as React from 'react';
import { PageTitle } from './page-components/PageTitle';
import { HeroText } from './page-components/HeroText';
import { Course } from './page-components/Course';
import { CoursePrice } from './page-components/CoursePrice';

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
                            <h2><strong>Kids Private Lessons</strong></h2>
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
                            will learn how to reason through problems and make good choices.
                        </p>
                    </Course>
                    <div className="row">
                        <div className="col-xs-12">
                            <h2><strong>Adult Private Lessons</strong></h2>
                        </div>
                    </div>
                    <Course Image={ImageKidVault} >
                        <h3><strong>Joint Health</strong></h3>
                        <p>
                            Have weak joints been holding you back from doing the physical activities that you  want
                            to do? This class is geared toward the gentle movement exercises that strengthen the
                            supporting structures around joints.
                        </p>
                    </Course>
                    <Course Image={ImageKidVault} >
                        <h3><strong>Weight Management</strong></h3>
                        <p>
                            People use parkour to lose weight. This class will balance strength-building exercises
                            with cardiovascular exercise to boost the metabolism. Discussion of nutrition will also
                            be a part of this class.
                        </p>
                    </Course>
                    <Course Image={ImageKidVault} >
                        <h3><strong>Parkour Preparation</strong></h3>
                        <p>
                            Parkour is a fulfilling means towards self-improvement, and anybody can do it. 
                            Some people feel they are too clumsy, not strong enough, have to lose weight, or have weak joints. 
                            We will help you with all of that so you can join the group classes with confidence.
                        </p>
                    </Course>
                    <div className="row">
                        <div className="col-xs-12">
                            <h2><strong>Prices</strong></h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="course-price-container">
                                <div className="flexbox">
                                    <CoursePrice courseTitle="Adult Group Class - Ages 13+ - 2 Hours" price="$30 drop-in">
                                        <p><strong>One month (2 classes) free with purchase of a 4-pack private lesson or higher</strong></p>
                                    </CoursePrice>
                                    <CoursePrice courseTitle="One Private Lesson - 1 Hour Each" price="$50">

                                    </CoursePrice>
                                    <CoursePrice courseTitle="4-Pack Private Lesson - 1 Hour Each" price="$180">

                                    </CoursePrice>
                                    <CoursePrice courseTitle="One Private Lesson - 90 Minutes Each" price="$70">

                                    </CoursePrice>
                                    <CoursePrice courseTitle="4-Pack Private Lesson - 90 Minutes Each" price="$240">

                                    </CoursePrice>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </main>
        );
    }
}


