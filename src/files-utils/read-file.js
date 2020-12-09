const fs = require('fs');
const constValue = require('./constant');

exports.getCustomerList = function (filepath = constValue.INPUT_CUSTOMERS_FILE_PATH) {
  const contents = fs.readFileSync(filepath, 'utf8');
  console.log(contents);

  return contents;
};
