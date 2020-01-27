const express = require('express')
const next = require('next')
const routes = require('../routes')
const mongoose = require('mongoose');

const bodyParser = require('body-parser')
    
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = routes.getRequestHandler(app)
//services
const authService = require('./services/auth')
const config = require('./config')

const portfolioRoutes = require('./routes/portfolio')


const secretData = [
    {
        title: 'SecertData 1',
        description: 'Plans how to build spaceship'
    },
    {
        title: 'SecertData 2',
        description: 'Plans how to build spaceship2'
    }
]


mongoose.connect(config.DB_URI, {useNewUrlParser: true})
  .then(()=> console.log('Database Connected'))
  .catch(err => console.error(err)
)

app.prepare()
.then(() => {
  const server = express()

  server.use(bodyParser.json())
  server.use('/api/v1/portfolios', portfolioRoutes);
    

  server.get('/api/v1/secret', authService.checkJWT, (req, res) => {
    return res.json(secretData);
})

server.get('/api/v1/onlysiteowner', authService.checkJWT, authService.checkRole('siteOwner'), (req, res) => {
  return res.json(secretData);
})

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send({title:  'Unauthorized', detail: 'Unauthorized access'});
    }
  }); 

  const PORT = process.env.PORT || 3000
    
  server.use(handle).listen(PORT, (err) => {
    if (err) throw err
    console.log('> Ready on 3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})