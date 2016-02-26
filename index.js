/**
 *
 */

// required system components
var fs = require('fs')
var path = require('path')
var child = require('child_process')

// required local libs
var nsis = require('electron-nsis');

// the path to the application folder is the first (unnamed) argument
var args = require('minimist')(process.argv.slice(2), {boolean: ['help', 'verbose']})
args.appPath = args._.shift()


if (!args.appPath || args.help) {
  // show help if requested or if the user didn't enter any args
  nsis.showHelp();
}
else {
  // we're gonna generate an installer...!
  nsis.generateInstaller();
}
