import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'

import { Button } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


//Class Component
class Index extends React.Component {
    
    render() {
        console.log('render');
        return (
            <BaseLayout>
            <div className="container">
                <Button color="danger">danger!</Button>
            </div>
            </BaseLayout>
        )
    }

}

export default Index