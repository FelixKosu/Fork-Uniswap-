pragma solidity ^0.5.16;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";

contract Token1 is ERC20, ERC20Detailed {
    constructor(uint256 initialSupply) ERC20Detailed("Token1", "TK1", 18) public {
    }
}
