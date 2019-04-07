const Web3 = require('web3');
const query = require('./query.js');

function element(object) {
    const element = document.createElement('pre');
    element.innerText = JSON.stringify(object, null, "\t");
    document.body.appendChild(element);
}

async function init() {
    const web3 = new Web3(Web3.givenProvider, null, {});

    const addressQuery = query.networks['1'].address;
    const instanceQuery = new web3.eth.Contract(query.abi, addressQuery, {});
    const getStruct = await instanceQuery.methods.getStruct(1).call();
    element(getStruct);
    const getArray = await instanceQuery.methods.getArray(1).call();
    element(getArray);
}

window.onload = init;
