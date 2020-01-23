import React from 'react';
import App, { Container } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss'
import auth0 from '../services/auth0'

const namespace = 'http://localhost:3000'
export default class MyApp extends App {

  static async getInitialProps({ Component, router , ctx}) {
    let pageProps = {};

    
    const user = process.browser ? await auth0.clientAuth() : await auth0.serverAuth(ctx.req);


    if(Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    const isSiteOwner = user && user[namespace + '/roles'] === 'siteOwner'


    const auth = {user, isAuthenticated: !!user, isSiteOwner}


    return {pageProps, auth }


  }

  render() {
    const { Component, pageProps, auth} = this.props

    return (
      <Container>
        <Component {...pageProps} auth={auth}/>
      </Container>
    )
  }
}