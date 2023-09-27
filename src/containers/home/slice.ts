import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HomeState, NFTResponse } from './types';

const initialState: HomeState = {
  isLoadingListOfNFTs: false,
  listOfNFTs: [],
  selectedNFTsToTransfer: [],
  isTransferModalOpen: false,
  isTransferingNFTs: false,
};

// home slice
export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getListOfNFTs: (state, action: PayloadAction<{ owner: string }>) => {},
    setIsLoadingListOfNFTs: (state, action: PayloadAction<boolean>) => {
      state.isLoadingListOfNFTs = action.payload;
    },
    setListOfNFTs: (state, action: PayloadAction<NFTResponse[]>) => {
      state.listOfNFTs = action.payload;
    },
    addToSelectedNFTsToTransfer: (state, action: PayloadAction<string>) => {
      const nft = state.listOfNFTs.find(
        (nft) => nft.token_id === action.payload
      );
      if (nft) {
        state.selectedNFTsToTransfer.push(nft);
      }
    },
    removeFromSelectedNFTsToTransfer: (
      state,
      action: PayloadAction<string>
    ) => {
      const index = state.selectedNFTsToTransfer.findIndex(
        (nft) => nft.token_id === action.payload
      );
      if (index > -1) {
        state.selectedNFTsToTransfer.splice(index, 1);
      }
    },
    setIsTransferModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isTransferModalOpen = action.payload;
    },
    transferSelectedNFTs: (
      state,
      action: PayloadAction<{ receiver: string }>
    ) => {},
    setIsTransferingNFTs: (state, action: PayloadAction<boolean>) => {
      state.isTransferingNFTs = action.payload;
    },
  },
});

export const { actions: homeActions, reducer: homeReducer } = homeSlice;
