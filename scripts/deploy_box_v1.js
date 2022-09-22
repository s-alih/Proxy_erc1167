const { hardhat, upgrades } = require("hardhat");

async function main() {
  // Getting contract instances
  const Box = await ethers.getContractFactory("Box");

  // proxy setup
  const box = await upgrades.deployProxy(Box, [42], {
    initializer: "initialize",
  });

  await box.deployed();

  console.log("Box deployed to:", box.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
