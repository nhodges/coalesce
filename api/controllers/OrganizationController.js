/**
 * OrganizationController
 *
 * @description :: Server-side logic for managing Organizations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	findOne: function(req, res) {
    Organization.findOne({
     $or: [
            { '_id'  : req.param('id') },
            { 'slug' : req.param('id') }
          ]
   	}, function(err, organization) {
      if(err)           return res.render('500.ejs');
      if(!organization) return res.render('404.ejs');
      res.render('organization/show.pug', { organization: organization });
    });
  }

};
