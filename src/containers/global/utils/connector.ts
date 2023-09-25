import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { avalanche } from 'wagmi/chains';

// Create a new connector
export const metamaskConnector = new MetaMaskConnector({
  chains: [avalanche],
  options: {
    shimDisconnect: true,
  },
});
