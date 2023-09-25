import { RootState } from '@/store/types';
import { createSelector } from '@reduxjs/toolkit';

export const GlobalDomains = {
  root: (state: RootState) => state,
  isConnectiongWallet: (state: RootState) => state.global.isConnectiongWallet,
  provider: (state: RootState) => state.global.provider,
  connectedWalletAddress: (state: RootState) =>
    state.global.connectedWalletAddress,
};

export const GlobalSelectors = {
  isConnectiongWallet: createSelector(
    GlobalDomains.isConnectiongWallet,
    (isConnectiongWallet) => isConnectiongWallet
  ),
  provider: createSelector(GlobalDomains.provider, (provider) => provider),
  connectedWalletAddress: createSelector(
    GlobalDomains.connectedWalletAddress,
    (connectedWalletAddress) => connectedWalletAddress
  ),
};
