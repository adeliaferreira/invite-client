#!/usr/bin/env node
require('./files-utils')

const yargs = require('yargs');

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

const greeting = `invite-client, ${options.lat}! ${options.long}! ${options.fp}!`;

console.log(greeting);

getCustomerList();
