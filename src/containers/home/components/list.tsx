import { ERC721__factory } from "@/abi/abi-types";
import { erc721Contract, ownerAddress } from "@/configs/web3";
import { avalancheDefaultProvider, nftAPI } from "@/containers/global";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HomeSelectors } from "../selectors";
import { homeActions } from "../slice";

export const ListOfNFTs = () => {
const dispatch=useDispatch()
const nftList = useSelector(HomeSelectors.listOfNFTs)
const selectedNFTsToTransfer = useSelector(HomeSelectors.selectedNFTsToTransfer)
useEffect(() => {
    dispatch(homeActions.getListOfNFTs())
}, []);
const handleNftClick = (index:number)=>{
    const exists=selectedNFTsToTransfer.find((nft)=>nft.token_id===nftList[index].token_id)
//    add to selected nfts to transfer if it's not already there
    if(!exists){
        dispatch(homeActions.addToSelectedNFTsToTransfer(nftList[index].token_id))
    }
//    remove from selected nfts to transfer if it's already there
    else{
        dispatch(homeActions.removeFromSelectedNFTsToTransfer(nftList[index].token_id))
    }
}

  return <>
      <div>
      {nftList.map((nft, index) => {
        const isSelected=selectedNFTsToTransfer.find((nftToTransfer)=>nftToTransfer.token_id===nft.token_id)
        return (
        <div key={index} onClick={()=>handleNftClick(index)} style={{
            border: isSelected ? "2px solid red" : "2px solid black",
            cursor: "pointer"
        }} >
          <img src={nft.media.media_collection.medium.url} alt={`Token ${nft.token_id}`} />
          <p>Token ID: {nft.token_id}</p>
        </div>
        )
        }
      )}
    </div>
  </>
  
}