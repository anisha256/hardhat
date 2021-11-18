require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const ALCHEMY_API_KEY = "2jHdJLOeEq1yH1Ljgx6Ct_bUse_7Ahgc";
const ROPSTEN_PRIVATE_KEY ="74ac494198df95a2852a424c4c83bea8a5836485feb55db024c89fc971289de2";
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks:{
    ropsten:{
      url:`https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
    }
  },
  etherscan:{
    apiKey: "MV8P5U19SFQ1E8VHVVJ9CDWRXFCK8FBQ6N"
  }
};
