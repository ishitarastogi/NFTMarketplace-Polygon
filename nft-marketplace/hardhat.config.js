require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
 const privateKey = fs.readFileSync(".secret").toString();

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    
    mumbai: {
       
      url: `https://polygon-mumbai.infura.io/v3/65fe2fc1d0cd42e9a4d4bb83f607d9be`,
      url: "https://rpc-mumbai.matic.today",
      accounts: [privateKey]
    },
    
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
