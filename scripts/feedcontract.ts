/* eslint-disable prettier/prettier */
import {ethers} from "hardhat";
// const hre = require ('hardhat');


async function swap() {

//   const Pricefeed = await ethers.getContractFactory("PriceConverter");
//   const newCon = await Pricefeed.deploy();
//   await newCon.deployed();

  const Swapper = await ethers.getContractFactory("Change");
  const swap = await Swapper.deploy();
  await swap.deployed();

  console.log("Contract:", swap.address);
//   console.log("Contract:", newCon.address);
  
}

swap().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

