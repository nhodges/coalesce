/**
 * Cause.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name : { type: 'string' },

    description : { type: 'string' },

    slug : {
      type: 'string',
      unique: true,
      notRegex: /^[a-f\d]{24}$/i
    }
  }
};
