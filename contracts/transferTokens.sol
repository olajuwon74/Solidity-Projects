// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "/contracts/pricefeedTwo.sol";

contract Change{

  function deposit(address in, address out, uint amount, uint decimals) public returns(balance uint){

      require(amount > 0, "Input a higher value");
      balance += amount;
      return (swapTokens(in, out, amount, decimal))

  }
}