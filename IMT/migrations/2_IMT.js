const IMT = artifacts.require("ERC20");

module.exports = function (deployer) {
	const _name = "Integrated Music Token";
	const _symbol = "IMT";
  deployer.deploy(IMT, _name, _symbol);
};