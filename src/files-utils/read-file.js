const fs = require('fs');
const path = require('path');
const constValue = require('./constant');

exports.getCustomerList = (
  filepath = path.join(__dirname, constValue.INPUT_CUSTOMERS_FILE_PATH),
) => {
  const contents = fs.readFileSync(filepath, 'utf8');
  const jsonStringContent = contents.split('\n');
  const clientInformation = jsonStringContent.map((clientInfoJson) => JSON.parse(clientInfoJson));
  console.log(clientInformation);
  return clientInformation;
};
