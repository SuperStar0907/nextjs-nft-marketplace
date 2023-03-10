/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")
console.log(process.env.privateKey)
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 5
    },
//  unused configuration commented out for now
 mumbai: {
   url: "https://rpc-mumbai.maticvigil.com/v1/f25f5f243541031184d4dcbdabf5da417594a7a3",
   accounts: ["0x689af8efa8c651a91ad287602527f3af2fe9f6501a7ac4b061667b5a93e037fd"]
 }
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
}