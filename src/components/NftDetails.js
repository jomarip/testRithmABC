// NftDetails.js
import React, { useEffect } from "react";
import { registryContract } from "../utils/web3";
import config from "../config";
import BoundAccountNfts from "./BoundAccountNfts";

const { IMPLEMENTATION_ADDRESS, CHAIN_ID, ERC721_ADDRESS, SALT } = config;

export default function NftDetails({
  tokenId,
  boundAccountAddress,
  setBoundAccountAddress
}) {
  useEffect(() => {
    const fetchBoundAccountAddress = async () => {
      if (tokenId !== null) {
        try {
          const address = await registryContract.methods
            .account(
              IMPLEMENTATION_ADDRESS,
              CHAIN_ID,
              ERC721_ADDRESS,
              tokenId,
              SALT
            )
            .call();

          setBoundAccountAddress(address);
        } catch (error) {
          console.error(
            "An error occurred while fetching the bound account address:",
            error
          );
        }
      }
    };

    fetchBoundAccountAddress();
  }, [tokenId, setBoundAccountAddress]);

  return (
    <div>
      {boundAccountAddress && (
        <>
          <p>Token-bound Account Address: {boundAccountAddress}</p>
          <BoundAccountNfts boundAccountAddress={boundAccountAddress} />
        </>
      )}
    </div>
  );
}
