"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("test function compareNum()", function(){
    //sinon.spy(console, 'log');

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

});
describe("test function answerGenerator()", function(){
  it("should return generate a right num when using answerGenerator", function(){
    expect('generate a right num').to.equal(main.testNum(main.answerGenerator()));
    expect('generate a right num').to.equal(main.testNum(main.answerGenerator()));
  });
  it("should return generate a wrong num when inputNum not a num", function(){
    expect('generate a wrong num').to.equal(main.testNum('hello'));
    expect('generate a wrong num').to.equal(main.testNum('world'));
  });
  it("should return generate a wrong num when inputNum not four length", function(){
    expect('generate a wrong num').to.equal(main.testNum(12345));
    expect('generate a wrong num').to.equal(main.testNum(4567889));
  });
  it("should return generate a wrong num when inputNum has repetition", function(){
    expect('generate a wrong num').to.equal(main.testNum(1123));
    expect('generate a wrong num').to.equal(main.testNum(5676));
  });

});

describe("mock test guessGame", function(){
  it("should call with 1234 and print the result", function(){
    sinon.spy(console, 'log');
    //将guessGame()执行结果用‘1234’代替
    sinon.stub(main, 'guessGame').returns('1234');
    main.mockTestGuess();

    expect(main.guessGame).to.have.been.calledWith(1234);

    var result = _.flatten(console.log.args).join("\n");
    var expect_string = "1234";
    expect(expect_string).to.equal(result);

  });

});
