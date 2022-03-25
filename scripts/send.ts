/* eslint-disable prettier/prettier */
import {Signer} from "ethers";
import {ethers} from "hardhat";

async function sendMoney(){


    const LinkHolder = "0x51ea2D5b8ae4018B105fA9d183aA773eBB576265";
    const swapContract = "0x40a42Baf86Fc821f972Ad2aC878729063CeEF403";
    const Link = await ethers.getContractAt(
        "IERC20",
        // link address
        "0x514910771af9ca656af840dff83e8264ecf986ca"
    );

    
// @ts-ignore
await hre.network.provider.request({
    method: "hardhat_impersonateAccount",
    params: [LinkHolder],
  });

const startBalance = await Link.balanceOf(LinkHolder);
console.log(startBalance);

const signer: Signer = await ethers.getSigner(LinkHolder);
await Link.connect(signer).transfer(swapContract, 40);
const bal = await Link.balanceOf(LinkHolder);
const balran = await Link.balanceOf(swapContract);
console.log(balran);
console.log(bal);
}

sendMoney().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  