const Web3 = require('web3');
const query = require('./query.js');
const entity = require('./entity.js');
const auction = require('./auction.js');



async function init() {
    const web3 = new Web3(Web3.givenProvider, null, {});

    const addressQuery = query.networks['1'].address;
    const instanceQuery = new web3.eth.Contract(query.abi, addressQuery, {});
    const getStruct = await instanceQuery.methods.getArray(1).encodeABI();
    web3.eth.call({
        to: addressQuery,
        data: getStruct
    }).then(console.log);

    const addressAuctionSell = '0xa2156F24711A631e92e65dC114CF172065dDd49b';
    const instanceAuctionSell = new web3.eth.Contract(auction.abi, addressQuery, {});
    const getAuction = await instanceAuctionSell.methods.getCurrentPrice(50694).encodeABI();
    web3.eth.call({
        to: addressAuctionSell,
        data: getAuction
    }).then(console.log);

    // const element = document.createElement('pre');
    // element.innerText = JSON.stringify(getStruct, null, "\t");
    // document.body.appendChild(element);
}

window.onload = init;
