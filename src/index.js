#!/usr/bin/env node
const yargs = require('yargs');
const readFile = require('./files-utils/read-file');
const writeFile = require('./files-utils/write-file');
const distanceCalculator = require('./find-distance/find-distance');

const options = yargs
  .usage('Usage: -lat <latitude>')
  .option('lat', {
    alias: 'latitude', describe: 'office latitude', type: 'number', demandOption: false,
  })
  .usage('Usage: -long <longitude>')
  .option('long', {
    alias: 'longitude', describe: 'office longitude', type: 'number', demandOption: false,
  })
  .usage('Usage: -fp <path>')
  .option('fp', {
    alias: 'path', describe: 'file path with client list', type: 'string', demandOption: false,
  })
  .usage('Usage: -range <range>')
  .option('range', {
    alias: 'r', describe: 'use a range from office different then 100 km', type: 'number', demandOption: false,
  })
  .argv;

const clientList = readFile.getCustomerList(options.fp);
const clientToInvite = distanceCalculator.getCustomersInsideRange(
  clientList,
  options.lat,
  options.long,
  options.range,
);
// eslint-disable-next-line no-console
console.log('Your client list to invite \n');
// eslint-disable-next-line no-console
console.table(clientToInvite);

writeFile.writeOutputFile(clientToInvite);
