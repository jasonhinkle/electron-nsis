#!/usr/bin/env node

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
  var usage = fs.readFileSync(__dirname + '/electron-nsis-usage.txt').toString()
  console.log(usage);
};
