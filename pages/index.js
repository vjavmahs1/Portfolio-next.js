import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import axios from 'axios'

//Class Component
class Index extends React.Component {
    static async getInitialProps() {
        let userData = {};
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1') 
            userData = response.data
            console.log(response.data);
            
        }   catch(err) {
            console.error(err)
        }

  

        return {initialData: [1,2,3,4], userData };
    }

    
    constructor(){
        super();

        this.state = {
            title: 'I am Index Page'
        }
        console.log('constructor');
    }

    componentDidMount(){
        console.log('componentDidMount');

    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');

    }

    updateTitle () {
        this.setState({title: 'I am updated'})
    }

    render() {
        console.log('render');
        const {userData, initialData} = this.props;
        const {title} = this.state;
        return (
            <BaseLayout>
                <h1>I am  Index page from class Component</h1>
                <h2>{title}</h2>
                <h2>{userData.title}</h2>

                <button onClick={() => this.updateTitle()}> Change Title </button>
            </BaseLayout>
        )
    }

}

export default Index