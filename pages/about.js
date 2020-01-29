import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import {Row, Col} from 'reactstrap';

class About extends React.Component {
    render() {
        return (
            <BaseLayout headerType="index" title ="Seungjin Kim - About" {...this.props.auth}>

                <BasePage className='about-page cover'>

                <Row className="mt-5">
                    <Col md="6">
                        <div className="left-side">
                        <h1 className="title fadein">Hello, Welcome</h1>
                        <p className="subtitle fadein">Feel free to read short description about me.</p>
                        </div>
                    </Col>
                    <Col md="6">
                        <div className="fadein" id="intro">
                        <p className="subsubTitle">My name is Seungjin Kim and I am a Computer science major and Math minor at Texas A&M University, expected to graduate in May 2020. </p>
                        <p className="subsubTitle">
                        I love to learn something new, so I really love to develop Software because there are infinite many things to learn as I write code. 
                        </p>
                        <p className="subsubTitle"> 
                        I have one year of internship experience as a Software Engineer in a Start-up company. Moreover,
                        I have several years of experience working on a wide range of technologies and projects from C++ development to
                        modern mobile, web applications in React and Angular, and Machine Learning.
                        </p>
                        <p className="subsubTitle">
                        Throughout my career, I have acquired advanced technical knowledge and the ability to communicate
                        with people to be a better team player. I invite you to take my course,
                        where I have put a lot of effort to be a better Software Engineer.
                        </p>
                        </div>
                    </Col>
                </Row>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default About