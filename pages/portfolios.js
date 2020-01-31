import React from 'react'
import Link from 'next/link'
import BasePage from '../components/BasePage'
import BaseLayout from '../components/layouts/BaseLayout'
import { Col, Row, Card, CardHeader, CardBody, CardText, CardTitle, Button, Container } from 'reactstrap'
import { getPortfolios, deletePortfolio } from '../actions';

/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
 */


import { Router } from '../routes'

class Portfolios extends React.Component {

    constructor(props) {
        super()

        this.deletePortfolio = this.deletePortfolio.bind(this)
    }

    static async getInitialProps({ req }) {
        let portfolios = [];
        try {
            portfolios = await getPortfolios(req)
        } catch (err) {
            console.error(err)
        }
        return { portfolios };
    }

    displayDeleteWarning(portfolioId) {
        const isConfirm = confirm('Are you sure you want to delete this portfolio??')

        if (isConfirm) {
            this.deletePortfolio(portfolioId)
        }
    }

    deletePortfolio(portfolioId) {
        deletePortfolio(portfolioId).then(() => {
            Router.pushRoute('/portfolios')
        })
            .catch(err => console.error(err)
            )
    }

    renderPortfolios(portfolios) {
        const { isAuthenticated, isSiteOwner } = this.props.auth

        return portfolios.map((portfolio, index) => {
            return (
                <React.Fragment key={index}>
                    <Card className="portfolio-card">
                        <CardHeader className="portfolio-card-header">{portfolio.category}</CardHeader>
                        <CardBody>
                            <CardTitle className="portfolio-card-title">{portfolio.title}</CardTitle>
                            <CardText className="portfolio-card-text">{portfolio.description}</CardText>
                            <p className="portfolio-card-city"> {portfolio.skills} </p>

                            <div className="readMore">
                                <Button style={{ backgroundColor: '#FFC72C', color: '#005587', fontWeight: 'bold' }}><a target="_blank" href={portfolio.link}>github</a></Button> {' '}
                                {isAuthenticated && isSiteOwner &&
                                    <React.Fragment>
                                        <Button onClick={() => Router.pushRoute(`/portfolio/${portfolio._id}/edit`)} color="warning">Edit</Button> {' '}
                                        <Button onClick={() => this.displayDeleteWarning(portfolio._id)} color="danger">Delete</Button>
                                    </React.Fragment>
                                }
                            </div>
                        </CardBody>
                    </Card>


                </React.Fragment>
            )
        })
    }
    render() {

        const { portfolios } = this.props
        const { isAuthenticated, isSiteOwner } = this.props.auth

        console.log(this.props);

        return (
            <BaseLayout headerType="index" title="Seungjin Kim - Portfolois" {...this.props.auth}>
                <BasePage className='portfolio-page cover' title="Portfolios">

                    {isAuthenticated && isSiteOwner &&
                        <Button onClick={() => Router.pushRoute('/portfolioNew')}
                            color="success" className="create-port-btn">Create Portfolio</Button>
                    }
                    <div className="card-container">
                        {this.renderPortfolios(portfolios)}
                    </div>

                    {/*                     <footer>
                        <Container>
                        <Row>
                            <div className="col-lg-8 col-md-10 mx-auto">
                            <ul className="list-inline text-center">
                                <li className="list-inline-item">
                                <a target="_blank" href="https://github.com/vjavmahs1">

                                    <FontAwesomeIcon icon={faGithub} color="white" size="3x" /> 
                                </a>
                                </li>
                            </ul>
                            <p className="copyright">Copyright &copy; Seungjin 2020</p>
                            </div>
                        </Row>
                        </Container>
                    </footer> */}
                </BasePage>
            </BaseLayout>
        )
    }
}

export default Portfolios