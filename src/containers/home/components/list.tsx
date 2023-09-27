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
  const handleNftClick = async (index: number) => {
    const exists = selectedNFTsToTransfer.find(
      (nft) => nft.token_id === nftList[index].token_id
    );
    //    add to selected nfts to transfer if it's not already there
    if (!exists) {
      dispatch(
        homeActions.addToSelectedNFTsToTransfer(nftList[index].token_id)
      );
    }
    //    remove from selected nfts to transfer if it's already there
    else {
      dispatch(
        homeActions.removeFromSelectedNFTsToTransfer(nftList[index].token_id)
      );
    }
    const additional = await nftsFromCollection(nftList[index].token_address);
    console.log({
      additional,
    });
  };

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
