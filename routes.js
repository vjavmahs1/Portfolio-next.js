const routes = require('next-routes')

                                                    // Name   Page      Pattern
module.exports = routes()                           // ----   ----      -----
.add('portfolio', '/portfolio/:id')                         // blog   blog      /blog/:slug
.add('portfolioEdit', '/portfolio/:id/edit')                         // blog   blog      /blog/:slug
