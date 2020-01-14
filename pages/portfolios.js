import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import axios from 'axios'
import Link from 'next/link'

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
        return posts.map((post) => {
            return (
            <li>
                <Link href={`/portfolio?title=${post.title}`}>
                    <a>{post.title}</a>
                </Link> 
            </li>
            )
        })
    }

    render() {
        const {posts}  = this.props        
        return (
            <BaseLayout>
                <h1>I am Portfolios page</h1>
                <ul>
                    {this.renderPosts(posts)}
                </ul>
            </BaseLayout>
        )
    }
}

export default Portfolios