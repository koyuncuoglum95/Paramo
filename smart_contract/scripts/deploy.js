const main = async () => {
  const ParamoFactory = await hre.ethers.getContractFactory("Paramo");
  const ParamoContract = await ParamoFactory.deploy('Paramo','PRM','https://gateway.pinata.cloud/ipfs/QmbH839A8X474iwXCVxcCDMcdkNS94ZesUEN6sFLZbKxvR', 10000, 100);

  const NFTMarketFactory = await hre.ethers.getContractFactory("NFTMarketPlace");
  const NFTMarketContract = await NFTMarketFactory.deploy();

  await ParamoContract.deployed();

  console.log("Paramo NFT address: ", ParamoContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();