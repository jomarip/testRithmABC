import { NFTResponse } from '../home/types';

export interface BoundedNftsState {
  isLoadingListOfNFTs: boolean;
  listOfNFTs: Array<NFTResponse>;
}
