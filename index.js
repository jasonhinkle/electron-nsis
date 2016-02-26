/**
 *
 */

// required system components
var fs = require('fs')
var path = require('path')
var child = require('child_process')

// required local libs
var nsis = require('./src/electron-nsis');
var args = require('minimist')(process.argv.slice(2), {boolean: ['help', 'verbose']});

// the generator command is the first (unnamed) argument
args.command = args._.shift();

if (args.command == 'generate') {
  // we're gonna generate an installer...!
  nsis.generateInstaller(args);
}
else {
  // show help if requested or if the user didn't enter any args
  nsis.showHelp();
}
