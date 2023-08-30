// NftList.js
import React, { useEffect } from "react";
import { erc721Contract } from "../utils/web3";

export default function NftList({ address, selectNft, nftList, setNftList }) {
  useEffect(() => {
    const fetchOwnedTokens = async () => {
      try {
        const balance = await erc721Contract.methods.balanceOf(address).call();
        const tokens = [];
        for (let i = 0; i < balance; i++) {
          const tokenId = await erc721Contract.methods
            .tokenOfOwnerByIndex(address, i)
            .call();
          const imageURL = `https://rithm.s3.filebase.com/curatorship/${tokenId}.png`;
          tokens.push({ tokenId: tokenId.toString(), imageURL });
        }

        setNftList(tokens);
      } catch (error) {
        console.error("An error occurred while fetching the tokens:", error);
      }
    };

    fetchOwnedTokens();
  }, [address, setNftList]);

  return (
    <div>
      {nftList.map((nft, index) => (
        <div key={index} onClick={() => selectNft(nft.tokenId)}>
          <img src={nft.imageURL} alt={`Token ${nft.tokenId}`} />
          <p>Token ID: {nft.tokenId}</p>
        </div>
      ))}
    </div>
  );
}
