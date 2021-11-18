// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SahayogiToken is ERC20{
    
    address public minter;
    
    constructor() ERC20("SahayogiToken", "SYT") {
        minter = msg.sender;
    }

    function mint(address to, uint amount) public virtual{
        require(msg.sender == minter,"Not a Minter");
        _mint(to,amount);
    }
    

}
