const TokenLock = artifacts.require("TokenLock");

module.exports = function (deployer) {
  _token = '0x20a830C126cB9846a8a239581a5F8a61efa872cB'; //insert the ID of contract that was deployed from 2_IMT.js
  deployer.deploy(TokenLock, _token);
};