// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "./IERC20.sol";
import "./pricefeed.sol";

contract Change{
    

    address base;
    address quote;

      constructor() {
        base = 0x2c1d072e956AFFC0D435Cb7AC38EF18d24d9127c;
        quote = 0xAed0c38402a5d19df6E4c03F4E2DceD6e29c1ee9;
    }


    PriceConverter private p = PriceConverter(0x4bf010f1b9beDA5450a8dD702ED602A104ff65EE);
    address internal tokenA = 0x514910771AF9Ca656af840dff83E8264EcF986CA;
    address internal tokenB = 0x6B175474E89094C44Da98b954EedeAC495271d0F;


 
 event successful(uint new_amount);

 function swapp(address _token1, address _token2, uint amount_sent) external returns(uint){
    uint new_amount;
    require (amount_sent > 0, "please increase the amount you are trying to send");
    IERC20(_token1).transferFrom(msg.sender, address(this), amount_sent);
    new_amount = rev_swapp(amount_sent);
    IERC20(_token2).transfer(msg.sender, new_amount);
    emit successful(new_amount);
    return new_amount;
}

    function rev_swapp(uint amount_sent)internal view returns(uint){
    p.getDerivedPrice(base, quote) * int (amount_sent);
    }

}