import { startMoralis } from '@/configs/moralis';
import Moralis from 'moralis';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useConnect } from 'wagmi';
import { metamaskConnector } from './utils/connector';
import { homeActions } from '../home/slice';
import { isAddress } from 'ethers';

export const nftAPI = Moralis.EvmApi.nft;
export const tokenAPI = Moralis.EvmApi.token;

export const Blockchain = () => {
  const dispatch = useDispatch();
  const { data, connectAsync } = useConnect({
    connector: metamaskConnector,
  });
  useEffect(() => {
    const startM = async () => {
      await startMoralis();
    };
    startM();
  }, []);

  useEffect(() => {
    console.log({ account: data?.account });
    console.log({ isAddress: isAddress(data?.account) });
    if (data?.account) {
      dispatch(
        homeActions.getListOfNFTs({
          owner: data.account, //'0xF5f08Ba7F46e2a86b5ef3BFD56c2097C9f4276D7',
        })
      );
    }
  }, [data]);

  return <></>;
};
