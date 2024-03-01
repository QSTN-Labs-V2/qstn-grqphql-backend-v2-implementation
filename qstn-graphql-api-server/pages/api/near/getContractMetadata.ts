import * as dotenv from "dotenv";
import { NextApiRequest, NextApiResponse } from "next";
import NearConnect, { nearContract } from "../../../lib/near.config";
dotenv.config();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { seriesId } = req.body;
    if (!seriesId) {
      const errorResponse = {
        statusCode: 500,
        message: 'No seriesId provided' || 'An error occurred',
        success: false,
      };
      return res.status(500).json(errorResponse);
    }

    const address = process.env.NEAR_MAIN_ACCOUNT;

    const nearConnection = await NearConnect("testnet");
    const account = await nearConnection.account(address);
    const contractId = process.env.NEAR_NFT_CONTRACT_ID;

    const contract = await nearContract({
        contractId,
        account,
        viewMethods: ["nft_token", "nft_supply_for_series", "get_series_details"],
        changeMethods: []
    });

  try {
    const seriesArgs = {
        id: Number(seriesId)
    }
    const totalSupply = await contract.nft_supply_for_series(seriesArgs);
    const seriesInfo = await contract.get_series_details(seriesArgs);

    const data ={
      address: contractId, 
      contractMetadata: {
        name: seriesInfo.metadata? seriesInfo.metadata.title : "", 
        symbol: "QSTN", 
        totalSupply
      }, 
      description: seriesInfo.metadata.description,
    }

    return res.status(200).json({data, success: true});
  } catch (err: any) {
    return res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
