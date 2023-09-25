import { CHAIN_ID_HEX, ERC721_ADDRESS, ownerAddress } from '@/configs/web3';
import { nftAPI } from '../global';
import { homeActions } from './slice';
import { takeLatest, put } from 'redux-saga/effects';
import { NFTResponse } from './types';

function* getListOfNFTs() {
  try {
    yield put(homeActions.setIsLoadingListOfNFTs(true));
    // @ts-ignore
    const nftsResponse = yield nftAPI.getWalletNFTs({
      chain: CHAIN_ID_HEX,
      format: 'decimal',
      mediaItems: true,
      address: ownerAddress,
      tokenAddresses: [ERC721_ADDRESS],
    });
    const listOfNFTs: NFTResponse[] = nftsResponse.toJSON().result;
    yield put(homeActions.setListOfNFTs(listOfNFTs));
  } catch (error) {
  } finally {
    yield put(homeActions.setIsLoadingListOfNFTs(false));
  }
}

export function* homeSaga() {
  yield takeLatest(homeActions.getListOfNFTs.type, getListOfNFTs);
}
