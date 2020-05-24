var assert = require('assert');
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
const trazilica = require("../trazilica");

describe('trazilica', function() {
    it('trazilica should be a function', function () {
        trazilica();
    });
    it('I return 3 suggestion', function () {
        let result = trazilica("I")
        assert.deepEqual(result,['I have decided', 'I will try', 'I will just'])
    });
});





 