import { MoralisNFTResponse, NFTResponse } from '../home/types';

export interface BoundedNftsState {
  selectedNFTsToTransfer: Array<MoralisNFTResponse>;
  isTransferModalOpen: boolean;
  isTransferingNFTs: boolean;
}
