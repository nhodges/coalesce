/**
 * UserController.js
 *
 * @module      :: Controller
 * @description :: Provides the base user
 *                 actions used to make waterlock work.
 *
 * @docs        :: http://waterlock.ninja/documentation
 */

var ObjectId = require('mongodb').ObjectID;

module.exports = require('waterlock').actions.user({
  /* e.g.
    action: function(req, res){

    }
  */

  findOne: function(req, res) {
    var id = req.param('id');
    User.findOne({
      $or: [
             { _id  : id.match(/^[0-9a-fA-F]{24}$/) ? ObjectId(id) : id },
             { slug : id }
           ]
   	}, function(err, user) {
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
