module.exports = (req, res, next) => {
    if (req.body.name === 'Sunit') 
    next(new Error('Oh my!'))
   next()
}