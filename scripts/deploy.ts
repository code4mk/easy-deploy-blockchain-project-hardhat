import { ethers } from "hardhat";

async function main() {
  try {
    const TaxRecord = await ethers.getContractFactory("TaxRecord");
    
    console.log("Estimating gas for deployment...");
    const deploymentTransaction = await TaxRecord.getDeployTransaction();
    const estimatedGas = await ethers.provider.estimateGas(deploymentTransaction);
    console.log(`Estimated gas: ${estimatedGas.toString()}`);

    console.log("Deploying TaxRecord contract...");
    const taxRecord = await TaxRecord.deploy();

    await taxRecord.waitForDeployment();

    console.log("TaxRecord deployed to:", await taxRecord.getAddress());
  } catch (error) {
    console.error("Error during deployment:", error);
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});