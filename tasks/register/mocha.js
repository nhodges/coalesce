/**
 * `mocha`
 *
 * ---------------------------------------------------------------
 *
 * Expose grunt task in CLI
 *
 */
module.exports = function(grunt) {
  grunt.registerTask('test', ['mochaTest']);
};
