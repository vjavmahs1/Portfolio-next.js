const Portfolio = require('../models/portfolio');

exports.getPortfolios = (req, res) => {    
    Portfolio.find({}, (err, allPortfolios) => {
        if(err) {
            return res.status(422).send(err)
        } 
        
        return res.json(allPortfolios)
    })
}

exports.savePortfolio = (req, res) => {

    const portfoliosData = req.body;

    const userId = req.user && req.user.sub;
    console.log(userId);
    
    const portfolio = new Portfolio(portfoliosData);
    portfolio.userId = userId;

    portfolio.save((err, createPortfolio) => {
        if(err) res.status(422).send(err)
        return res.json(createPortfolio);
    })
}

exports.updatePortfolio = (req, res) => {
    const portfolioId = req.params.id;
    const portfolioData = req.body;
    
    Portfolio.findById(portfolioId, (err, foundPortfolio) => {
        if (err) {
            return res.status(422).send(err);
        }
        foundPortfolio.set(portfolioData);
        foundPortfolio.save((err, savedPortfolio) => {
            if(err) {
                return res.status(422).send(err);
            }
            return res.json(savedPortfolio);
        })
    })
} 

exports.deletePortfolio = (req, res) => {
    const portfolioId = req.params.id;
    Portfolio.deleteOne({_id: portfolioId}, (err, deletedPortfolio) => {
        if(err) {
            return res.status(422).send(err);
        }
        return res.json({status: 'Deleted'});
    })
}
exports.getPortfolioById = (req, res) => {
    
    const portfolioId = req.params.id;

    Portfolio.findById(portfolioId)
        .select('-__v')
        .exec((err, foundPortfolio) => {
            if(err) {
                return res.status(422).send(err);
            } 
            return res.json(foundPortfolio);
        })
    
}