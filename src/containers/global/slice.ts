import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ConnectorData } from 'wagmi';
import { GlobalState } from './types';
import { ethers } from 'ethers';
import { avalancheDefaultProvider } from '@/configs/web3';

const initialState: GlobalState = {
  isConnectiongWallet: false,
  provider: avalancheDefaultProvider,
  connectedWalletAddress: '',
};

// global slice
export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    requestWalletConnection: (state, action: PayloadAction<void>) => {},
    setWalletRelatedData: (state, action: PayloadAction<any>) => {
      state.provider = action.payload.provider;
      state.connectedWalletAddress = action.payload.connectedWalletAddress;
    },
  },
});

export const { actions: globalActions, reducer: globalReducer } = globalSlice;
