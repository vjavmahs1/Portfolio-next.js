import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'


import withAuth from '../components/hoc/withAuth'
import PortfolioNewForm from '../components/portfolios/PortfolioNewForm'
import {Row, Col} from 'reactstrap'

import {createPortfolio} from '../actions'
import {Router} from '../routes'

const INITIAL_VALUES = { title: '', category: '', description: '' , skills: '', link: ''}


class PortfolioNew extends React.Component {

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
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage className='portfolio-create-page' title="Create New Portfolio">
                    <Row>
                        <Col md="6">
                        <PortfolioNewForm initialValues ={INITIAL_VALUES} onSubmit={this.savePortfolio}/>
                        </Col>
                    </Row>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default withAuth('siteOwner')(PortfolioNew);