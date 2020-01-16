import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import BasePage from '../components/BasePage'
import BaseLayout from '../components/layouts/BaseLayout'


class Portfolios extends React.Component {
    static async getInitialProps() {
        let posts = [];
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts') 
            posts = response.data
            console.log(response.data);
            
        }   catch(err) {
            console.error(err)
        }
        return { posts: posts.splice(0,10) };
    }

    renderPosts(posts) {
        return posts.map((post, index) => {
            return (
            <li key={index }>
                <Link as={`/portfolio/${post.id}`} href={"/portfolio/[id]"}>
                    <a>{post.title}</a>
                </Link> 
            </li>
            )
        })
    }

    render() {
        const {posts}  = this.props        
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage>
                    <h1>I am Portfolios page</h1>
                    <ul>
                        {this.renderPosts(posts)}
                    </ul>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default Portfolios