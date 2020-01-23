import React from 'react'
import Link from 'next/link'
import BasePage from '../components/BasePage'
import BaseLayout from '../components/layouts/BaseLayout'
import { Col, Row, Card, CardHeader, CardBody, CardText, CardTitle, Button} from 'reactstrap'
import {getPortfolios} from '../actions';

import {Router} from '../routes'

class Portfolios extends React.Component {

    static async getInitialProps({req}) {
        let portfolios = [];
        try {
            portfolios = await getPortfolios(req)            
        }   catch(err) {
            console.error(err)
        }
        return { portfolios };
    }

    renderPortfolios(portfolios) {
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
                        <React.Fragment>
                        <Button onClick={() => Router.pushRoute(`/portfolio/${portfolio._id}/edit`)} color="warning">Edit</Button> {' '}
                            <Button color="danger">Delete</Button>
                        </React.Fragment>
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
        console.log(this.props);
    
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage className='portfolio-page' title ="Portfolios">
                    <Button onClick={() => Router.pushRoute('/portfolioNew')}
                             color="success" className="create-port-btn">Create Portfolio</Button>
                    <Row>
                        {this.renderPortfolios(portfolios)}
                    </Row>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default Portfolios