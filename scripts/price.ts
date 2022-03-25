/* eslint-disable prettier/prettier */
import {Signer} from "ethers";
import {ethers} from "hardhat";
const hre = require ('hardhat');


// Link = "0x51ea2D5b8ae4018B105fA9d183aA773eBB576265"
// Dai = "0xc1944b61B50B286A1FB39e5f13dd389BA5765C2D"

const contractAddress = "0x40a42Baf86Fc821f972Ad2aC878729063CeEF403";

const DAIAddress =  "0x6b175474e89094c44da98b954eedeac495271d0f";
const LINKAddress = "0x514910771AF9Ca656af840dff83E8264EcF986CA";

const DAIHolder = "0xC8aeeD725Fb62f8085F333532120926d4FF04e62";


async function prank(x: string) {
    await hre.network.provider.request({
      method: "hardhat_impersonateAccount",
      params: [x],
    });
  }

async function swapTokens() {

    // const Mycontract = await ethers.getContractAt(
    //     "IERC20",
    //     // contract address
    //     contractAddress
    //   );

        // @ts-ignore
        await hre.network.provider.send("hardhat_setBalance", [
          contractAddress,
          "0x100000000000000000000000",
        ]);

  const con = await ethers.getContractAt("IERC20", LINKAddress);
  const token2 = await ethers.getContractAt("IERC20", DAIAddress);
  const market = await ethers.getContractAt("Change", contractAddress);

  await prank(DAIHolder);
  const signer = await ethers.getSigner(DAIHolder);

  const g = await con.connect(signer).balanceOf(market.address);
  console.log(g);

  await con.connect(signer).approve(contractAddress, "10");

  const exchange = await market
    .connect(signer)
    .swapp(DAIAddress, LINKAddress, "10");
  console.log(exchange);

  console.log(await token2.balanceOf(DAIAddress));
  console.log(g);   
}

swapTokens().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

// npx hardhat node --fork https://eth-mainnet.alchemyapi.io/v2/DMh-Tv0Zka2b2eG7oD4dKFJbWd7rG-q9
// npx hardhat run scripts/price.ts --network localhost



