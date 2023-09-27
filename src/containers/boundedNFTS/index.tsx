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

  return <></>;
};
