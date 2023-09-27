import { CHAIN_ID_HEX } from '@/configs/web3';
import { nftAPI, tokenAPI } from '@/containers/global';
import { NFTResponse } from '../types';

export const nftsFromCollection = async (
  ownerAddress: string,
  collections?: string[]
) => {
  const options = {
    chain: CHAIN_ID_HEX,
    format: 'decimal' as 'decimal',
    mediaItems: true,
    address: ownerAddress,
    ...(collections && { tokenAddresses: collections }),
  };
  const nftsResponse = await nftAPI.getWalletNFTs(options);
  //   @ts-ignore
  const listOfNFTs: NFTResponse[] = nftsResponse.toJSON().result;
  listOfNFTs.forEach((nft) => {
    // @ts-ignore
    nft.metadata = JSON.parse(nft.metadata);
  });
  return listOfNFTs;
};
