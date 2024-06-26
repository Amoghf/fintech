import React from 'react';
import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';
import BankCard from '@/components/BankCard';

const Home = () => {
  const loggedIn = {
    firstName: 'Amogh',
    lastName: 'Firke',
    email: 'amogh.firke@gmail.com'
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn.firstName || 'Guest'}
            subtext="Access and manage your account and all of your important transactions."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        <div>Recent Transactions</div>
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[
          { currentBalance: 12.50, $id: 'bank1' },
          { currentBalance: 500.50, $id: 'bank2' }
        ]}
      />
    </section>
  );
}

export default Home;
