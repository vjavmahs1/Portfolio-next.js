import React from 'react'
import Header from '../shared/Header'
import Head from 'next/head';
import { Container, Row } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


const BaseLayout = (props) => {

    const { className, children, isAuthenticated, title } = props;
    const headerType = props.headerType || 'default'
    return (
        <React.Fragment>
            <Head>
                <title>{title}</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta property="og:title" content="" />
                <meta property="og:locale" content="" />
                <meta property="og:url" content="" />
                <meta property="og:type" content="" />
                <meta property="og:description" content="" />
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" />
            </Head>

            <div className="layout-container" >
                <Header className={`port-nav-${headerType}`} isAuthenticated={isAuthenticated} />
                <main className={`cover ${className}`}>
                    <div className="wrapper">
                        {children}
                    </div>
                    <footer>
                            <Container>
                                <Row>
                                    <div className="col-lg-8 col-md-10 mx-auto">
                                        <ul className="list-inline text-center">
                                            <li className="list-inline-item">
                                                <a target="_blank" href="https://github.com/vjavmahs1">
                                                    <FontAwesomeIcon className="icon" icon={faGithub} color="white" size="3x" />
                                                </a>
                                            </li>

                                            <li className="list-inline-item">
                                                <a target="_blank" href="https://www.linkedin.com/in/seungjin-kim-98b08217a/">
                                                    <FontAwesomeIcon className="icon" icon={faLinkedinIn} color="white" size="3x" />
                                                </a>
                                            </li>
                                        </ul>
                                        <p className="copyright">Copyright &copy; Seungjin 2020</p>
                                    </div>
                                </Row>
                            </Container>
                        </footer>
                </main>
            </div>
        </React.Fragment>

    )
}

export default BaseLayout