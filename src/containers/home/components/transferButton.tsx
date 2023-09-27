import { useDispatch, useSelector } from 'react-redux';
import { HomeSelectors } from '../selectors';
import { PrimaryButton } from '@/components/button/primary';
import { TransferModal } from '../modals/transferModal';
import { homeActions } from '../slice';
import { GlobalSelectors } from '@/containers/global/selectors';

export const TransferButton = () => {
  const dispatch = useDispatch();
  const connectedWalletAddress = useSelector(
    GlobalSelectors.connectedWalletAddress
  );
  const haveNftsToTransfer =
    useSelector(HomeSelectors.selectedNFTsToTransfer).length > 0;
  const handleTransferClick = () => {
    // dispatch(homeActions.setIsTransferModalOpen(true));
  };
  return (
    <>
      <TransferModal />
      {haveNftsToTransfer && (
        <PrimaryButton onClick={handleTransferClick}>Transfer</PrimaryButton>
      )}
    </>
  );
};
