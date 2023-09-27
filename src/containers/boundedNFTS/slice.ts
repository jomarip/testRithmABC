import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BoundedNftsState } from './types';
import { MoralisNFTResponse, NFTResponse } from '../home/types';

const initialState: BoundedNftsState = {
  isTransferingNFTs: false,
  isTransferModalOpen: false,
  selectedNFTsToTransfer: [],
};

// home slice
export const boundedNftsSlice = createSlice({
  name: 'boundedNFTs',
  initialState,
  reducers: {
    setIsTransferModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isTransferModalOpen = action.payload;
    },
    setIsTransferingNFTs: (state, action: PayloadAction<boolean>) => {
      state.isTransferingNFTs = action.payload;
    },
    addToListOfNFTsToTransfer: (
      state,
      action: PayloadAction<MoralisNFTResponse>
    ) => {
      state.selectedNFTsToTransfer.push(action.payload);
    },
    removeFromListOfNFTsToTransfer: (
      state,
      action: PayloadAction<MoralisNFTResponse>
    ) => {
      state.selectedNFTsToTransfer = state.selectedNFTsToTransfer.filter(
        (nft) => nft.token_id !== action.payload.token_id
      );
    },
    transferSelectedNFTs: (
      state,
      action: PayloadAction<{ receiver: string }>
    ) => {},
  },
});

export const { actions: boundedNftsActions, reducer: boundedNftsReducer } =
  boundedNftsSlice;
