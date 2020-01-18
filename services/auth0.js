import auth0 from 'auth0-js';
import Cookies from 'js-cookie';
import axios from 'axios'
import jwt from 'jsonwebtoken';

class Auth0 {

    constructor() {
        this.auth0 = new auth0.WebAuth({
            domain: 'dev-35qetqbm.auth0.com',
            clientID: 'Gfu07rGdvmOhNd29iUujIZO3lheS72bg',
            redirectUri: 'http://localhost:3000/callback',
            responseType: 'token id_token',
            scope: 'openid profile'
        });

        this.login = this.login.bind(this)
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.logout = this.logout.bind(this)
    }

    handleAuthentication() {
        return new Promise((resolve, reject) => {
            this.auth0.parseHash((err, authResult) => {
                if (authResult && authResult.accessToken && authResult.idToken) {
                    this.setSession(authResult);
                    resolve();
                }else if (err) {
                    reject(err);
                    console.log(err);
                }
            });
        })
    }
 
    setSession(authResult) {

        // Save tokens!!!
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());

        Cookies.set('user', authResult.idTokenPayload);
        Cookies.set('jwt', authResult.idToken);
        Cookies.set('expiresAt', expiresAt);


    }

    login() {
        this.auth0.authorize();
    }

    logout() {
        Cookies.remove('user');
        Cookies.remove('jwt');
        Cookies.remove('expiresAt');

        this.auth0.logout({
            returnTo: '',
            clientID: 'Gfu07rGdvmOhNd29iUujIZO3lheS72bg'
        })
    }


    async getJWKS() {
        const res = await axios.get('https://dev-35qetqbm.auth0.com/.well-known/jwks.json')
        const jwks = res.data;
        return jwks;
    }
    async verifyToken(token) {
        if (token) {
          const decodedToken = jwt.decode(token, { complete: true});
     
          if (!decodedToken) { return undefined; }
     
          const jwks = await this.getJWKS();
          const jwk = jwks.keys[0];
     
          // BUILD CERTIFICATE
          let cert = jwk.x5c[0];
          cert = cert.match(/.{1,64}/g).join('\n');
          cert = `-----BEGIN CERTIFICATE-----\n${cert}\n-----END CERTIFICATE-----\n`;
     
          if (jwk.kid === decodedToken.header.kid) {
            try {
              const verifiedToken = jwt.verify(token, cert);
              const expiresAt = verifiedToken.exp * 1000;
     
              return (verifiedToken && new Date().getTime() < expiresAt) ? verifiedToken : undefined;
            } catch(err) {
              return undefined;
            }
          }
        }
     
        return undefined;
      }



    async clientAuth() {
        const token = Cookies.getJSON('jwt');
        const verifiedToken = await this.verifyToken(token)
        return verifiedToken;
    }

    async serverAuth(req){
        if (req.headers.cookie) {
           const tokenCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='));
     
     
           if (!tokenCookie) { return undefined};
           const token = tokenCookie.split('=')[1];
           const verifiedToken = await this.verifyToken(token)
     
/*           const cookies = req.headers.cookie;
          console.log(cookies);
          const splitedCookies = cookies.split(';');
          console.log(splitedCookies);
          const tokenCookie = splitedCookies.find(c => c.trim().startsWith('jwt='));
          console.log(tokenCookie);
          if (!tokenCookie) { return undefined};
          const expiresAtArray = tokenCookie.split('=');
          console.log(expiresAtArray);
          const expiresAt = expiresAtArray[1];
          console.log(expiresAt) */
     
          return verifiedToken;
        }
        return undefined;
      }
}

const auth0Client = new Auth0();

export default auth0Client;