import { startMoralis } from '@/configs/moralis';
import Moralis from 'moralis';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { homeActions } from '../home/slice';
import { GlobalSelectors } from './selectors';

export const nftAPI = Moralis.EvmApi.nft;
export const tokenAPI = Moralis.EvmApi.token;

export const Blockchain = () => {
  const dispatch = useDispatch();
  const connectedAccount = useSelector(GlobalSelectors.connectedWalletAddress);

  useEffect(() => {
    const startM = async () => {
      await startMoralis();
    };
    startM();
  }, []);

  useEffect(() => {
    if (connectedAccount) {
      dispatch(
        homeActions.getListOfNFTs({
          owner: connectedAccount, //'0xF5f08Ba7F46e2a86b5ef3BFD56c2097C9f4276D7',
        })
      );
    }
  }, [connectedAccount]);

  return <></>;
};
