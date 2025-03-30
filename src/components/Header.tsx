/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import classNames from 'classnames';
import Image from 'next/image';
import logo from 'public/images/logo.webp';
import { useState } from 'react';

import Button from '@/components/buttons/Button';

/**
 * Main header
 * @author Nur Azizah
 *
 * @returns {JSX.Element}
 */

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      id='header'
      className='top-0 z-50 w-full items-center bg-white py-2 px-6 md:px-[80px] lg:px-[120px] shadow-[0px_1px_3px_0px_#A6AFC366] 2xl:py-4'
    >
      <div className='container flex h-16 justify-between 2xl:h-[33px] w-full'>
        <Image
          src={logo}
          alt='videfly'
          style={{
            objectFit: 'contain',
          }}
          className='w-2/5 lg:w-3/12'
        />
        <div className='hidden lg:flex justify-center lg:w-3/5'>
          <ul className='flex justify-evenly items-center text-xs lg:text-base w-full whitespace-nowrap'>
            <li className='py-0.5 px-1.5 lg:py-2 lg:px-3.5'>Fitur AI</li>
            <li className='py-0.5 px-1.5 lg:py-2 lg:px-3.5'>Cara Kerja</li>
            <li className='py-0.5 px-1.5 lg:py-2 lg:px-3.5'>Harga</li>
            <li className='py-0.5 px-1.5 lg:py-2 lg:px-3.5'>Support</li>
          </ul>
        </div>
        <div className='lg:flex items-center gap-2 lg:gap-4 w-3/12 hidden'>
          <Button variant='primary' size='md'>
            Masuk
          </Button>
          <Button variant='gradient' size='md' className='whitespace-nowrap'>
            Buat Video
          </Button>
        </div>

        <div className='flex mr-2 justify-end items-center w-3/4 lg:hidden'>
          <button onClick={toggleMenu} className='space-y-2'>
            <div
              className={classNames('w-6 h-0.5', {
                'tham tham-e-squeeze tham-w-6': true,
                'tham-active': isMenuOpen,
              })}
            >
              <div className='tham-box'>
                <div className='tham-inner bg-[#545454]' />
              </div>
            </div>
          </button>
        </div>
      </div>

      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white`}>
        <ul className='flex flex-col items-center'>
          <li className='py-2 px-3.5'>Fitur AI</li>
          <li className='py-2 px-3.5'>Cara Kerja</li>
          <li className='py-2 px-3.5'>Harga</li>
          <li className='py-2 px-3.5'>Support</li>
        </ul>

        <div className='flex flex-col justify-center gap-4 py-4'>
          <Button variant='primary' size='md' className='flex justify-center'>
            Masuk
          </Button>
          <Button
            variant='gradient'
            size='md'
            className='flex whitespace-nowrap justify-center'
          >
            Buat Video
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
