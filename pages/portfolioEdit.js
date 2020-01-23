import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'


import withAuth from '../components/hoc/withAuth'
import PortfolioNewForm from '../components/portfolios/PortfolioNewForm'
import {Row, Col} from 'reactstrap'

import {createPortfolio, getPortfolioById} from '../actions'
import {Router} from '../routes'

class PortfolioEdit extends React.Component {

    static async getInitialProps({query}) {
        let portfolio = {};

        try{    
            portfolio = await getPortfolioById(query.id)
        } catch(err){
            console.error(err);
            
        }
        console.log(portfolio);
        return { portfolio }
    }

    constructor(props){
        super();
        this.savePortfolio = this.savePortfolio.bind(this)

    } 


    savePortfolio(data) {
        createPortfolio(data)
        .then((portfolio) => {
            Router.pushRoute('/portfolios');
        })
        .catch((err)=> {console.error(err)
        })
    }
    render() {        
        const {portfolio} = this.props
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage className='portfolio-create-page' title="Create New Portfolio">
                    <Row>
                        <Col md="6">
                        <PortfolioNewForm initialValues={portfolio} onSubmit={this.savePortfolio}/>
                        </Col>
                    </Row>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default withAuth('siteOwner')(PortfolioEdit);