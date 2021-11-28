const userRoutes = require('./users');
const path = require("path")

const constructorMethod = (app) => {
  app.use('/', userRoutes);

  // app.use('/profile',profileRoutes)

  app.use('*', (req, res) => {
    res.status(404).sendFile(path.resolve("./static/Error404.html"))
  });
};

module.exports = constructorMethod;