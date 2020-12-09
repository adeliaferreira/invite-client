import { INPUT_CUSTOMERS_FILE_PATH } from './constant';

var fs = require('fs');

export default function getCustomerList(filepath = INPUT_CUSTOMERS_FILE_PATH) {
 
    const contents = fs.readFileSync(filepath, 'utf8');
    console.log(contents);
 
    return contents;
}
