import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import {withRouter} from 'next/router'
import axios from 'axios'


class Portfolio extends React.Component {
    static async getInitialProps({query}) {
        let portfolio = {};
        const portfolioId = query.id
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${portfolioId}`) 
            portfolio = response.data
            console.log(response.data);
            
        }   catch(err) {
            console.error(err)
        }
        return { portfolio };
    }

    render() {
        const {portfolio} = this.props
        return (
            <BaseLayout>
                <h1>{portfolio.title}</h1>
                <h2>{portfolio.body}</h2>
                <p>{portfolio.body}</p>

            </BaseLayout>
        )
    }
}

export default withRouter(Portfolio)