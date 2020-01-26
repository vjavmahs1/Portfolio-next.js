import React from 'react'
import Header from '../shared/Header'
import Head from 'next/head';



const BaseLayout = (props) => {

    const { className, children, isAuthenticated, title} = props;
    const headerType = props.headerType || 'default'
    return (
        <React.Fragment>
        <Head>
            <title>{title}</title>
            <meta name="description" content="" />
            <meta name="keywords" content=""/>
            <meta property="og:title" content="" />
            <meta property="og:locale" content="" />
            <meta property="og:url" content=""/>
            <meta property="og:type" content=""/>
            <meta property="og:description" content=""/>
            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet"/>
            <link rel="icon" type="image/ico" href="/static/favicon.ico"/>
        </Head>

        <div className="layout-container" >
            <Header className={`port-nav-${headerType}`} isAuthenticated = {isAuthenticated} />
        <main className={`cover ${className}`}>
            <div className="wrapper">
            {children}
            </div>
        </main>
        </div>
        </React.Fragment>

    )
}

export default BaseLayout