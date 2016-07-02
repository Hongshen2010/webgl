var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: '3d-editor'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/3d-editor-development'
  },

  test: {
    root: rootPath,
    app: {
      name: '3d-editor'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/3d-editor-test'
  },

  production: {
    root: rootPath,
    app: {
      name: '3d-editor'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/3d-editor-production'
  }
};

module.exports = config[env];
