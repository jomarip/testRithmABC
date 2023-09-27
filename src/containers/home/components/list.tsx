import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HomeSelectors } from '../selectors';
import { homeActions } from '../slice';
import { GlobalSelectors } from '@/containers/global/selectors';
import { nftsFromCollection } from '../providers/nftsFromCollection[OwnedBy]';

export const ListOfNFTs = () => {
  const dispatch = useDispatch();
  const nftList = useSelector(HomeSelectors.listOfNFTs);
  const connectedWalletAddress = useSelector(
    GlobalSelectors.connectedWalletAddress
  );
  const selectedNFTsToTransfer = useSelector(
    HomeSelectors.selectedNFTsToTransfer
  );
  useEffect(() => {
    dispatch(
      homeActions.getListOfNFTs({
        owner: '0xF5f08Ba7F46e2a86b5ef3BFD56c2097C9f4276D7', //connectedWalletAddress
      })
    );
  }, [connectedWalletAddress]);
  const handleNftClick = async (index: number) => {};

  return (
    <>
      <div>
        {nftList.map((nft, index) => {
          const isSelected = selectedNFTsToTransfer.find(
            (nftToTransfer) => nftToTransfer.token_id === nft.token_id
          );
          return (
            <div
              key={index}
              onClick={() => handleNftClick(index)}
              style={{
                border: isSelected ? '2px solid red' : '2px solid black',
                cursor: 'pointer',
              }}
            >
              <img
                src={nft.media.media_collection.medium.url}
                alt={`Token ${nft.token_id}`}
              />
              <p>Token ID: {nft.token_id}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
