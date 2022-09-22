const { hardhat, upgrades } = require("hardhat");

// change this with your proxy address!
const PROXY = "0xc2a94D2450B8e1CA4E64953873fCD6656D2dB318";

async function main() {
  // Get contract instances
  const BoxV2 = await ethers.getContractFactory("BoxV2");

  //  upgarde proxy setup
  const boxv2 = await upgrades.upgradeProxy(PROXY, BoxV2);

  console.log("Box deployed to:", boxv2.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
