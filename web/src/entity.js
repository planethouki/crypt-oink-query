module.exports = {
  "contractName": "E",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "getEntity",
      "outputs": [
        {
          "name": "isBreeding",
          "type": "bool"
        },
        {
          "name": "isReady",
          "type": "bool"
        },
        {
          "name": "cooldownIndex",
          "type": "uint256"
        },
        {
          "name": "nextActionAt",
          "type": "uint256"
        },
        {
          "name": "matingWithId",
          "type": "uint256"
        },
        {
          "name": "birthTime",
          "type": "uint256"
        },
        {
          "name": "breederId",
          "type": "uint256"
        },
        {
          "name": "seederId",
          "type": "uint256"
        },
        {
          "name": "generation",
          "type": "uint256"
        },
        {
          "name": "dna",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
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
      "name": "ownerOf",
      "outputs": [
        {
          "name": "owner",
          "type": "address"
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
  "source": "pragma solidity >=0.4.21 <0.6.0;\r\n\r\ninterface E {\r\n    function getEntity(\r\n        uint256 _tokenId\r\n    ) external view returns (\r\n        bool isBreeding,\r\n        bool isReady,\r\n        uint256 cooldownIndex,\r\n        uint256 nextActionAt,\r\n        uint256 matingWithId,\r\n        uint256 birthTime,\r\n        uint256 breederId,\r\n        uint256 seederId,\r\n        uint256 generation,\r\n        uint256 dna\r\n    );\r\n    function totalSupply() external view returns (uint256);\r\n    function ownerOf(uint256 _tokenId) external view returns (address owner);\r\n\r\n}\r\n",
  "sourcePath": "D:\\work\\WebStorm\\crypt-oink-query\\contracts\\i\\E.sol",
  "ast": {
    "absolutePath": "/D/work/WebStorm/crypt-oink-query/contracts/i/E.sol",
    "exportedSymbols": {
      "E": [
        731
      ]
    },
    "id": 732,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 693,
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
        "src": "0:32:3"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 731,
        "linearizedBaseContracts": [
          731
        ],
        "name": "E",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 718,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getEntity",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 696,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 695,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 718,
                  "src": "84:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 694,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "84:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "73:34:3"
            },
            "returnParameters": {
              "id": 717,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 698,
                  "name": "isBreeding",
                  "nodeType": "VariableDeclaration",
                  "scope": 718,
                  "src": "141:15:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 697,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "141:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 700,
                  "name": "isReady",
                  "nodeType": "VariableDeclaration",
                  "scope": 718,
                  "src": "167:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 699,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "167:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 702,
                  "name": "cooldownIndex",
                  "nodeType": "VariableDeclaration",
                  "scope": 718,
                  "src": "190:21:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 701,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "190:7:3",
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
                  "id": 704,
                  "name": "nextActionAt",
                  "nodeType": "VariableDeclaration",
                  "scope": 718,
                  "src": "222:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 703,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "222:7:3",
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
                  "id": 706,
                  "name": "matingWithId",
                  "nodeType": "VariableDeclaration",
                  "scope": 718,
                  "src": "253:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 705,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "253:7:3",
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
                  "id": 708,
                  "name": "birthTime",
                  "nodeType": "VariableDeclaration",
                  "scope": 718,
                  "src": "284:17:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 707,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "284:7:3",
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
                  "id": 710,
                  "name": "breederId",
                  "nodeType": "VariableDeclaration",
                  "scope": 718,
                  "src": "312:17:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 709,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "312:7:3",
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
                  "id": 712,
                  "name": "seederId",
                  "nodeType": "VariableDeclaration",
                  "scope": 718,
                  "src": "340:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 711,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "340:7:3",
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
                  "id": 714,
                  "name": "generation",
                  "nodeType": "VariableDeclaration",
                  "scope": 718,
                  "src": "367:18:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 713,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "367:7:3",
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
                  "id": 716,
                  "name": "dna",
                  "nodeType": "VariableDeclaration",
                  "scope": 718,
                  "src": "396:11:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 715,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "396:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "130:284:3"
            },
            "scope": 731,
            "src": "55:360:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 723,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 719,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "441:2:3"
            },
            "returnParameters": {
              "id": 722,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 721,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 723,
                  "src": "467:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 720,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "467:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "466:9:3"
            },
            "scope": 731,
            "src": "421:55:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 730,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "ownerOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 726,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 725,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 730,
                  "src": "499:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 724,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "499:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "498:18:3"
            },
            "returnParameters": {
              "id": 729,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 728,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 730,
                  "src": "540:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 727,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "540:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "539:15:3"
            },
            "scope": 731,
            "src": "482:73:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 732,
        "src": "36:524:3"
      }
    ],
    "src": "0:562:3"
  },
  "legacyAST": {
    "absolutePath": "/D/work/WebStorm/crypt-oink-query/contracts/i/E.sol",
    "exportedSymbols": {
      "E": [
        731
      ]
    },
    "id": 732,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 693,
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
        "src": "0:32:3"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 731,
        "linearizedBaseContracts": [
          731
        ],
        "name": "E",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 718,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getEntity",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 696,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 695,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 718,
                  "src": "84:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 694,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "84:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "73:34:3"
            },
            "returnParameters": {
              "id": 717,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 698,
                  "name": "isBreeding",
                  "nodeType": "VariableDeclaration",
                  "scope": 718,
                  "src": "141:15:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 697,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "141:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 700,
                  "name": "isReady",
                  "nodeType": "VariableDeclaration",
                  "scope": 718,
                  "src": "167:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 699,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "167:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 702,
                  "name": "cooldownIndex",
                  "nodeType": "VariableDeclaration",
                  "scope": 718,
                  "src": "190:21:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 701,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "190:7:3",
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
                  "id": 704,
                  "name": "nextActionAt",
                  "nodeType": "VariableDeclaration",
                  "scope": 718,
                  "src": "222:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 703,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "222:7:3",
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
                  "id": 706,
                  "name": "matingWithId",
                  "nodeType": "VariableDeclaration",
                  "scope": 718,
                  "src": "253:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 705,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "253:7:3",
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
                  "id": 708,
                  "name": "birthTime",
                  "nodeType": "VariableDeclaration",
                  "scope": 718,
                  "src": "284:17:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 707,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "284:7:3",
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
                  "id": 710,
                  "name": "breederId",
                  "nodeType": "VariableDeclaration",
                  "scope": 718,
                  "src": "312:17:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 709,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "312:7:3",
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
                  "id": 712,
                  "name": "seederId",
                  "nodeType": "VariableDeclaration",
                  "scope": 718,
                  "src": "340:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 711,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "340:7:3",
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
                  "id": 714,
                  "name": "generation",
                  "nodeType": "VariableDeclaration",
                  "scope": 718,
                  "src": "367:18:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 713,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "367:7:3",
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
                  "id": 716,
                  "name": "dna",
                  "nodeType": "VariableDeclaration",
                  "scope": 718,
                  "src": "396:11:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 715,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "396:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "130:284:3"
            },
            "scope": 731,
            "src": "55:360:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 723,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 719,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "441:2:3"
            },
            "returnParameters": {
              "id": 722,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 721,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 723,
                  "src": "467:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 720,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "467:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "466:9:3"
            },
            "scope": 731,
            "src": "421:55:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 730,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "ownerOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 726,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 725,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 730,
                  "src": "499:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 724,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "499:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "498:18:3"
            },
            "returnParameters": {
              "id": 729,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 728,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 730,
                  "src": "540:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 727,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "540:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "539:15:3"
            },
            "scope": 731,
            "src": "482:73:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 732,
        "src": "36:524:3"
      }
    ],
    "src": "0:562:3"
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