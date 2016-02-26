#!/usr/bin/env node

// required system components
var fs = require('fs')
var path = require('path')
var child = require('child_process')

// required local libs


/**
 *
 */
module.exports.generateInstaller = function(args) {
  console.log('Run generateInstaller');
};

/**
 *
 */
module.exports.showHelp = function() {
  var usage = fs.readFileSync(__dirname + '/electron-nsis-usage.txt').toString()
  console.log(usage);
};
