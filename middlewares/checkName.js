module.exports = (req, res, next) => {
    if (req.body.name) next()
    else
    next(new Error('Oh my!'))
}