/**
 * OrganizationController
 *
 * @description :: Server-side logic for managing Organizations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var ObjectId = require('mongodb').ObjectID;

module.exports = {

	findOne: function(req, res) {
		var id = req.param('id');
    Organization.findOne({
      $or: [
						 { '_id'  : id.match(/^[0-9a-fA-F]{24}$/) ? ObjectId(id) : id },
						 { 'slug' : id }
           ]
   	}, function(err, organization) {
      if(err)           return res.render('500.ejs');
      if(!organization) return res.render('404.ejs');
      res.render('organization/show.pug', { organization: organization });
    });
  }

};
