export interface HomeState {
  isLoadingListOfNFTs: boolean;
  listOfNFTs: Array<NFTResponse>;
  selectedNFTsToTransfer: Array<NFTResponse>;
  isTransferModalOpen: boolean;
  isTransferingNFTs: boolean;
}

export interface NFTResponse {
  token_address: string;
  token_id: string;
  owner_of: string;
  block_number: string;
  block_number_minted: string;
  token_hash: string;
  amount: string;
  possible_spam: boolean;
  contract_type: string;
  name: string;
  symbol: string;
  token_uri: string;
  metadata: string;
  last_token_uri_sync: string;
  last_metadata_sync: string;
  minter_address: string;
  media: Media;
  verified_collection: boolean;
}

interface Media {
  mimetype: string;
  parent_hash: string;
  status: string;
  updatedAt: string;
  media_collection: MediaCollection;
  original_media_url: string;
}

interface MediaCollection {
  low: Quality;
  medium: Quality;
  high: Quality;
}

interface Quality {
  height: number;
  width: number;
  url: string;
}
