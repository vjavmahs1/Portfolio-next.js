const Portfolio = require('../models/portfolio');

exports.getPortfolios = (req, res) => {
    Portfolio.find({}, (err, allPortfolios) => {
        if(err) return res.status(422).send(err)

        return res.json(allPortfolios)
    })
}

exports.savePortfolio = (req, res) => {
    const portfoliosData = req.body;
    const userId = req.user && req.user.sub;
    const portfolio = new Portfolio(portfoliosData);
    portfolio.userId = userId;

    portfolio.save((err, createPortfolio) => {
        if(err) res.status(422).send(err)
        return res.json(createPortfolio);
    })
}