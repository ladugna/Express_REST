
module.exports = (req, res, next) => {
    try {
        res.set({ 'name': 'lammii', 'x-powered-by': 'MIU' })
        next()
    } catch (e) {
        next(e)
    }
}