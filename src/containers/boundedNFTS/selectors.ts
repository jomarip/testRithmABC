import { RootState } from '@/store/types';
import { createSelector } from 'reselect';
import { HomeDomains } from '../home/selectors';

export const BoundedNftsListDomain = {
  root: (state: RootState) => state,
};

export const BoundedNftsSelectors = {
  listOfBoundedNfts: ({ nftId }: { nftId: string }) =>
    createSelector(
      HomeDomains.listOfNFTs,
      (listOfNFTs) =>
        listOfNFTs.find((nft) => nft.token_id === nftId)?.boundedNfts || []
    ),
};
