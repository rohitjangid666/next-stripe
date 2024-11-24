import type { Metadata } from 'next';

import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home | Next.js + TypeScript Example',
};

const Home = () => {
  return (
    <ul className='card-list'>
      <li>
        <Link href='/donate-with-embedded-checkout' className='card checkout-style-background'>
          <h2 className='bottom'>Donate with embedded Checkout</h2>
          <img src='https://nextjs-typescript-react-stripe-js.vercel.app/checkout-one-time-payments.svg' alt='' />
        </Link>
      </li>
      <li>
        <Link href='/donate-with-checkout' className='card checkout-style-background'>
          <h2 className='bottom'>Donate with hosted Checkout</h2>
          <img src='https://nextjs-typescript-react-stripe-js.vercel.app/checkout-one-time-payments.svg' alt='' />
        </Link>
      </li>
      <li>
        <Link href='/donate-with-elements' className='card elements-style-background'>
          <h2 className='bottom'>Donate with Elements</h2>
          <img src='https://nextjs-typescript-react-stripe-js.vercel.app/elements-card-payment.svg' alt='' />
        </Link>
      </li>
    </ul>
  );
};

export default Home;
