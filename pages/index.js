import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
//Functional Component
/*
const Index = () => (
    <div>
        <p>Hello Next.js</p>
    </div>
)
*/

//Class Component
class Index extends React.Component {
    render() {
        return (
            <BaseLayout>
                <h1>I am  Index page from class Component</h1>
            </BaseLayout>
        )
    }

}

export default Index