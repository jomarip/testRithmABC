import { ERC721_ADDRESS } from '@/configs/web3';
import { homeActions } from './slice';
import { takeLatest, put, select } from 'redux-saga/effects';
import { NFTResponse } from './types';
import { ERC721__factory } from '@/abi/abi-types';
import { Signer, ethers } from 'ethers';
import { HomeSelectors } from './selectors';
import { toast } from 'react-toastify';
import { nftsFromCollection } from './providers/nftsFromCollection[OwnedBy]';
import { GlobalSelectors } from '../global/selectors';

function* getListOfNFTs(action: ReturnType<typeof homeActions.getListOfNFTs>) {
  const { owner: ownerAddress } = action.payload;
  try {
    yield put(homeActions.setIsLoadingListOfNFTs(true));
    // @ts-ignore
    const nftsResponse = yield nftsFromCollection(ownerAddress, [
      ERC721_ADDRESS,
    ]);
    yield put(homeActions.setListOfNFTs(nftsResponse));
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
    const ownerAddress: string = yield select(
      GlobalSelectors.connectedWalletAddress
    );
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
