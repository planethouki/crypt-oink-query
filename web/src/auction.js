module.exports = {
  "contractName": "EE",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "getAuction",
      "outputs": [
        {
          "name": "seller",
          "type": "address"
        },
        {
          "name": "startingPrice",
          "type": "uint256"
        },
        {
          "name": "endingPrice",
          "type": "uint256"
        },
        {
          "name": "duration",
          "type": "uint256"
        },
        {
          "name": "startedAt",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "getCurrentPrice",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "metadata": "",
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity >=0.4.21 <0.6.0;\r\n\r\ninterface EE {\r\n    function getAuction(\r\n        uint256 _tokenId\r\n    ) external view returns (\r\n        address seller,\r\n        uint256 startingPrice,\r\n        uint256 endingPrice,\r\n        uint256 duration,\r\n        uint256 startedAt\r\n    );\r\n    function getCurrentPrice(\r\n        uint256 _tokenId\r\n    ) external view returns (\r\n        uint256\r\n    );\r\n}\r\n",
  "sourcePath": "D:\\work\\WebStorm\\crypt-oink-query\\contracts\\i\\EE.sol",
  "ast": {
    "absolutePath": "/D/work/WebStorm/crypt-oink-query/contracts/i/EE.sol",
    "exportedSymbols": {
      "EE": [
        756
      ]
    },
    "id": 757,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 733,
        "literals": [
          "solidity",
          ">=",
          "0.4",
          ".21",
          "<",
          "0.6",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:32:4"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 756,
        "linearizedBaseContracts": [
          756
        ],
        "name": "EE",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 748,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getAuction",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 736,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 735,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 748,
                  "src": "86:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 734,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "86:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "75:34:4"
            },
            "returnParameters": {
              "id": 747,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 738,
                  "name": "seller",
                  "nodeType": "VariableDeclaration",
                  "scope": 748,
                  "src": "143:14:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 737,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "143:7:4",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 740,
                  "name": "startingPrice",
                  "nodeType": "VariableDeclaration",
                  "scope": 748,
                  "src": "168:21:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 739,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "168:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 742,
                  "name": "endingPrice",
                  "nodeType": "VariableDeclaration",
                  "scope": 748,
                  "src": "200:19:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 741,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "200:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 744,
                  "name": "duration",
                  "nodeType": "VariableDeclaration",
                  "scope": 748,
                  "src": "230:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 743,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "230:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 746,
                  "name": "startedAt",
                  "nodeType": "VariableDeclaration",
                  "scope": 748,
                  "src": "257:17:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 745,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "257:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "132:149:4"
            },
            "scope": 756,
            "src": "56:226:4",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 755,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getCurrentPrice",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 751,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 750,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 755,
                  "src": "323:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 749,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "323:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "312:34:4"
            },
            "returnParameters": {
              "id": 754,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 753,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 755,
                  "src": "380:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 752,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "380:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "369:25:4"
            },
            "scope": 756,
            "src": "288:107:4",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 757,
        "src": "36:362:4"
      }
    ],
    "src": "0:400:4"
  },
  "legacyAST": {
    "absolutePath": "/D/work/WebStorm/crypt-oink-query/contracts/i/EE.sol",
    "exportedSymbols": {
      "EE": [
        756
      ]
    },
    "id": 757,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 733,
        "literals": [
          "solidity",
          ">=",
          "0.4",
          ".21",
          "<",
          "0.6",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:32:4"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 756,
        "linearizedBaseContracts": [
          756
        ],
        "name": "EE",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 748,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getAuction",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 736,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 735,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 748,
                  "src": "86:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 734,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "86:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "75:34:4"
            },
            "returnParameters": {
              "id": 747,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 738,
                  "name": "seller",
                  "nodeType": "VariableDeclaration",
                  "scope": 748,
                  "src": "143:14:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 737,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "143:7:4",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 740,
                  "name": "startingPrice",
                  "nodeType": "VariableDeclaration",
                  "scope": 748,
                  "src": "168:21:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 739,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "168:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 742,
                  "name": "endingPrice",
                  "nodeType": "VariableDeclaration",
                  "scope": 748,
                  "src": "200:19:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 741,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "200:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 744,
                  "name": "duration",
                  "nodeType": "VariableDeclaration",
                  "scope": 748,
                  "src": "230:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 743,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "230:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 746,
                  "name": "startedAt",
                  "nodeType": "VariableDeclaration",
                  "scope": 748,
                  "src": "257:17:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 745,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "257:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "132:149:4"
            },
            "scope": 756,
            "src": "56:226:4",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 755,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getCurrentPrice",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 751,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 750,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 755,
                  "src": "323:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 749,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "323:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "312:34:4"
            },
            "returnParameters": {
              "id": 754,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 753,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 755,
                  "src": "380:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 752,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "380:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "369:25:4"
            },
            "scope": 756,
            "src": "288:107:4",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 757,
        "src": "36:362:4"
      }
    ],
    "src": "0:400:4"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.0+commit.1d4f565a.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.6",
  "updatedAt": "2019-04-06T14:14:07.657Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}