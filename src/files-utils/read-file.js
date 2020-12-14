const fs = require('fs');
const path = require('path');
const constValue = require('./constant');

exports.getCustomerList = (
  filepath = path.join(__dirname, constValue.INPUT_CUSTOMERS_FILE_PATH),
) => {
  try {
    const contents = fs.readFileSync(filepath, 'utf8');
    const jsonStringContent = contents.split('\n');
    const clientInformation = jsonStringContent.map((clientInfoJson) => JSON.parse(clientInfoJson));
    return clientInformation;
  } catch (error) {
    throw new Error('Cannot retrive file from dir selected');
  }
};
