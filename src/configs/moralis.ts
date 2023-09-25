import Moralis from "moralis";
const web3ApiKey = import.meta.env.VITE_APP_MORALIS_WEB3_API_KEY;
let moralisStarted = false;
export const startMoralis = async () => {
  if (!moralisStarted) {
    moralisStarted = true;
    await Moralis.start({
      apiKey: web3ApiKey,
    });
  }
};