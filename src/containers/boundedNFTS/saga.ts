import { put, select, takeLatest } from 'redux-saga/effects';
import { boundedNftsActions } from './slice';
import { MoralisNFTResponse } from '../home/types';
import { BoundedNftsDomain } from './selectors';
import { erc721Contract } from '@/configs/web3';
import { Signer, ethers } from 'ethers';
import { ERC721__factory } from '@/abi/abi-types';

const transferSelectedNFTs = function* (
  action: ReturnType<typeof boundedNftsActions.transferSelectedNFTs>
) {
  const { receiver } = action.payload;
  const selectedNFTs: MoralisNFTResponse[] = yield select(
    BoundedNftsDomain.selectedNftsToTransfer
  );
  console.log({ selectedNFTs });
  // @ts-ignore
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer: Signer = yield provider.getSigner();

  // sequencial transfer in for loop with try catch
  // if one fails, the rest will not be executed
  // if all success, then the saga will continue
  // with the next line of code
  try {
    for (let i = 0; i < selectedNFTs.length; i++) {
      const nft = selectedNFTs[i];
      const contract = ERC721__factory.connect(nft.token_address, signer);
      try {
        // approve
        const t: ethers.ContractTransactionResponse = yield contract.approve(
          nft.token_address,
          nft.token_id
        );
        const res: ethers.ContractTransactionReceipt | null = yield t.wait();
        if (res?.status) {
          console.log('approved');
          // transfer nft to receiver
          const tx: ethers.ContractTransactionResponse = yield contract[
            'safeTransferFrom(address,address,uint256)'
          ](nft.owner_of, receiver, nft.token_id);
          const finalRes: ethers.ContractTransactionReceipt | null =
            yield tx.wait();
          if (finalRes?.status) {
            console.log('transfered');
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  } catch (error) {
    yield put(boundedNftsActions.setIsTransferModalOpen(false));
    console.log({ error });
  } finally {
    yield put(boundedNftsActions.setIsTransferModalOpen(false));
  }
};

export function* BoundedNftsSaga() {
  yield takeLatest(
    boundedNftsActions.transferSelectedNFTs,
    transferSelectedNFTs
  );
}
