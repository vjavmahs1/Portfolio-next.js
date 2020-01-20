const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');


//Middelware
exports.checkJWT = jwt({ 
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 15,
        jwksUri: 'https://dev-35qetqbm.auth0.com/.well-known/jwks.json',
      }),
    audience: 'Gfu07rGdvmOhNd29iUujIZO3lheS72bg',
    issuer: 'https://dev-35qetqbm.auth0.com/',
    algorithms: ['RS256'] 
})