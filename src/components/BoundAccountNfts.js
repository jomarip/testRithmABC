// BoundAccountNfts.js
import React, { useEffect, useState } from "react";
import { erc721Contract } from "../utils/web3";

export default function BoundAccountNfts({ boundAccountAddress }) {
  const [boundAccountNfts, setBoundAccountNfts] = useState([]);

  useEffect(() => {
    const fetchBoundAccountTokens = async () => {
      try {
        if (boundAccountAddress) {
          const balance = await erc721Contract.methods
            .balanceOf(boundAccountAddress)
            .call();
          const tokens = [];
          for (let i = 0; i < balance; i++) {
            const tokenId = await erc721Contract.methods
              .tokenOfOwnerByIndex(boundAccountAddress, i)
              .call();
            const imageURL = `https://rithm.s3.filebase.com/curatorship/${tokenId}.png`;
            tokens.push({ tokenId: tokenId.toString(), imageURL });
          }

          setBoundAccountNfts(tokens);
        }
      } catch (error) {
        console.error(
          "An error occurred while fetching the tokens for bound account:",
          error
        );
      }
    };

    fetchBoundAccountTokens();
  }, [boundAccountAddress]);

  return (
    <div>
      <h2>Bound Account NFTs</h2>
      {boundAccountNfts.map((nft, index) => (
        <div key={index}>
          <img src={nft.imageURL} alt={`Token ${nft.tokenId}`} />
          <p>Token ID: {nft.tokenId}</p>
        </div>
      ))}
    </div>
  );
}
