var express = require('express');

module.exports.http = {
  customMiddleware: function (app) {
    if(process.env.NODE_ENV === 'development') {
      app.locals.pretty = true;
    }
    app.use('/node_modules', express.static(process.cwd() + '/node_modules'));
  }
};
