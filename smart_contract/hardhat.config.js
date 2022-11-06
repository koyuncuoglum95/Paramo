require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  networks: {
    matic: {
      url: 'https://rpc-mumbai.maticvigil.com/',
      accounts: ['4b647bb39367dfcaa6b20c3490b5f297668c08a34363a58229351cad11032a79']
    }
  }
};
