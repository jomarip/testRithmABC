import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { HomeSelectors } from '../home/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { homeActions } from '../home/slice';
import { GlobalSelectors } from '../global/selectors';
import { BoundedNftsSelectors } from './selectors';

export const BoundedNfts = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const connectedWalletAddress = useSelector(
    GlobalSelectors.connectedWalletAddress
  );
  const listOfNfts = useSelector(HomeSelectors.listOfNFTs);
  const boundedNfts = useSelector(
    BoundedNftsSelectors.listOfBoundedNfts({ nftId: id || '' })
  );
  useEffect(() => {
    if (connectedWalletAddress) {
      if (listOfNfts.length === 0) {
        dispatch(homeActions.getListOfNFTs({ owner: connectedWalletAddress }));
      }
    }
  }, [id, connectedWalletAddress]);
  console.log({ boundedNfts });

  return (
    <div>
      <h2>Bound Account NFTs</h2>
      {boundedNfts.map((nft, index) => (
        <div key={index}>
          <img
            src={nft.media.media_collection.low.url}
            alt={`Token ${nft.token_id}`}
          />
          <p>Token ID: {nft.token_id}</p>
        </div>
      ))}
    </div>
  );
};
