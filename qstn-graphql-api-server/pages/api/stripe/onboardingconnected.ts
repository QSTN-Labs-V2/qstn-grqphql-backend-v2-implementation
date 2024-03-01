import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import dotenv from "dotenv";
dotenv.config();

const API_SERVER_URL = process.env.API_SERVER_URL;
const APP_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' :  'https://qstnus.com'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    // https://github.com/stripe/stripe-node#configuration
    apiVersion: '2022-11-15'
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {

    if (req.method === 'OPTIONS' && process.env.NODE_ENV === 'development')
    res.status(204).end();

    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST')
      res.status(405).end('Method Not Allowed')
      return
    }

    const { stripeAccountId, profileId } = req.body;

    try {
      
        const accountLink = await stripe.accountLinks.create({
          account: stripeAccountId,
          refresh_url: `${APP_URL}/u/${profileId}/balance/reauth`,
          return_url: `${APP_URL}/u/${profileId}/balance?onboarding=true`,
          type: 'account_onboarding',
        });

        res.status(200).json({data: accountLink, sucess: true, statusCode: 200})
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Error creating connected account'
      res.status(500).json({ statusCode: 500, message: errorMessage })
    }


}