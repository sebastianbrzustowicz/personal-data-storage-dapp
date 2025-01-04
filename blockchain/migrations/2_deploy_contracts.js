// migrations/2_deploy_contracts.js
const PersonalData = artifacts.require("PersonalData");

module.exports = function(deployer) {
  deployer.deploy(PersonalData);
};
