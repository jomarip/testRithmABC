import { startMoralis } from '@/configs/moralis';
import Moralis from 'moralis';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { globalActions } from './slice';
import { useConnect } from 'wagmi';
import { metamaskConnector } from './utils/connector';

export const nftAPI = Moralis.EvmApi.nft;

export const Blockchain = () => {
  const dispatch = useDispatch();
  const { connect, isSuccess, data, connectAsync } = useConnect({
    connector: metamaskConnector,
  });
  useEffect(() => {
    const startM = async () => {
      await startMoralis();
    };
    startM();
  }, []);
  useEffect(() => {
    const connectAs = async () => {
      const res = await connectAsync();
      if (res) {
        dispatch(
          globalActions.setWalletRelatedData({
            connectedWalletAddress: res.account,
            provider: res.provider,
          })
        );
      }
    };
    if (!data) {
      connectAs();
    } else {
      dispatch(
        globalActions.setWalletRelatedData({
          connectedWalletAddress: data.account,
          provider: data.provider,
        })
      );
    }
  }, [data]);

  return <></>;
};
