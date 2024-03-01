import { NextApiRequest, NextApiResponse } from "next";
import * as dotenv from "dotenv";
import axios from 'axios';
dotenv.config();

const chainId = Number(process.env.POLYGON_CHAIN_ID);
const contractAddress = process.env.POLYGON_CONTRACT_ADDRESS
const dappAPIKey = process.env.POLYGON_BICONOMY_API_KEY;
const privateKey = process.env.POLYGON_PRIVATE_KEY;
const rpcUrl = process.env.POLYGON_RPC_URL;
const bundlerUrl = process.env.POLYGON_BUNDLER_URL;
const biconomyPaymasterUrl = process.env.POLYGON_BICONOMY_PAYMASTER_URL;
const accountIndex = Number(process.env.POLYGON_ACCOUNT_INDEX);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'OPTIONS' && process.env.NODE_ENV === 'development') {
      res.status(204).end();
      return;
    }
  
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST')
      res.status(405).end('Method Not Allowed')
      return
    }


    try {
    const BICONOMY_SERVER_URL = 'http://localhost:9001';
    const { tokenURI, userAddress } = req.body;
  
    if (!tokenURI || !userAddress) {
      const errorResponse = {
        statusCode: 500,
        message: 'No token info provided' || 'An error occurred',
        success: false,
      };
      res.status(500).json(errorResponse);
      return
    }

    const apiUrl = `${BICONOMY_SERVER_URL}/mint`;

    const response = await axios.post(apiUrl, {
      userAddress,
      tokenURI,
      //headers: { Authorization: `Bearer ${API_KEY}` }
    });

    res.status(200).json(response.data);

  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;