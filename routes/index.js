const userRoutes = require('./users');
const path = require("path")
// const privateRoutes = require('./private');

const constructorMethod = (app) => {
  app.use('/', userRoutes);
  // app.use('/private', privateRoutes);

  app.use('*', (req, res) => {
    res.status(404).sendFile(path.resolve("./static/Error404.html"))
  });
};

module.exports = constructorMethod;