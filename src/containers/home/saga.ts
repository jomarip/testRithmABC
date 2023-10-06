import {
  CHAIN_ID,
  ERC721_ADDRESS,
  IMPLEMENTATION_ADDRESS,
  registryContract,
} from '@/configs/web3';
import { homeActions } from './slice';
import { takeLatest, put, all } from 'redux-saga/effects';
import { NFTResponse } from './types';
import { nftsFromCollection } from './providers/nftsFromCollection[OwnedBy]';

function* getListOfNFTs(action: ReturnType<typeof homeActions.getListOfNFTs>) {
  const { owner: ownerAddress } = action.payload;
  console.log(`getting list of nfts for ${ownerAddress}`);
  try {
    yield put(homeActions.setIsLoadingListOfNFTs(true));
    // @ts-ignore
    const nftsResponse: NFTResponse[] = yield nftsFromCollection(ownerAddress, [
      ERC721_ADDRESS,
    ]);
    console.log({ nftsResponse, ownerAddress, ERC721_ADDRESS });
    let toCall: any[] = [];
    nftsResponse.forEach((nft) => {
      nft.mainImage = `https://rithm.s3.filebase.com/curatorship/${nft.token_id}.png`;
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

    addresses.forEach((address) => {
      toCall.push(nftsFromCollection(address));
    });
    const nfts: NFTResponse[][] = yield all(toCall);
    toCall = [];
    nftsResponse.forEach((nft, index) => {
      nft.boundedNfts = nfts[index];
    });
    // const responses: any = [];
    // nftsResponse.forEach(async (nft) => {
    //   const boundedNfts = nft.boundedNfts;
    //   const calls: any[] = [];
    //   for (let i = 0; i < boundedNfts.length; i++) {
    //     const boundedNFT = boundedNfts[i];
    //     if (!boundedNFT.token_uri) {
    //       const contract = ERC721__factory.connect(
    //         boundedNFT.token_address,
    //         avalancheDefaultProvider
    //       );
    //       calls.push(contract.tokenURI(boundedNFT.token_id));
    //     }
    //   }
    //   responses.push(Promise.all(calls));
    // });
    // const res: string[][] = yield Promise.all(responses);
    // const callArray: any = [];
    // nftsResponse.forEach((nft, index) => {
    //   const boundedNfts = nft.boundedNfts;
    //   const responses = res[index];
    //   const metadataArray: any[] = [];
    //   for (let i = 0; i < boundedNfts.length; i++) {
    //     const boundedNFT = boundedNfts[i];
    //     if (!boundedNFT.token_uri && responses[i]) {
    //       boundedNFT.token_uri = responses[i];
    //       metadataArray.push(

    //       );
    //     }
    //   }
    //   callArray.push(Promise.all(metadataArray));
    // });
    // const metadataResponses: any[][] = yield Promise.all(callArray);
    // console.log({ metadataResponses });
    // nftsResponse.forEach((nft, index) => {
    //   const tmp = cloneDeep(nft);
    //   const boundedNfts = tmp.boundedNfts;
    //   const responses = metadataResponses[index];
    //   for (let i = 0; i < boundedNfts.length; i++) {
    //     const boundedNFT = boundedNfts[i];
    //     if (!boundedNFT.metadata) {
    //       boundedNFT.metadata = responses[i];
    //     }
    //   }
    //   console.log({ tmp });
    // });
    // console.log({ nftData: nftsResponse });
    yield put(homeActions.setListOfNFTs(nftsResponse));
  } catch (error) {
    console.log({ error });
  } finally {
    yield put(homeActions.setIsLoadingListOfNFTs(false));
  }
}

export function* homeSaga() {
  yield takeLatest(homeActions.getListOfNFTs.type, getListOfNFTs);
}
