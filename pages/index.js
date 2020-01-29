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

        this.roles = ['Developer.', 'Tech Lover.', 'Great Team Player.' , 'Software Engineer.']
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
                <Container>
                <Row>
                    <Col md="6">
                    <div className="hero-section">
                        <div className={`flipper ${isFlipping ? 'isFlipping' : ''}` }>
                        <div className="front">
                            <div className="hero-section-content">
                            <div className="hero-section-content-intro">
                                 Full Stack Web Developer
                            </div>
                            </div>
                            <img className="image" src="/static/images/forfun.png"/>
                            <div className="shadow-custom">
                            <div className="shadow-inner"> </div>
                            </div>
                        </div>
                        <div className="back">
                            <img className="image" src="/static/images/tamu.png"/>
                            <div className="shadow-custom shadow-custom-1">
                            <div className="shadow-inner"> </div>
                            </div>
                        </div>

                        </div>
                    </div>
                    </Col>
                    <Col md="6" className="hero-welcome-wrapper">
                    <div className="hero-welcome-text">
                        <h1>
                        Welcome to the portfolio website of Seungjin Kim.
                        Get informed and discover projects I was working on through the years!
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