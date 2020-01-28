import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'

import { Button, Container, Row, Col} from 'reactstrap';
import Typed from 'react-typed'


//Class Component
class Index extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isFlipping: false
        }

        this.roles = ['Developer', 'Tech Lover', 'Team Player' , 'React.js']
    }

    componentDidMount() {
        this.animateCard();
    }

    componentWillUnmount() {
        this.cardAnimationInterval && clearInterval(this.cardAnimationInterval);
    }


    animateCard() {
       this.cardAnimationInterval = setInterval(() => {
            this.setState({
                isFlipping: !this.state.isFlipping
            })
        }, 10000)
    }

    render() {
        const {user, isAuthenticated } = this.props.auth
        const {isFlipping} = this.state
        return (
            <BaseLayout className={`cover ${isFlipping ? 'cover-1' : 'cover-0'}`} {...this.props.auth}
                        headerType="index"
                        title="Seungjin Kim - Portfolio">
            <div className="main-section">
                <div className="background-image">
                <img src="/static/images/background-index.png" />
                </div>

                <Container>
                <Row>
                    <Col md="6">
                    <div className="hero-section">
                        <div className={`flipper ${isFlipping ? 'isFlipping' : ''}` }>
                        <div className="front">
                            <div className="hero-section-content">
                            <h2> Full Stack Web Developer </h2>
                            <div className="hero-section-content-intro">
                                Have a look at my portfolio.
                            </div>
                            </div>
                            <img className="image" src="/static/images/section-1.jpg"/>
                            <div className="shadow-custom">
                            <div className="shadow-inner"> </div>
                            </div>
                        </div>
                        <div className="back">
                            <div className="hero-section-content">
                            <h2> Get in touch with me </h2>
                            <div className="hero-section-content-intro">
                                Enthusiastic Learner
                            </div>
                            </div>
                            <img className="image" src="/static/images/section-2.jpg"/>
                            <div className="shadow-custom shadow-custom-2">
                            <div className="shadow-inner"> </div>
                            </div>
                        </div>

                        </div>
                    </div>
                    </Col>
                    <Col md="6" className="hero-welcome-wrapper">
                    <div className="hero-welcome-text">
                        <h1>
                        {isAuthenticated && <span> {user.name} </span>}
                        Welcome to the portfolio website of Seungjin Kim.
                        Get informed, collaborate and discover projects I was working on through the years!
                        </h1>
                    </div>
                    <Typed
                        strings={this.roles}
                            typeSpeed={60}
                            backSpeed={60}
                            className="self-typed"
                            loop >
                    </Typed>
                    <div className="hero-welcome-bio">
                        <h1>
                        Let's take a look on my work.
                        </h1>
                    </div>
                    </Col>
                </Row>
                </Container>
            </div>
            </BaseLayout>
        )
    }

}

export default Index