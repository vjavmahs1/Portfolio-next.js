import React from 'react'
import Link from 'next/link'
import BasePage from '../components/BasePage'
import BaseLayout from '../components/layouts/BaseLayout'
import { Col, Row, Card, CardHeader, CardBody, CardText, CardTitle} from 'reactstrap'
import {getPortfolios} from '../actions';


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
                        <div className="readMore"> </div>
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
                    <Row>
                        {this.renderPortfolios(portfolios)}
                    </Row>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default Portfolios