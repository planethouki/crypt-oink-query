pragma solidity >=0.4.21 <0.6.0;

interface E {
    function getEntity(
        uint256 _tokenId
    ) external view returns (
        bool isBreeding,
        bool isReady,
        uint256 cooldownIndex,
        uint256 nextActionAt,
        uint256 matingWithId,
        uint256 birthTime,
        uint256 breederId,
        uint256 seederId,
        uint256 generation,
        uint256 dna
    );
    function totalSupply() external view returns (uint256);
    function ownerOf(uint256 _tokenId) external view returns (address owner);

}
