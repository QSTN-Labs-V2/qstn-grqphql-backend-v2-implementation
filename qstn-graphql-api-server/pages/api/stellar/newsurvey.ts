import { NextApiRequest, NextApiResponse } from "next";
import * as dotenv from "dotenv";
import axios from 'axios';
dotenv.config();

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
    const STELLAR_DEPLOYER_URL = 'http://localhost:10003';
    const { recipient, balance } = req.body;
  
    if (!recipient || !balance) {
      const errorResponse = {
        statusCode: 500,
        message: 'No owner info provided' || 'An error occurred',
        success: false,
      };
      res.status(500).json(errorResponse);
      return
    }

    const apiUrl = `${STELLAR_DEPLOYER_URL}/deploy`;

    const response = await axios.post(apiUrl, {
      recipient,
      amount: balance,
      //headers: { Authorization: `Bearer ${API_KEY}` }
    });

    if (response.data.contractId) {
    res.status(200).json({data: { 
      success: true, 
      contractAddress: response.data.contractId,
      ownerAddress: recipient
    }});
  }

  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;