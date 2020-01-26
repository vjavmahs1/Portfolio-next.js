import React from 'react'
import Link from 'next/link'
import BasePage from '../components/BasePage'
import BaseLayout from '../components/layouts/BaseLayout'
import { Col, Row, Card, CardHeader, CardBody, CardText, CardTitle, Button} from 'reactstrap'
import {getPortfolios, deletePortfolio} from '../actions';

import {Router} from '../routes'

class Portfolios extends React.Component {

    constructor(props) {
        super()

        this.deletePortfolio = this.deletePortfolio.bind(this)
    }

    static async getInitialProps({req}) {
        let portfolios = [];
        try {
            portfolios = await getPortfolios(req)            
        }   catch(err) {
            console.error(err)
        }
        return { portfolios };
    }

    displayDeleteWarning(portfolioId){
        const isConfirm = confirm('Are you sure you want to delete this portfolio??')

        if(isConfirm) {
            this.deletePortfolio(portfolioId)
        }
    }

    deletePortfolio(portfolioId) {
        deletePortfolio(portfolioId).then(()=> {
            Router.pushRoute('/portfolios')
        })
        .catch(err => console.error(err)
        )
    }

    renderPortfolios(portfolios) {
        const {isAuthenticated, isSiteOwner} = this.props.auth
        
        return portfolios.map((portfolio, index) => {
            return (
                <Col md="4">
                <React.Fragment key={index}>
                    <span>
                    <Card className="portfolio-card">
                        <CardHeader className="portfolio-card-header">{portfolio.title}</CardHeader>
                        <CardBody>
                        <p className="portfolio-card-city"> {portfolio.skills} </p>
                        <CardTitle className="portfolio-card-title">{portfolio.title}</CardTitle>
                        <CardText className="portfolio-card-text">{portfolio.description} {index}</CardText>
                        <div className="readMore">
                        <Button onClick={() => Router.pushRoute(`/portfolio/${portfolio._id}/edit`)} color="warning">Edit</Button> {' '}

                        { isAuthenticated && isSiteOwner&&
                        <React.Fragment>

                        <Button onClick={() => Router.pushRoute(`/portfolio/${portfolio._id}/edit`)} color="success">Github</Button> {' '}
                            <Button onClick={() => this.displayDeleteWarning(portfolio._id)} color="danger">Delete</Button>
                        </React.Fragment>
                        }
                        </div>
                        </CardBody>

                    </Card>
                    </span>
                </React.Fragment>
                </Col>
            )
        })
    } 
    render() {
        
        const {portfolios}  = this.props    
        const {isAuthenticated, isSiteOwner} = this.props.auth

        console.log(this.props);
    
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage className='portfolio-page' title ="Portfolios">
                    { isAuthenticated && isSiteOwner &&
                    <Button onClick={() => Router.pushRoute('/portfolioNew')}
                             color="success" className="create-port-btn">Create Portfolio</Button>
                    }
                    <Row>
                        {this.renderPortfolios(portfolios)}
                    </Row>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default Portfolios