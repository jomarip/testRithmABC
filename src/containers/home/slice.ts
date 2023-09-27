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
  },
});

export const { actions: homeActions, reducer: homeReducer } = homeSlice;
