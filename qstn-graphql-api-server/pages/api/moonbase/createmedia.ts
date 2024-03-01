import { NextApiRequest, NextApiResponse } from "next";
import dotenv from "dotenv";
import { Interface } from '@ethersproject/abi';
import { BigNumber } from '@ethersproject/bignumber';
import { Contract } from '@ethersproject/contracts';
import { Wallet } from '@ethersproject/wallet';
import { JsonRpcProvider } from '@ethersproject/providers';
import { id } from '@ethersproject/hash';
import erc721abi from '../../../lib/blockchain/abis/moonbeam/erc721.json';
dotenv.config();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { userAddress, tokenURI } = req.body;

    if (req.method === 'OPTIONS' && process.env.NODE_ENV === 'development') {
      res.status(204).end();
      return;
    }
  
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST')
      res.status(405).end('Method Not Allowed')
      return
    }

    if (!userAddress || !tokenURI ) {
      throw new Error('No userAddress or tokenURI provided');
      const errorResponse = {
        statusCode: 500,
        message: 'No userAddress or tokenURI provided' || 'An error occurred',
        success: false,
      };
      res.status(500).json(errorResponse);
    }
    const moonbeamProvider = `${process.env.MOONBASEALPHA_NETWORK_PROVIDER}`.split(',')

    const provider = new JsonRpcProvider(moonbeamProvider[0])
    const abi = new Interface(erc721abi);
    const signer = new Wallet(process.env.MOONBASE_NFT_ACCOUNT_PRIVATE_KEY, provider);
    // This can be an address or an ENS name
    const address = process.env.MOONBASE_NFT721_CONTRACT;

  let erc721: any = {};
  if (address && abi && provider) {
    erc721 = new Contract(address, abi, provider);
    //console.log(erc721)
    erc721.name().then(function (result) {
      console.log('Token Name ===> ', result);
    })

  }

  const tokenAddress = address;
  const tokenName = 'QSTN Genesis';
  const tokenDescription = "QSTN Genesis Collection";


  try {

    const erc721rw = new Contract(tokenAddress, abi, signer);
    const filter = { address: tokenAddress, topics: [ id('Transfer(address,address,uint256)'), ], };

    erc721rw.mintItem(userAddress, tokenURI).then(async function (tx) {
      //setMinting(true);
      console.log('Chain ID: ', 1287);
      console.log('Transaction: ', tx);
      console.log('Wait for the transaction to be mined...');
      await tx.wait();
      console.log('Transaction mined!', signer); 
    });

    erc721rw.on(filter, async (from, to, value, event) => { 
      console.log(`Transfer of ${value} tokens from ${from} to ${to}`);
      const tokenBalance = await erc721.balanceOf(to);
      console.log('Token Balance: ', tokenBalance);

      res.status(200).json({data: { 
        success: true, tokenId: BigNumber.from(value).toNumber(),
        userAddress: to, 
        tokenBalance: BigNumber.from(tokenBalance).toNumber()
      }});

      return;
    });


  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
