import { Modal } from '@/components/modal';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { SecondaryButton } from '@/components/button/secondary';
import SimpleInput from '@/components/inputs/simple';
import { isAddress } from 'ethers';
import { BoundedNftsSelectors } from '../../selectors';
import { boundedNftsActions } from '../../slice';

export const TransferModal = () => {
  const dispatch = useDispatch();
  const [destination, setDestination] = useState('');
  const isOpen = useSelector(BoundedNftsSelectors.isTransferModalOpen);
  const closeModal = () => {
    dispatch(boundedNftsActions.setIsTransferModalOpen(false));
  };
  const transfer = () => {
    dispatch(
      boundedNftsActions.transferSelectedNFTs({ receiver: destination })
    );
  };

  const setInputValue = (e: string) => {
    isAddress(e) && setDestination(e);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <div>Transfer Modal</div>
        {/* transfer to */}
        <SimpleInput
          errormessage={undefined}
          touched
          value={destination}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {/* transfer button */}
        <SecondaryButton disabled={destination === ''} onClick={transfer}>
          Transfer
        </SecondaryButton>
      </Modal>
    </>
  );
};
