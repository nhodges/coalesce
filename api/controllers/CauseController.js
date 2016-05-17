/**
 * CauseController
 *
 * @description :: Server-side logic for managing Causes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var ObjectId = require('mongodb').ObjectID;

module.exports = {

	findOne: function(req, res) {
		var id = req.param('id');
    Cause.findOne({
      $or: [
             { '_id'  : id.match(/^[0-9a-fA-F]{24}$/) ? ObjectId(id) : id },
             { 'slug' : id }
           ]
   	}, function(err, cause) {
      if(err)    return res.render('500.ejs');
      if(!cause) return res.render('404.ejs');
			Organization.find({
				causes: cause.slug
			}, function(err, organizations) {
	      if(err) return res.render('500.ejs');
				res.render('cause/show.pug', { cause: cause, organizations: organizations });
			});
    });
  }

};
