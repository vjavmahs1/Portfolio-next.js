const prod = process.env.NODE_ENV === 'production'

module.exports = {
    'process.env.BASE_URL' : prod ? 'https://seungjin-portfolio.herokuapp.com' : 'http://localhost:3000',
    'process.env.NAMESPACE' : 'https://seungjin-portfolio.herokuapp.com',
    'process.env_CLIENT_ID' : 'Gfu07rGdvmOhNd29iUujIZO3lheS72bg'
}