//AppWrapper.js

import React, { useState, useEffect } from "react";
import App from "./App";

function AppWrapper() {
  console.log("Initializing AppWrapper");
  const [selectedNft, setSelectedNft] = useState(null);
  const [nftList, setNftList] = useState([]);
  const [boundAccountAddress, setBoundAccountAddress] = useState(null);

  useEffect(() => {
    console.log("AppWrapper useEffect running");
    console.log("Selected NFT:", selectedNft);
    console.log("NFT List:", nftList);
    console.log("Bound Account Address:", boundAccountAddress);
  }, [selectedNft, nftList, boundAccountAddress]);

  return (
    <div>
      <h1>Rithm Art Bound Collection</h1>
      <App
        selectedNft={selectedNft}
        setSelectedNft={setSelectedNft}
        nftList={nftList}
        setNftList={setNftList}
        boundAccountAddress={boundAccountAddress}
        setBoundAccountAddress={setBoundAccountAddress}
      />
    </div>
  );
}

export default AppWrapper;
