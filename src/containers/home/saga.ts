import {
  CHAIN_ID,
  ERC721_ADDRESS,
  IMPLEMENTATION_ADDRESS,
  registryContract,
} from '@/configs/web3';
import { homeActions } from './slice';
import { takeLatest, put, select, all } from 'redux-saga/effects';
import { NFTResponse } from './types';
import { nftsFromCollection } from './providers/nftsFromCollection[OwnedBy]';

function* getListOfNFTs(action: ReturnType<typeof homeActions.getListOfNFTs>) {
  const { owner: ownerAddress } = action.payload;
  try {
    yield put(homeActions.setIsLoadingListOfNFTs(true));
    // @ts-ignore
    const nftsResponse: NFTResponse[] = yield nftsFromCollection(ownerAddress, [
      ERC721_ADDRESS,
    ]);
    let toCall: any[] = [];
    nftsResponse.forEach((nft) => {
      toCall.push(
        registryContract.account(
          IMPLEMENTATION_ADDRESS,
          CHAIN_ID,
          ERC721_ADDRESS,
          Number(nft.token_id),
          '0' //SALT
        )
      );
    });
    const addresses: string[] = yield all(toCall);
    toCall = [];
    addresses.forEach((address, index) => {
      toCall.push(nftsFromCollection(address, [ERC721_ADDRESS]));
    });
    const nfts: NFTResponse[] = yield all(toCall);
    console.log({ nfts });

    yield put(homeActions.setListOfNFTs(nftsResponse));
  } catch (error) {
    console.log({ error });
  } finally {
    yield put(homeActions.setIsLoadingListOfNFTs(false));
  }
}

// function* transferSelectedNFTs(
//   action: ReturnType<typeof homeActions.transferSelectedNFTs>
// ) {
//   const { receiver } = action.payload;
//   try {
//     yield put(homeActions.setIsTransferingNFTs(true));
//     const ownerAddress: string = yield select(
//       GlobalSelectors.connectedWalletAddress
//     );
//     const provider = new ethers.BrowserProvider(window.ethereum);
//     const signer: Signer = yield provider.getSigner();
//     const selectedNfts: NFTResponse[] = yield select(
//       HomeSelectors.selectedNFTsToTransfer
//     );

//     const contract = ERC721__factory.connect(ERC721_ADDRESS, signer);
//     for (const nft of selectedNfts) {
//       yield contract.approve(receiver, nft.token_id);
//       yield contract.transferFrom(ownerAddress, receiver, nft.token_id);
//     }
//     toast.success('Transfered NFTs successfully');
//   } catch (error) {
//     console.log({ error });
//   } finally {
//     yield put(homeActions.setIsTransferingNFTs(false));
//   }
// }

export function* homeSaga() {
  yield takeLatest(homeActions.getListOfNFTs.type, getListOfNFTs);
}
