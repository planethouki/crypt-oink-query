const Q = artifacts.require("Q");

contract("Q", () => {
    it("should", () =>
        Q.deployed()
            .then(instance => instance.getStruct(1))
            .then(getStruct => {
                console.log(getStruct);
            }));
    it("should", () =>
        Q.deployed()
            .then(instance => instance.getArray(1))
            .then(getArray => {
                console.log(getArray);
            }));
});