const fs = require('fs');
const path = require('path');
const constValue = require('./constant');

exports.writeOutputFile = (
  clientToInvite, filepath = path.join(__dirname, constValue.OUTPUT_CUSTOMERS_IN_RANGE),
) => {
  let fileContent = '';
  clientToInvite.forEach((client) => {
    fileContent += `${JSON.stringify(client)}\n`;
  });
  fs.writeFileSync(filepath, fileContent);
  // eslint-disable-next-line no-console
  console.log(`Your client list to invite is also available on ${filepath}`);
};
