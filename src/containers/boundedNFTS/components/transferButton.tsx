import { useDispatch, useSelector } from 'react-redux';
import { PrimaryButton } from '@/components/button/primary';
import { GlobalSelectors } from '@/containers/global/selectors';
import { BoundedNftsSelectors } from '../selectors';
import { TransferModal } from '../modals/transferModal';
import { boundedNftsActions } from '../slice';

export const TransferButton = () => {
  const dispatch = useDispatch();
  const haveNftsToTransfer =
    useSelector(BoundedNftsSelectors.selectedNftsToTransfer).length > 0;
  const handleTransferClick = () => {
    dispatch(boundedNftsActions.setIsTransferModalOpen(true));
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
