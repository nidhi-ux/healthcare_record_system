const HealthcareRecordSystem = artifacts.require("HealthcareRecordSystem");

module.exports = function(deployer) {
  deployer.deploy(HealthcareRecordSystem);
};
