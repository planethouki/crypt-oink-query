pragma solidity >=0.4.21 <0.6.0;

interface EE {
    function getAuction(
        uint256 _tokenId
    ) external view returns (
        address seller,
        uint256 startingPrice,
        uint256 endingPrice,
        uint256 duration,
        uint256 startedAt
    );
    function getCurrentPrice(
        uint256 _tokenId
    ) external view returns (
        uint256
    );
}
