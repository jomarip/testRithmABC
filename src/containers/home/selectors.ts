import { RootState } from '@/store/types';
import { createSelector } from '@reduxjs/toolkit';

export const HomeDomains = {
  root: (state: RootState) => state,
  isGettingListOfNFTs: (state: RootState) => state.home.isLoadingListOfNFTs,
  listOfNFTs: (state: RootState) => state.home.listOfNFTs,
  selectedNFTsToTransfer: (state: RootState) =>
    state.home.selectedNFTsToTransfer,
};

export const HomeSelectors = {
  isGettingListOfNFTs: createSelector(
    HomeDomains.isGettingListOfNFTs,
    (isLoadingListOfNFTs) => isLoadingListOfNFTs
  ),
  listOfNFTs: createSelector(
    HomeDomains.listOfNFTs,
    (listOfNFTs) => listOfNFTs
  ),
  selectedNFTsToTransfer: createSelector(
    HomeDomains.selectedNFTsToTransfer,
    (selectedNFTsToTransfer) => selectedNFTsToTransfer
  ),
};
