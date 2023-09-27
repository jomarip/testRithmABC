import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MoralisNFTResponse } from '@/containers/home/types';
import { BoundedNftsSelectors } from '../selectors';
import { boundedNftsActions } from '../slice';

export const BoundedNftsList = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const selectedNFTsToTransfer = useSelector(
    BoundedNftsSelectors.selectedNftsToTransfer
  );
  const boundedNfts = useSelector(
    BoundedNftsSelectors.listOfBoundedNfts({ nftId: id || '' })
  );
  const handleNftClick = (nft: MoralisNFTResponse) => {
    const exists = selectedNFTsToTransfer.find(
      (nftToTransfer) => nftToTransfer.token_id === nft.token_id
    );
    if (!exists) {
      dispatch(boundedNftsActions.addToListOfNFTsToTransfer(nft));
    } else {
      dispatch(boundedNftsActions.removeFromListOfNFTsToTransfer(nft));
    }
  };

  return (
    <div>
      <h2>Bound Account NFTs</h2>
      {boundedNfts.map((nft, index) => {
        const selected = selectedNFTsToTransfer.find(
          (nftToTransfer) => nftToTransfer.token_id === nft.token_id
        );

        return (
          <div
            key={index}
            onClick={() => handleNftClick(nft)}
            style={{
              border: selected ? '2px solid red' : '2px solid black',
              cursor: 'pointer',
            }}
          >
            <img
              src={nft.media?.media_collection.medium.url}
              alt={`Token ${nft.name}`}
            />
            <p>Token ID: {nft.token_id}</p>
          </div>
        );
      })}
    </div>
  );
};
