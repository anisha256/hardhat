const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log(
        "Deploying contracts with the accout:",
        deployer.address
    );
       
 
    console.log("Account balance:", (await deployer.getBalance()).toString());
    const SahayogiToken = await hre.ethers.getContractFactory("SahayogiToken");
    const sahayogitoken = await SahayogiToken.deploy();


    console.log("SahayogiToken address:", sahayogitoken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });