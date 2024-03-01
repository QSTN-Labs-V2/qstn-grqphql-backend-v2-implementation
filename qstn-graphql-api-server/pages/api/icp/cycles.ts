import { NextApiRequest, NextApiResponse } from "next";
import { HttpAgent, Actor } from "@dfinity/agent";
//import { idlFactory } from '../../../lib/blockchain/icp/cmc/cmc.utils.did.mjs';
//import idlLedger from '../../../lib/blockchain/icp/ledger.did';
import axios from 'axios';
import dotenv from "dotenv";
dotenv.config();


/*const icpDfxBalance = async () => {
	const agent = new HttpAgent({ axios, host: "http://127.0.0.1:8000" });

	const actor = Actor.createActor(idlLedger, {
		agent,
		canisterId: "ryjl3-tyaaa-aaaaa-aaaba-cai"
	});

	const { e8s } = await actor.account_balance_dfx({ account: '31d6c36f5e125260d70c8b7501006cad5aff6c1abf5104f0b89cda733f6af8b3'});

	const CYCLES_PER_XDR = BigInt(1_000_000_000_000);
    console.log('DATA', e8s)
	// Return conversion rate in trillion ratio
	return e8s.toString();
};*/

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    //const { userAddress, tokenURI } = req.body;

    if (req.method === 'OPTIONS' && process.env.NODE_ENV === 'development') {
      res.status(204).end();
      return;
    }
  
    /*if (req.method !== 'POST') {
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
    }*/

  try {
    const balance = 0;//await icpDfxBalance()

    res.status(200).json({data: { success: true, balance: balance }});

  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
