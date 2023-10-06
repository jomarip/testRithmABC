import { useSelector } from 'react-redux';
import { HomeSelectors } from '../selectors';

import { AppPages } from '@/routes';
import { useNavigate } from 'react-router-dom';

export const ListOfNFTs = () => {
  const navigate = useNavigate();

  const nftList = useSelector(HomeSelectors.listOfNFTs);
  const selectedNFTsToTransfer = useSelector(
    HomeSelectors.selectedNFTsToTransfer
  );
  const handleNftClick = async (index: number) => {
    const nft = nftList[index];
    navigate({
      pathname: `${AppPages.BoundedNfts}/${nft.token_id}`,
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
              <img src={nft.mainImage} alt={`Token ${nft.token_id}`} />
              <p>Token ID: {nft.token_id}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
