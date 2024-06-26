import React from 'react';
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";



const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const loggedIn: User = {
    $id: '123',
    email: 'amogh.firke@gmail.com',
    userId: 'user-123',
    dwollaCustomerUrl: 'https://api.dwolla.com/customers/12345',
    dwollaCustomerId: 'dwolla-customer-12345',
    firstName: 'Amogh',
    lastName: 'Firke',
    address1: '123 Main St',
    city: 'Anytown',
    state: 'Anystate',
    postalCode: '12345',
    dateOfBirth: '1990-01-01',
    ssn: '123-45-6789'
  };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex flex-col w-full h-full">
        <div className="root-layout flex items-center p-4">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <MobileNav user={loggedIn} />
        </div>
        {children}
      </div>
    </main>
  );
}

export default RootLayout;
