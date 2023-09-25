import {
  CHAIN_ID_HEX,
  ERC721_ADDRESS,
  erc721Contract,
  ownerAddress,
} from '@/configs/web3';
import { nftAPI } from '../global';
import { homeActions } from './slice';
import { takeLatest, put, select } from 'redux-saga/effects';
import { NFTResponse } from './types';
import { ERC721__factory } from '@/abi/abi-types';
import { Signer, ethers } from 'ethers';
import { HomeSelectors } from './selectors';
import { toast } from 'react-toastify';

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

function* transferSelectedNFTs(
  action: ReturnType<typeof homeActions.transferSelectedNFTs>
) {
  const { receiver } = action.payload;
  try {
    yield put(homeActions.setIsTransferingNFTs(true));
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer: Signer = yield provider.getSigner();
    const selectedNfts: NFTResponse[] = yield select(
      HomeSelectors.selectedNFTsToTransfer
    );

    const contract = ERC721__factory.connect(ERC721_ADDRESS, signer);
    for (const nft of selectedNfts) {
      yield contract.approve(receiver, nft.token_id);
      yield contract.transferFrom(ownerAddress, receiver, nft.token_id);
    }
    toast.success('Transfered NFTs successfully');
  } catch (error) {
    console.log({ error });
  } finally {
    yield put(homeActions.setIsTransferingNFTs(false));
  }
}

export function* homeSaga() {
  yield takeLatest(homeActions.getListOfNFTs.type, getListOfNFTs);
  yield takeLatest(homeActions.transferSelectedNFTs.type, transferSelectedNFTs);
}
