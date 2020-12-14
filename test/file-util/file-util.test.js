const chai = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const expect = chai.expect;
const assert = chai.assert;
const readFile = require('../../src/files-utils/read-file');
const writeFile = require('../../src/files-utils/write-file');
const utils = require('../utils');

describe('Test Read file module', ()=> {
    it('Should return default value to application file',()=> {
        expect(readFile.getCustomerList()).to.have.same.deep.members(utils.mockedClientList);
    })

    it('Should get an error to invalid path', () => {
      assert.throws(()=>{readFile.getCustomerList('invalid/path')}, Error, 'Cannot retrive file from dir selected');
    })
});

describe('Test Write file module', ()=>{
  beforeEach(() => {
    writeFileSync = sinon.stub(fs, 'writeFileSync');
  });
  afterEach(() => {
    writeFileSync.restore();
  });

  it('Shold call write method', ()=>{
    writeFile.writeOutputFile(utils.mockedClientList);
    expect(writeFileSync.calledOnce).to.be.true;
  }); 
})