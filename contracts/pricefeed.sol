// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract PriceConsumerV3 {

    //   int reverseAmount;

    AggregatorV3Interface internal priceFeed;
    /**
     * Network: Kovan
     * Aggregator: DAI/USD
     * Address: 0x9326BFA02ADD2366b30bacB125260Af641031331
     */
    constructor() {
        priceFeed = AggregatorV3Interface(0x0bF499444525a23E7Bb61997539725cA2e928138);
    }

    /**
     * Returns the latest price
     */
    function getLatestPrice() public view returns (int) {
        (
            /*uint80 roundID*/,
            int price,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint80 answeredInRound*/
        ) = priceFeed.latestRoundData();
        return (price);
    }

    function swapIt(int amountUSDT) public view returns(int reverseAmount){
       reverseAmount = (amountUSDT * (getLatestPrice()/10**8));
        return reverseAmount;
    }
}
