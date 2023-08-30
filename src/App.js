// App.js
import React from "react";
import NftList from "./components/NftList";
import NftDetails from "./components/NftDetails";

function App({
  selectedNft,
  setSelectedNft,
  nftList,
  setNftList,
  boundAccountAddress,
  setBoundAccountAddress
}) {
  console.log("Initializing App");
  const userAddress = "0xF5f08Ba7F46e2a86b5ef3BFD56c2097C9f4276D7"; // Example user address

  console.log("User Address:", userAddress); // Log user address

  return (
    <div>
      <h2>Curatorship Memberships</h2>
      <div>
        <NftList
          address={userAddress}
          selectNft={setSelectedNft}
          nftList={nftList}
          setNftList={setNftList}
        />
        {selectedNft && (
          <NftDetails
            tokenId={selectedNft}
            boundAccountAddress={boundAccountAddress}
            setBoundAccountAddress={setBoundAccountAddress}
          />
        )}
      </div>
    </div>
  );
}

export default App;
