import MonthlySubscriptionCard from '@/components/MonthlySubscriptionCard';

const MonthlySubscription = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>
        <h1 className='text-center text-4xl font-bold my-10'>Pricing </h1>
        <MonthlySubscriptionCard />
      </div>
    </main>
  );
};

export default MonthlySubscription;
