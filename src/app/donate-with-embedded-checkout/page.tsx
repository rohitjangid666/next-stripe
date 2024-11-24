import type { Metadata } from 'next';

import CheckoutForm from '@/components/CheckoutForm';

export const metadata: Metadata = {
  title: 'Donate with embedded Checkout | Next.js + TypeScript Example',
};

const DonateWithEmbeddedCheckout = (): JSX.Element => {
  return (
    <div className='page-container'>
      <h1>Donate with embedded Checkout</h1>
      <p>Donate to our project 💖</p>
      <CheckoutForm uiMode='embedded' />
    </div>
  );
};

export default DonateWithEmbeddedCheckout;
