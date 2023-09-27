import { RootState } from '@/store/types';
import { createSelector } from 'reselect';
import { HomeDomains } from '../home/selectors';

export const BoundedNftsDomain = {
  root: (state: RootState) => state,
  selectedNftsToTransfer: (state: RootState) =>
    state.boundedNFTs?.selectedNFTsToTransfer,
  isTransferModalOpen: (state: RootState) =>
    state.boundedNFTs.isTransferModalOpen,
};

export const BoundedNftsSelectors = {
  listOfBoundedNfts: ({ nftId }: { nftId: string }) =>
    createSelector(
      HomeDomains.listOfNFTs,
      (listOfNFTs) =>
        listOfNFTs.find((nft) => nft.token_id === nftId)?.boundedNfts || []
    ),
  selectedNftsToTransfer: createSelector(
    BoundedNftsDomain.selectedNftsToTransfer,
    (selectedNftsToTransfer) => selectedNftsToTransfer || []
  ),
  isTransferModalOpen: createSelector(
    BoundedNftsDomain.isTransferModalOpen,
    (isTransferModalOpen) => isTransferModalOpen
  ),
};
