import { Modal } from '@/components/modal';
import { useDispatch, useSelector } from 'react-redux';
import { HomeSelectors } from '../../selectors';
import { homeActions } from '../../slice';
import { useState } from 'react';
import { SecondaryButton } from '@/components/button/secondary';
import SimpleInput from '@/components/inputs/simple';
import { isAddress } from 'ethers';

export const TransferModal = () => {
  const dispatch = useDispatch();
  const [destination, setDestination] = useState('');
  const isOpen = useSelector(HomeSelectors.isTransferModalOpen);
  const closeModal = () => {
    // dispatch(homeActions.setIsTransferModalOpen(false));
  };
  const transfer = () => {
    // dispatch(homeActions.transferSelectedNFTs({ receiver: destination }));
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
