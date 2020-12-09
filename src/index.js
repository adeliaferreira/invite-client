#!/usr/bin/env node
const yargs = require('yargs');
const readFile = require('./files-utils/read-file');

const options = yargs
  .usage('Usage: -lat <latitude>')
  .option('lat', {
    alias: 'latitude', describe: 'office latitude', type: 'string', demandOption: false,
  })
  .usage('Usage: -long <longitude>')
  .option('long', {
    alias: 'longitude', describe: 'office longitude', type: 'string', demandOption: false,
  })
  .usage('Usage: -fp <path>')
  .option('fp', {
    alias: 'path', describe: 'file path', type: 'string', demandOption: false,
  })
  .argv;

readFile.getCustomerList(options.fp);
