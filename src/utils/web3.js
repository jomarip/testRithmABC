// web3.js
import Web3 from 'web3';
import IERC6551Registry from '../abis/IERC6551Registry.json';
import ERC721 from '../abis/ERC721.json';
import config from '../config';

const AVALANCHE_RPC_URL = "https://api.avax.network/ext/bc/C/rpc";

// Create a new web3 instance with an Avalanche provider
const web3 = new Web3(new Web3.providers.HttpProvider(AVALANCHE_RPC_URL));

console.log("Web3 Connection:", web3);  // Log web3 instance

const { REGISTRY_ADDRESS, ERC721_ADDRESS } = config;

console.log("Registry Contract Address:", REGISTRY_ADDRESS);  // Log registry contract address
console.log("ERC721 Contract Address:", ERC721_ADDRESS);  // Log ERC721 contract address

const registryContract = new web3.eth.Contract(IERC6551Registry.abi, REGISTRY_ADDRESS);
const erc721Contract = new web3.eth.Contract(ERC721.abi, ERC721_ADDRESS);

export { web3, registryContract, erc721Contract };
