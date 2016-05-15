/**
 * UserController.js
 *
 * @module      :: Controller
 * @description :: Provides the base user
 *                 actions used to make waterlock work.
 *
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = require('waterlock').actions.user({
  /* e.g.
    action: function(req, res){

    }
  */

  findOne: function(req, res) {
    User.findOne(req.param('id'), function(err, user) {
      if(err)   return next(err);
      if(!user) return next();
      Auth.findOne(user.auth, function(err, auth) {
        if(err)   return next(err);
        if(!auth) return next();
        res.render('user/profile.pug', { user: user, auth: auth });
      });
    });
  },

  settings: function(req, res) {

  }
});
