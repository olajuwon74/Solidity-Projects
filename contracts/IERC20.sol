//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

interface IERC20{
        function transfer(address to, uint256 amount) external returns (bool);
        function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);
    function balanceOf(address addr)external view returns(uint);
}