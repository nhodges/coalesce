/**
 * CauseController
 *
 * @description :: Server-side logic for managing Causes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	findOne: function(req, res) {
    Cause.findOne({
     $or: [
            { '_id'  : req.param('id') },
            { 'slug' : req.param('id') }
          ]
   	}, function(err, cause) {
      if(err)    return res.render('500.ejs');
      if(!cause) return res.render('404.ejs');
      res.render('cause/show.pug', { cause: cause });
    });
  }

};
