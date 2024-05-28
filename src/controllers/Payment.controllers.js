import Stripe from 'stripe'
import {STRIPE_PRIVATE_KEY} from '../config.js'

const stripe = new Stripe(STRIPE_PRIVATE_KEY);

export const createSession = async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    product_data: {
                        name: 'Administration',
                        description: 'Apartment',
                    },
                    currency: 'usd',
                    unit_amount: 120000, //120,000.00
                },
                quantity: 1
            },
                {
                    price_data: {
                        product_data: {
                            name: 'Mora',
                            description: 'Apartment',
                        },
                        currency: 'usd',
                        unit_amount: 12000, //12,000.00
                },
                quantity: 1
            }
        ],
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
    })
    return res.json(session)
}