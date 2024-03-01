import { NextApiRequest, NextApiResponse } from "next";
import dotenv from "dotenv";
import { Interface } from '@ethersproject/abi';
import { BigNumber } from '@ethersproject/bignumber';
import { Contract, ContractFactory } from '@ethersproject/contracts';
import { Wallet } from '@ethersproject/wallet';
import { JsonRpcProvider } from '@ethersproject/providers';
import { parseEther } from '@ethersproject/units';
import { id } from '@ethersproject/hash';
import vault010 from '../../../lib/blockchain/abis/ethereum/vault010';
dotenv.config();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { userAddress, profileId, amount } = req.body;

    if (req.method === 'OPTIONS' && process.env.NODE_ENV === 'development') {
      res.status(204).end();
      return;
    }
  
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST')
      res.status(405).end('Method Not Allowed')
      return
    }

    if (!userAddress || !profileId || !amount ) {
      throw new Error('No user Address provided');
      const errorResponse = {
        statusCode: 500,
        message: 'No user Address provided' || 'An error occurred',
        success: false,
      };
      res.status(500).json(errorResponse);
    }
    const baseProvider = `${process.env.GOERLI_NETWORK_PROVIDER}`.split(',')

    const provider = new JsonRpcProvider(baseProvider[0])
    const abi = new Interface(vault010.abi);
    const signer = new Wallet(process.env.GOERLI_PRIVATE_KEY, provider);

  try {
    console.log('START CREDITING REWARD ===> ');
    const factory = new ContractFactory(abi, vault010.bytecode, signer)
    const contract = await factory.attach(`${userAddress}`);

    console.log('VAULT/WALLET ADDRESS ===> ', contract.address)    

    const contractrw = new Contract(contract.address, abi, signer);
    console.log(parseEther(amount), contract.address, userAddress, profileId)
    const tx = await contractrw.depositToWallet({value: parseEther(amount)});
    console.log('Chain ID: ', 5);
    console.log('Transaction: ', tx);
    console.log('Wait for the transaction to be mined...');
    await tx.wait();
    console.log('Transaction mined!', signer);


    res.status(200).json({data: { 
      success: true, 
      vaultAddress: contract.address,
      amount: amount
    }});

  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
