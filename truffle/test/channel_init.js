/**
Deploy the payment channels contract and test them out
*/
var Promise = require('bluebird').Promise;
var jsonfile = Promise.promisifyAll(require('jsonfile'));
var ethutil = require('ethereumjs-util');
var config = require('../../config.js');

var Channels = artifacts.require('./Channels.sol');
let ftest = `${process.cwd()}/../test.json`;

var keys = require(`${process.cwd()}/../keys.json`);
var test = require(ftest);

let channels;
let initial_1_balance;

contract('Channels', function(accounts) {
  let token;

  it('Should deploy Channels contract and get its address', function() {
    return Channels.deployed()
    .then(function(instance) {
      assert.notEqual(instance.address, null);
      channels = instance;
      test.channels_addr = instance.address;
    })
  });

  it('Should save data.json', function() {
    jsonfile.writeFileAsync(ftest, test, { spaces: 2 })
  })

})
