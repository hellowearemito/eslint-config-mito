/* eslint-disable */
var fs = require('fs');
var stats;

try {
  stats = fs.lstatSync('./node_modules/eslint-config-mito');

  if (stats.isSymbolicLink()) {
    process.exit(0);
  } else {
    process.exit(1);
  }
} catch (e) {
  fs.symlinkSync('..', './node_modules/eslint-config-mito');
}
