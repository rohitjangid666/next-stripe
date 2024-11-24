'use server';

import type { Stripe } from 'stripe';

import { headers } from 'next/headers';

import { CURRENCY } from '@/config';
import { formatAmountForStripe } from '@/utils/stripe-helpers';
import { stripe } from '@/lib/stripe';

export async function createCheckoutSession(
  data: FormData
): Promise<{ client_secret: string | null; url: string | null }> {
  const ui_mode = data.get('uiMode') as Stripe.Checkout.SessionCreateParams.UiMode;

  const origin: string = (await headers()).get('origin') as string;

  if (!origin) {
    return { client_secret: null, url: null };
  }

  const sessionParams: Stripe.Checkout.SessionCreateParams = {
    mode: 'payment',
    submit_type: 'donate',
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: CURRENCY,
          product_data: {
            name: 'Custom amount donation',
          },
          unit_amount: formatAmountForStripe(Number(data.get('customDonation') as string), CURRENCY),
        },
      },
    ],
    ...(ui_mode === 'hosted' && {
      success_url: `${origin}/donate-with-checkout/result?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/donate-with-checkout`,
    }),
    ...(ui_mode === 'embedded' && {
      return_url: `${origin}/donate-with-embedded-checkout/result?session_id={CHECKOUT_SESSION_ID}`,
    }),
    ui_mode,
  };

  try {
    const session: Stripe.Checkout.Session = await stripe.checkout.sessions.create(sessionParams);

    return {
      client_secret: session.client_secret || null,
      url: session.url || null,
    };
  } catch (error) {
    console.error('Error creating checkout session:', error);

    return { client_secret: null, url: null };
  }
}

export async function createPaymentIntent(data: FormData): Promise<{ client_secret: string }> {
  const paymentIntent: Stripe.PaymentIntent = await stripe.paymentIntents.create({
    amount: formatAmountForStripe(Number(data.get('customDonation') as string), CURRENCY),
    automatic_payment_methods: { enabled: true },
    currency: CURRENCY,
  });

  return { client_secret: paymentIntent.client_secret as string };
}