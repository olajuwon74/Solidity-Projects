/* eslint-disable prettier/prettier */
import {Signer} from 'ethers';
import {ethers} from "hardhat";
const hre = require ('hardhat');


// Link = "0x51ea2D5b8ae4018B105fA9d183aA773eBB576265"
// Dai = "0xc1944b61B50B286A1FB39e5f13dd389BA5765C2D"



async function swapTokens() {
    const address1 =  "0x51ea2D5b8ae4018B105fA9d183aA773eBB576265";
    const address2 = "0x40a42Baf86Fc821f972Ad2aC878729063CeEF403";
    const link = await ethers.getContractAt(
        "IERC20",
        // link address
        "0x514910771af9ca656af840dff83e8264ecf986ca"
      );


//     const balance1 = await link.balanceOf(address1);
//     console.log(balance1);

//    // @ts-ignore
//    await hre.network.provider.request({
//     method: "hardhat_impersonateAccount",
//     params: [address1],
//   });

//   const signer: Signer = await ethers.getSigner(address1);
//   await link.connect(signer).transfer(address2, 40);
//   const balanceLink = await link.balanceOf(address1);
//   const balanceAddress2 = await link.balanceOf(address2);
//   console.log(balanceLink);
//   console.log(balanceAddress2);


const swap

      
}

swapTokens().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });