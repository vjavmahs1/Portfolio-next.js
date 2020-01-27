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

exports.checkRole = role => (req, res, next) => {
  const user = req.user
    
  if(user && (user[process.env.NAMESPACE + '/roles'] === role)) {
    next()
  } else {
    return res.status(401).send({title: 'Not Authorized', description: 'You are not authorized to access this data'})
  } 
}


  
