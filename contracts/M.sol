pragma solidity >=0.4.21 <0.6.0;

import './i/E.sol';
import './i/EE.sol';

contract M is E, EE {

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
    ) {
        isBreeding = true;
        isReady = true;
        cooldownIndex = uint256(0);
        nextActionAt = uint256(1);
        matingWithId = uint256(2);
        birthTime = _tokenId;
        breederId = _tokenId;
        seederId = uint256(5);
        generation = uint256(6);
        dna = uint256(7);
    }

    function totalSupply() external view returns (uint256) {
        return uint256(256);
    }

    function ownerOf(uint256 _tokenId) external view returns (address owner) {
        return address(_tokenId);
    }

    function getAuction(
        uint256 _tokenId
    ) external view returns (
        address seller,
        uint256 startingPrice,
        uint256 endingPrice,
        uint256 duration,
        uint256 startedAt
    ) {
        seller = msg.sender;
        startingPrice = uint256(0);
        endingPrice = uint256(1);
        duration = _tokenId;
        startedAt = _tokenId;
    }

    function getCurrentPrice(
        uint256 _tokenId
    ) external view returns (
        uint256
    ) {
        return _tokenId;
    }

}
