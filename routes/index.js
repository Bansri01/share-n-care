const userRoutes = require('./users');
const diseaseRoutes = require('./diseases')
const forumRoutes = require('./forum')
const path = require("path")

const constructorMethod = (app) => {
  app.use('/', userRoutes);


  // app.use('/profile',profileRoutes)

  app.use('/disease',diseaseRoutes);
  app.use('/forum',forumRoutes);

  app.use('*', (req, res) => {
    res.status(404).sendFile(path.resolve("./error/error"))
  });
};

module.exports = constructorMethod;