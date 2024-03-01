import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

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

    const { profileId, appUrl } = req.body;

    try {
        const account = await stripe.accounts.create({
            country: 'US',
            type: 'express',
            capabilities: {
              card_payments: {
                requested: true,
              },
              transfers: {
                requested: true,
              },
            },
            business_type: 'individual',
            business_profile: {
                url: `${appUrl}/u/${profileId}`,
            },
          });

        res.status(200).json({data: account, sucess: true, statusCode: 200})
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Error creating connected account'
      res.status(500).json({ statusCode: 500, message: errorMessage })
    }


}