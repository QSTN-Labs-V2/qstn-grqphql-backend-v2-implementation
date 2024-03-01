import { NextApiRequest, NextApiResponse } from "next";
import dotenv from "dotenv";
import { Interface } from '@ethersproject/abi';
import { BigNumber } from '@ethersproject/bignumber';
import { Contract, ContractFactory } from '@ethersproject/contracts';
import { Wallet } from '@ethersproject/wallet';
import { JsonRpcProvider } from '@ethersproject/providers';
import { id } from '@ethersproject/hash';
import vault010 from '../../../lib/blockchain/abis/filecoin/vault010';
dotenv.config();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { userAddress } = req.body;

    if (req.method === 'OPTIONS' && process.env.NODE_ENV === 'development') {
      res.status(204).end();
      return;
    }
  
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST')
      res.status(405).end('Method Not Allowed')
      return
    }

    if (!userAddress ) {
      throw new Error('No userAddress provided');
      const errorResponse = {
        statusCode: 500,
        message: 'No userAddress provided' || 'An error occurred',
        success: false,
      };
      res.status(500).json(errorResponse);
    }
    const filecoinProvider = `${process.env.FILECOINCALIB_NETWORK_PROVIDER}`.split(',')

    const provider = new JsonRpcProvider(filecoinProvider[0])
    const abi = new Interface(vault010.abi);
    const signer = new Wallet(process.env.FILECOINCALIB_PRIVATE_KEY, provider);
    // This can be an address or an ENS name
    //const address = process.env.GOERLI_NFT721_CONTRACT;

  try {
    console.log('START DEPLOYING ===> ');
    const factory = new ContractFactory(abi, vault010.bytecode, signer)
    // Deploy, setting total supply to 100 tokens (assigned to the deployer)
    const contract = await factory.deploy([`${userAddress}`], 1);
    //await contract.deployed();
    // The contract is not currentl live on the network yet, however
    // its address is ready for us
    console.log('ADDRESS ===> ', contract.address)    
    // Wait until the contract has been deployed before interacting
    // with it; returns the receipt for the deployemnt transaction
    await contract.deployTransaction.wait();

    const contractrw = new Contract(contract.address, abi, signer);

    /*const tx = await contractrw.transferOwnership(userAddress);
      //setMinting(true);
      console.log('Chain ID: ', 314159);
      console.log('Transaction: ', tx);
      console.log('Wait for the transaction to be mined...');
      await tx.wait();
      console.log('Transaction mined!', signer);*/

    res.status(200).json({data: { 
      success: true, 
      vaultAddress: contract.address,
      ownerAddress: userAddress
    }});

  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
