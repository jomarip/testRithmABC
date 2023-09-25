import { ERC721__factory, IERC6551Registry__factory } from '@/abi/abi-types';
import { getDefaultProvider } from 'ethers';

const config = {
  REGISTRY_ADDRESS: '0xB970a9b17CD5Ce5ba67C0237667Fbf9e16031262',
  ERC721_ADDRESS: '0xe0290c183e9F63A6f28938051443D9Ed47710073',
  IMPLEMENTATION_ADDRESS: '0x5EbcF2A4beaf69d76d4a339Acb362FcA824D0723', // The address of the contract implementation
  CHAIN_ID: 43114, // The chain ID, e.g., 1 for Ethereum Mainnet
  CHAIN_ID_HEX: '0xa86a', // The chain ID in hex, e.g., 0x1 for Ethereum Mainnet
  SALT: '0', // Any salt value to be used
  ownerAddress: '0xF5f08Ba7F46e2a86b5ef3BFD56c2097C9f4276D7', // The address of the owner
  AVALANCHE_RPC_URL: 'https://api.avax.network/ext/bc/C/rpc',
};

const connectWallet = async () => {
  // @ts-ignore
  if (typeof window.ethereum !== 'undefined') {
    // @ts-ignore
    const [account] = await window.ethereum.request({
      method: 'eth_requestAccounts',
    }); // connect wallet
  }
};

const {
  REGISTRY_ADDRESS,
  ERC721_ADDRESS,
  ownerAddress,
  CHAIN_ID_HEX,
  CHAIN_ID,
  AVALANCHE_RPC_URL,
} = config;
export const avalancheDefaultProvider = getDefaultProvider(AVALANCHE_RPC_URL);
const registryContract = IERC6551Registry__factory.connect(
  REGISTRY_ADDRESS,
  avalancheDefaultProvider
);
const erc721Contract = ERC721__factory.connect(
  ERC721_ADDRESS,
  avalancheDefaultProvider
); //new web3.eth.Contract(ERC721.abi, ERC721_ADDRESS);

export {
  registryContract,
  erc721Contract,
  ownerAddress,
  ERC721_ADDRESS,
  REGISTRY_ADDRESS,
  CHAIN_ID_HEX,
  CHAIN_ID,
};