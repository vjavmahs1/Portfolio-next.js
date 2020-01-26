import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import {Row, Col} from 'reactstrap'



class CV extends React.Component {
    render() {
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage title="Take a look at my CV" className="cv-page">
                    <Row>
                        <Col md ={{size: 8, offset:2}}>
                            <div className ="cv-title">
                                <a download='Resume.pdf' className="btn btn-success" href="/static/Resume.pdf">
                                    Download
                                </a>
                            </div>
                        <iframe style={{width: '100%', height:'800px'}} src="/static/Resume.pdf">

                        </iframe>

                        </Col>
                    </Row>

                </BasePage>

            </BaseLayout>
        )
    }
}

export default CV