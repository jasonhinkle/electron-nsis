/**
 * NSIS PACKAGE
 */

// required system components
var fs = require('fs')
//var path = require('path')
//var child = require('child_process')

/**
 *
 */
module.exports.generateInstaller = function() {
  console.log('Run generateInstaller');
};

/**
 *
 */
module.exports.showHelp = function() {
  var usage = fs.readFileSync(__dirname + '/help.txt').toString()
  console.log(usage);
};
