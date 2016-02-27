"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("test function compareNum()", function(){
    sinon.spy(console, 'log');

    it("should return 4A0B when the number and position are all same", function(){
      expect('4A0B').to.equal(main.compareNum(5678,5678));
      expect('4A0B').to.equal(main.compareNum(1234,1234));
    });
    it("should return 0A4B when all numbers same and all position different", function(){
      expect('0A4B').to.equal(main.compareNum(5678,8765));
      expect('0A4B').to.equal(main.compareNum(1234,4321));
    });
    it("should return 0A0B when all numbers and position different", function(){
      expect('0A0B').to.equal(main.compareNum(5678,1234));
      expect('0A0B').to.equal(main.compareNum(1234,5678));
    });
    it("should return XAXB when some numbers or position same", function(){
      expect('1A0B').to.equal(main.compareNum(1678,1234));
      expect('2A0B').to.equal(main.compareNum(1234,1278));
      expect('2A1B').to.equal(main.compareNum(1234,1248));
      expect('2A2B').to.equal(main.compareNum(1234,1243));
      expect('0A1B').to.equal(main.compareNum(1234,5671));
      expect('0A2B').to.equal(main.compareNum(1234,5621));
    });

    /*it("测试用例2", function(){

        main();
        var result = _.flatten(console.log.args).join("\n");
        var expect_string = '';

        expect(expect_string).to.equal(result);
    });*/
});
