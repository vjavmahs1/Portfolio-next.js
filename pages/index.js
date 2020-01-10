import React from 'react'
import Header from '../components/shared/Header'
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
            <div>
            <h1>I am  Index page from class Component</h1>
            <Header />                
            </div>

        )
    }

}

export default Index