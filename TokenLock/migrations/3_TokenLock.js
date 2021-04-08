const TokenLock = artifacts.require("TokenLock");

module.exports = function (deployer) {
  _token = '0x99b19bCC060e9e955B667BA11fF9c8f830095dA4'; //insert the ID of contract that was deployed from 2_IMT.js
  deployer.deploy(TokenLock, _token);
};