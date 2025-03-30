import React from 'react';

import Features from '@/components/Features';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Tutorial from '@/components/Tutorial';
import ValuePoint from '@/components/ValuePoint';

export const revalidate = 60;

const Home = () => {
  return (
    <>
      <Header />
      <main className='min-h-[calc(100vh_-_124px)] pb-7 lg:pb-[61px] 2xl:mt-[65px] 2xl:min-h-[calc(100vh_-_145px)]'>
        <div className='container flex flex-col justify-between pb-2 2xl:py-5'>
          <Hero />
          <Features />
          <Tutorial />
          <ValuePoint />
        </div>
      </main>
    </>
  );
};

export default Home;
