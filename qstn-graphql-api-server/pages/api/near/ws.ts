import WebSocket from 'ws';
import { NextApiRequest, NextApiResponse } from "next";

let globalIndex = 0;

const nftFilter = [{
  status: "SUCCESS",
  event: {
    standard: "nep171",
    event: "nft_mint",
  },
}, {
  status: "SUCCESS",
  event: {
    standard: "nep171",
    event: "nft_transfer",
  },
}];

function processEvent(event) {
    console.log('OWNER DATA', event.event.data)

    return (event?.event?.data[0]?.token_ids || []).map((tokenId) => ({
      time: new Date(parseFloat(event.block_timestamp) / 1e6),
      contractId: event.account_id,
      ownerId: event.event.data[0].owner_id,
      tokenId,
      isTransfer: event.event.event === "nft_transfer",
      index: globalIndex++,
    }));
  }

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const success = true
    const ws = new WebSocket("wss://events.near.stream/ws");

    ws.onopen = () => {
      console.log(`Connection to WS has been established`);
      ws.send(
        JSON.stringify({
          secret: "ohyeahnftsss",
          filter: nftFilter,
          fetch_past_events: 20,
        })
      );
    };
    ws.onclose = () => {
      console.log(`WS Connection has been closed`);
      //scheduleReconnect(1);
    };
    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      //processEvents(data.events);
      data?.events.map((event) => {
        console.log(processEvent(event))
      })

    };
    ws.onerror = (err) => {
      console.log("WebSocket error", err);
    };

    res.status(200).json({success});
    
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
