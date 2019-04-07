pragma solidity >=0.4.21 <0.6.0;
pragma experimental ABIEncoderV2;

import './i/E.sol';
import './i/EE.sol';

contract Q {

    address public owner;

    E public entityContract;
    EE public sellContract;
    EE public seedContract;

    struct Entity {
        bool isBreeding;
        bool isReady;
        uint256 cooldownIndex;
        uint256 nextActionAt;
        uint256 matingWithId;
        uint256 birthTime;
        uint256 breederId;
        uint256 seederId;
        uint256 generation;
        uint256 dna;
        address owner;
    }

    struct Auction {
        address seller;
        uint256 startingPrice;
        uint256 endingPrice;
        uint256 duration;
        uint256 startedAt;
        uint256 currentPrice;
    }

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    constructor(address _entity, address _sell, address _seed) public {
        entityContract = E(_entity);
        sellContract = EE(_sell);
        seedContract = EE(_seed);
        owner = msg.sender;
    }

    function setAddress(address _entity, address _sell, address _seed) external onlyOwner {
        entityContract = E(_entity);
        sellContract = EE(_sell);
        seedContract = EE(_seed);
    }

    function setOwner(address _owner) external onlyOwner {
        owner = _owner;
    }

    function selfDestruct() external onlyOwner {
        selfdestruct(msg.sender);
    }

    function getStruct(uint256 _tokenId) external view returns (
        uint256 totalSupply,
        Entity memory entity,
        Auction memory sell,
        Auction memory seed
    ){
        uint256 tSupply = entityContract.totalSupply();
        Entity memory getEntity = _getEntity(_tokenId);
        Auction memory getAuctionSell = _getAuctionSell(_tokenId);
        Auction memory getAuctionSeed = _getAuctionSeed(_tokenId);

        totalSupply = tSupply;
        entity = getEntity;
        sell = getAuctionSell;
        seed = getAuctionSeed;
    }

    function getArray(uint256 _tokenId) external view returns (
        bool[2] memory one,
        address[3] memory two,
        uint256[19] memory three
    ){
        uint256 totalSupply = entityContract.totalSupply();
        Entity memory getEntity = _getEntity(_tokenId);
        Auction memory getAuctionSell = _getAuctionSell(_tokenId);
        Auction memory getAuctionSeed = _getAuctionSeed(_tokenId);
        one = [
            getEntity.isBreeding,
            getEntity.isReady
        ];
        two = [
            getEntity.owner,
            getAuctionSell.seller,
            getAuctionSeed.seller
        ];
        three = [
            totalSupply,
            getEntity.cooldownIndex,
            getEntity.nextActionAt,
            getEntity.matingWithId,
            getEntity.birthTime,
            getEntity.breederId,
            getEntity.seederId,
            getEntity.generation,
            getEntity.dna,
            getAuctionSell.startingPrice,
            getAuctionSell.endingPrice,
            getAuctionSell.duration,
            getAuctionSell.startedAt,
            getAuctionSell.currentPrice,
            getAuctionSeed.startingPrice,
            getAuctionSeed.endingPrice,
            getAuctionSeed.duration,
            getAuctionSeed.startedAt,
            getAuctionSeed.currentPrice
        ];
    }

    function _getEntity(uint256 _tokenId) internal view returns (Entity memory) {
        (
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
        ) = entityContract.getEntity(_tokenId);
        address ownerOf = entityContract.ownerOf(_tokenId);
        Entity memory e = Entity(
            isBreeding,
            isReady,
            cooldownIndex,
            nextActionAt,
            matingWithId,
            birthTime,
            breederId,
            seederId,
            generation,
            dna,
            ownerOf
        );
        return e;
    }

    function _getAuctionSell(uint256 _tokenId) internal view returns (Auction memory) {
        return _getAuction(_tokenId, sellContract);
    }

    function _getAuctionSeed(uint256 _tokenId) internal view returns (Auction memory) {
        return _getAuction(_tokenId, seedContract);
    }

    function _getAuction(uint256 _tokenId, EE _contract) internal view returns (Auction memory) {
        address ownerOf = entityContract.ownerOf(_tokenId);
        Auction memory a;
        if (ownerOf == address(_contract)) {
            uint256 currentPrice = _contract.getCurrentPrice(_tokenId);
            (
            address seller,
            uint256 startingPrice,
            uint256 endingPrice,
            uint256 duration,
            uint256 startedAt
            ) = _contract.getAuction(_tokenId);
            a = Auction(
                seller,
                startingPrice,
                endingPrice,
                duration,
                startedAt,
                currentPrice
            );
        } else {
            a = Auction(
                address(0),
                uint256(0),
                uint256(0),
                uint256(0),
                uint256(0),
                uint256(0)
            );
        }
        return a;
    }


}
