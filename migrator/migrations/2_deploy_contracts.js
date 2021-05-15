const BonusToken = artifacts.require("BonusToken.sol");
const LiquidityMigrator = artifacts.require("LiquidityMigrator.sol");

module.exports = function (deployer) {
 await deployer.deploy(BonusToken);
 const bonusToken = await BonusToken.Deployed();

 const routerAddress = '';
 const pairAddress = '';
 const routerForkAddress = '';
 const pairForkAddress = '';

 await deployer.deploy(
     LiquidityMigrator,
     routerAddress,
     pairAddress,
     routerAddress,
     pairAddress,
     bonusToken.address
     
 );
 const LiquidityMigrator = await LiquidityMigrator.deploy();
 await bonusToken.setLiquidator(LiquidityMigrator.address);
};