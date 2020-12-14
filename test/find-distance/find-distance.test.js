const chai = require('chai');
const expect = chai.expect;
const distance = require('../../src/find-distance/find-distance');
const utils = require('../utils');

describe('Get Invited list with default parameters', ()=> {
    it('Should return default value with 14 clients',()=> {
        expect(distance.getCustomersInsideRange(utils.mockedClientList)).to.have.same.deep.members(utils.mockedClientToInviteDefaultParameters);
        expect(distance.getCustomersInsideRange(utils.mockedClientList).length).equals(14);
    })
});

describe('Get Invited list with different range parameters', ()=> {
    it('range equal 45 KM',()=> {
        expect(distance.getCustomersInsideRange(utils.mockedClientList, undefined, undefined, 45)).to.have.same.deep.members(utils.mockedClientToInvite45KM);
        expect(distance.getCustomersInsideRange(utils.mockedClientList, undefined, undefined, 45).length).equals(6);
    })

    it('range equal 200 KM',()=> {
        expect(distance.getCustomersInsideRange(utils.mockedClientList, undefined, undefined, 200)).to.have.same.deep.members(utils.mockedClientToInvite200KM);
        expect(distance.getCustomersInsideRange(utils.mockedClientList, undefined, undefined, 200).length).equals(27);
    })
});

describe('Get Invited list with different coordinates parameters', ()=> {
    it('Different coordinates and Default range',()=> {
        expect(distance.getCustomersInsideRange(utils.mockedClientList, 54.180238, -5.920898)).to.have.same.deep.members(utils.mockedClientToDifferentCoordinatesDefault);
        expect(distance.getCustomersInsideRange(utils.mockedClientList,  54.180238, -5.920898).length).equals(4);
    })

    it('Different coordinates and 185KM as range',()=> {
        expect(distance.getCustomersInsideRange(utils.mockedClientList, 54.180238, -5.920898, 185)).to.have.same.deep.members(utils.mockedClientToDifferentCoordinates185KMRange);
        expect(distance.getCustomersInsideRange(utils.mockedClientList, 54.180238, -5.920898, 185).length).equals(18);
    })
});

describe('Empty/invalid array as client list', ()=> {
    it('Empty array',()=> {
        expect(distance.getCustomersInsideRange([])).to.have.same.deep.members([]);
        expect(distance.getCustomersInsideRange([]).length).equals(0);
    })

    it('undefined',()=> {
        expect(distance.getCustomersInsideRange(undefined)).to.have.same.deep.members([]);
        expect(distance.getCustomersInsideRange(undefined).length).equals(0);
    })
});