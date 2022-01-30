var assert = require('assert')

const calculator = require('../app/calculator')

describe('Calculator Test Cases', function () {    
    it('add(5,2) expected result 7', function () {
        assert.equal(calculator.add(5,2), 7)
    })
    it('add(5,2) expected result 9', function () {
        assert.equal(calculator.add(5,2), 9)
    })
   
    it('sub(5,2) expected result 3', function () {
        assert.equal(calculator.sub(5,2), 3)
    })
    it('sub(5,2) expected result 7', function () {
        assert.equal(calculator.sub(5,2), 7);
    })
    
    it('mul(5,2) expected result 10', function () {
        assert.equal(calculator.mul(5,2), 10)
    })
    it('mul(5,2) expected result 14', function () {
        assert.equal(calculator.mul(5,2), 14)
    })
    
    it('div(10,2) expected result 5', function () {
        assert.equal(calculator.div(10,2), 5)
    })
    it('div(10,2) expected result 4', function () {
        assert.equal(calculator.div(10,2), 4)
    })
})