const Q = artifacts.require("Q");
const M = artifacts.require("M");

const address = '0x1a94fce7ef36Bc90959E206bA569a12AFBC91ca1';
const auctionSellAddress = '0xa2156F24711A631e92e65dC114CF172065dDd49b';
const auctionSeedAddress = '0xcf20F1cC6efa9A05ae7EFf8a0c6331f3680899cf';

module.exports = function(deployer, network) {
  if (network === "live" || network === "live-fork") {
    deployer.deploy(Q, address, auctionSellAddress, auctionSeedAddress);
  } else if (network === "development") {
    deployer.deploy(M).then(() => {
      return deployer.deploy(Q, M.address, M.address, M.address);
    });
  }
};
