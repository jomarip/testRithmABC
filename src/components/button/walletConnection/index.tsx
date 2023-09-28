import { useDispatch, useSelector } from 'react-redux';
import { PrimaryButton } from '../primary';
import { GlobalSelectors } from '@/containers/global/selectors';
import { useConnect, useDisconnect } from 'wagmi';
import { metamaskConnector } from '@/containers/global/utils/connector';
import { globalActions } from '@/containers/global/slice';
import { addressMinimizer } from '@/utils/formatters';
import { useEffect } from 'react';

export const WalletConnection = () => {
  const connectedAccount = useSelector(GlobalSelectors.connectedWalletAddress);
  const dispatch = useDispatch();
  const { data, connectAsync, reset } = useConnect({
    connector: metamaskConnector,
  });

  useEffect(() => {
    if (localStorage.getItem('connectedOnce') === 'true' && !connectedAccount) {
      connect();
    }
  }, [data]);

  const connect = async () => {
    const res = await connectAsync();
    if (res) {
      localStorage.setItem('connectedOnce', 'true');
      dispatch(
        globalActions.setWalletRelatedData({
          connectedWalletAddress: res.account,
          provider: res.provider,
        })
      );
    }
  };
  const disconnect = () => {
    reset();
  };
  return (
    <PrimaryButton onClick={connectedAccount ? disconnect : connect}>
      {!!connectedAccount
        ? addressMinimizer(connectedAccount)
        : 'Connect metamask'}
    </PrimaryButton>
  );
};
