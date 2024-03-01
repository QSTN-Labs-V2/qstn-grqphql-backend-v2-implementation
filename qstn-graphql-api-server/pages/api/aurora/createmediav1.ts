import { NextApiRequest, NextApiResponse } from "next";
import dotenv from "dotenv";
import { Interface } from '@ethersproject/abi';
import { BigNumber } from '@ethersproject/bignumber';
import { Contract } from '@ethersproject/contracts';
import { Wallet } from '@ethersproject/wallet';
import { JsonRpcProvider } from '@ethersproject/providers';
import erc721abi from '../../../lib/blockchain/abis/aurora/erc721.json';
dotenv.config();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { userAddress, title, description, media, copies } = req.body;

    if (!userAddress ) {
      throw new Error('No userAddress provided');
      const errorResponse = {
        statusCode: 500,
        message: 'No userAddress provided' || 'An error occurred',
        success: false,
      };
      res.status(500).json(errorResponse);
    }

    const provider = new JsonRpcProvider(process.env.AURORATESTNET_NETWORK_PROVIDER)
    const abi = new Interface(erc721abi);
    const signer = new Wallet(process.env.AURORA_NFT_ACCOUNT_PRIVATE_KEY, provider);
    // This can be an address or an ENS name
    const address = process.env.AURORA_NFT721_CONTRACT;
  // Read-Only; By connecting to a Provider, allows:
  // - Any constant function
  // - Querying Filters
  // - Populating Unsigned Transactions for non-constant methods
  // - Estimating Gas for non-constant (as an anonymous sender)
  // - Static Calling non-constant methods (as anonymous sender)
  let erc721: any = {};
  if (address && abi && provider) {
    erc721 = new Contract(address, abi, provider);
    console.log(erc721)
    erc721.name().then(function (result) {
      console.log('Token Name ===> ', result);
    })
    /*erc721.currentTokenId().then(function (result) {
       console.log('Token ID ===> ', result);
      if (result) {
        const _result = BigNumber.from(result).toNumber() + 1;
        console.log('Token ID dec ===> ', _result);
        //setTokenId(_result);
        //setId(_result);
      }
    });*/
  }

  const tokenAddress = address;
  const tokenURI = 'https://bafkreidt35us57z3b6ci22gigt72ktyjhusxemie3bbhbexe6u52dbybz4.ipfs.nftstorage.link';
  const tokenName = 'QSTN Genesis';
  const tokenDescription = "QSTN Genesis Collection";


  try {
    // Read-Write; By connecting to a Signer, allows:
    // - Everything from Read-Only (except as Signer, not anonymous)
    // - Sending transactions for non-constant functions
    const erc721rw = new Contract(tokenAddress, abi, signer);

    erc721rw.safeMint(userAddress, tokenURI, { gasLimit: 120 * 1000000000 }).then(async function (tx) {
      //setMinting(true);
      console.log('Chain ID: ', 1313161555);
      console.log('Transaction: ', tx);
      console.log('Wait for the transaction to be mined...');
      await tx.wait();
      console.log('Transaction mined!', signer);
      // Get the token ID
      const tokenId = await erc721rw.tokenOfOwnerByIndex(userAddress, 0);
              console.log("Token ID: ", tokenId);
              // Get the token URI
              const tokenURI = await erc721.tokenURI(tokenId);
              console.log("Token URI: ", tokenURI);
              // Get the token name
              const tokenName = await erc721.name(tokenId);
              console.log("Token Name: ", tokenName);
              // Get the token description
              const tokenDescription = await erc721.tokenURI(tokenId);
              console.log("Token Description: ", tokenDescription);
              // Get the token owner
              const tokenOwner = await erc721.ownerOf(tokenId);
              console.log("Token Owner: ", tokenOwner);
      // Get the token balance
      const tokenBalance = await erc721.balanceOf(userAddress);
      console.log('Token Balance: ', tokenBalance);
    });

  res.status(200).json({data: { success: true}});

  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
