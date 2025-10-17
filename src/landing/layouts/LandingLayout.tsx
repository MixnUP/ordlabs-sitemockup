import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

interface LandingLayoutProps {
  children: React.ReactNode;
}

const LandingLayout: React.FC<LandingLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <div className="sticky top-0 z-50 w-full">
        <Navbar />
      </div>
      <main className="flex-grow mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
