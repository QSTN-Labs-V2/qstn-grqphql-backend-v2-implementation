import { NextApiRequest, NextApiResponse } from "next";
//import { HttpAgent, Actor } from "@dfinity/agent";
//import { Principal } from "@dfinity/principal";
//import { idlFactory } from '../../../lib/blockchain/icp/cmc/cmc.utils.did.mjs';
//import { idlFactory } from '../../../lib/blockchain/icp/nft/dip721.did';
import axios from 'axios';
import dotenv from "dotenv";
dotenv.config();

/*const icpDip721Mint = async (principal: string) => {
	const agent = new HttpAgent({ axios, host: "http://127.0.0.1:8000" });

  // Fetch root key for certificate validation during development
  if (process.env.DFX_NETWORK !== "ic") {
    agent.fetchRootKey().catch((err) => {
      console.warn(
        "Unable to fetch root key. Check to ensure that your local replica is running"
      );
      console.error(err);
    });
  }

	const actor = Actor.createActor(idlFactory, {
		agent,
		canisterId: "dfdal-2uaaa-aaaaa-qaama-cai"
	});

  /*"Invalid vec record {
    data:vec nat8; 
    key_val_data:vec record {
      key:text; 
      val:variant {
        Nat64Content:nat64; 
        Nat32Content:nat32; 
        Nat8Content:nat8; 
        NatContent:nat; 
        Nat16Content:nat16; 
        BlobContent:vec nat8; 
        TextContent:text}}; 
        purpose:variant {
          Preview; Rendered
        }} argument: \"BigInt(1)\"\n\n"* /

  const data = [
    [
      "description",
      {
        TextContent: `QSNT Survey One to One genesis`,
      },
    ],
    [
      "tag",
      {
        TextContent: `qstn`,
      },
    ],
    /*[
      "thumbnail",
      {
        TextContent: `http://${assetCanisterId}.localhost:8000/${uploadedThumbnailPath}`,
      },
    ],* /
    ["contentType", { TextContent: 'text/plain' }]
    ["locationType", { Nat8Content: 4 }],
    ["purpose", { Preview: null, Rendered: null }]
  ];

  return true;
  const idx = 1
  const mintResult = await actor.mintDip721(Principal.fromText(principal), { data });
  console.log("result: ", mintResult);
  const metaResult = await actor.tokenMetadata(0n);
  console.log("new token info: ", metaResult);
  console.log(
    "token metadata: ",
    prettier.format(
      JSON.stringify(metaResult, (key, value) =>
        typeof value === "bigint" ? value.toString() : value
      ),
      { parser: "json" }
    )
  );


};*/

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



  try {
    //const result = await icpDip721Mint(userAddress)
    res.status(200).json({data: { success: true, result: false}});

  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
