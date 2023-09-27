import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BoundedNftsState } from './types';

const initialState: BoundedNftsState = {
  isLoadingListOfNFTs: false,
  listOfNFTs: [],
};

// home slice
export const boundedNftsSlice = createSlice({
  name: 'boundedNFTs',
  initialState,
  reducers: {
    getListOfNFTs: (state, action: PayloadAction<{ owner: string }>) => {},
  },
});

export const { actions: boundedNftsActions, reducer: boundedNftsReducer } =
  boundedNftsSlice;
