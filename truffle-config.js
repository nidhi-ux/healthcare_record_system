require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 7545,        // Standard Ethereum port (default: none)
      network_id: "*",   // Any network (default: none)
    },

  },
  mocha: {
    // Configure Mocha test framework
  },
  compilers: {
    solc: {
      version: "0.8.7",    // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
};