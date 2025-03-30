/* eslint-disable unused-imports/no-unused-vars */

'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { ImSpinner2 } from 'react-icons/im';

import Button from '@/components/buttons/Button';

import diamond from '~/images/diamond.webp';
import emina from '~/images/emina.webp';
import headphone from '~/images/headphone.webp';
import hero from '~/images/hero.webp';
import pashmina from '~/images/pashmina.webp';
import result from '~/images/result.webp';

/**
 *
 * @author Nur Azizah
 *
 * @returns {JSX.Element}
 */

const Hero = () => {
  const [url, setUrl] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isHeroLoading, setIsHeroLoading] = useState(false);
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [isIconLoading, setIsIconLoading] = useState(false);

  const handleUrlChange = (link: string) => {
    setUrl(link);
    setIsOpen(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsFormVisible(true);
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsHeroLoading(true);
    }, 2000);
  };

  useEffect(() => {
    if (isHeroLoading) {
      setIsIconLoading(true);
    }
  }, [isHeroLoading]);

  useEffect(() => {
    if (isIconLoading) {
      setTimeout(() => {
        setIsIconLoading(false);
        setIsResultVisible(true);
      }, 2000);
    }
  });

  const links = [
    {
      image: emina,
      title: 'Emina Bright Stuff Moisturizing Cream',
      link: 'https://www.tokopedia.com/emina-official/emina-bright-stuff-for-acne-prone-skin-moisturizing-cream-20-ml?extParam=ivf%3Dtrue%26keyword%3Demina+bright+stuff+moisturizing+cream&src=topads',
    },
    {
      image: headphone,
      title: 'Headphone Bluetooth Soundcore Space One',
      link: 'https://www.tokopedia.com/soundcorebyanker/headphone-bluetooth-soundcore-space-one-a3035-white-1151d?extParam=ivf%3Dfalse%26keyword%3Dheadset%26search_id%3D20250226015328D7D0456FDA42B41B1P1W%26src%3Dsearch',
    },
    {
      image: pashmina,
      title: 'Pashmina Voal Premium Size 180 x 70cm',
      link: 'https://www.tokopedia.com/archive-wmdfashion/pashmina-voal-premium-size-180x70cm-wmd-fashion-beige-3c805?extParam=ivf%3Dfalse%26keyword%3Dfashion%26search_id%3D20250226015701681E94924AFA0A0B7KZQ%26src%3Dsearch',
    },
  ];

  return (
    <div className='hero flex flex-col h-fit px-6 md:px-16 lg:px-[120px] lg:py-28 pb-12 gap-14 lg:gap-20'>
      {!isHeroLoading ? (
        <div className='bg-white flex justify-center rounded-3xl pl-10 gap-14 w-full'>
          <div
            id='wrap'
            className='w-6/12 flex flex-col gap-3.5 lg:gap-14 py-12'
          >
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-3'>
                <Button
                  variant='outline'
                  size='sm'
                  leftIcon={diamond.src}
                  className='w-fit'
                >
                  Live Demo
                </Button>
                <p className='text-black font-secondary font-extrabold lg:font-bold text-3xl lg:text-5xl'>
                  Coba Fitur URL to Video <br />
                  <span className='gradient'>Tanpa Biaya!</span>
                </p>
              </div>
              <p>
                Masukkan URL, ubah jadi video dalam hitungan detik. <br /> Mudah
                dan gratis!
              </p>
            </div>
            {!isFormVisible ? (
              <form
                onSubmit={handleFormSubmit}
                className='flex w-full max-w-full items-center gap-3'
              >
                <div className='w-4/5 relative flex-grow-0'>
                  <button
                    type='button'
                    onClick={() => setIsOpen(!isOpen)}
                    className='relative pl-4 w-full max-w-full py-3 border-[1.5px] pr-7 text-[#B0B0B0] text-sm border-[#703BE7] rounded-lg focus:ring-1 focus:ring-[#703BE7] flex gap-2 items-center'
                  >
                    <i className='i-line-md-link text-[#8A8A8A] pr-4' />
                    <span className='whitespace-nowrap text-clip overflow-hidden text-[#B0B0B0]'>
                      {url ? `${url}` : 'Pilih Link URL Product'}
                    </span>
                    <i className='absolute right-2 top-1/2 transform -translate-y-1/2 i-cuida-caret-down-outline' />
                  </button>
                  {isOpen && (
                    <div className='absolute w-full mt-4 bg-white border border-[#E6E6E6] shadow-md rounded-lg z-10'>
                      {links.map((link, index) => (
                        <div
                          key={index}
                          className='flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer'
                          onClick={() => handleUrlChange(link.link)}
                        >
                          <Image
                            src={link.image}
                            alt={link.title}
                            width={24}
                            height={24}
                            className='rounded-md'
                          />
                          <div className='flex flex-col gap-1 overflow-hidden'>
                            <span className='text-sm text-black font-semibold'>
                              {link.title}
                            </span>
                            <p className='text-xs overflow-hidden text-ellipsis whitespace-nowrap'>
                              {link.link}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <Button
                  variant='submit'
                  size='md'
                  type='submit'
                  isLoading={isLoading}
                  className='whitespace-nowrap w-1/5'
                >
                  Analisa
                </Button>
              </form>
            ) : (
              <div className='w-full'>
                <form onSubmit={handleSubmit}>
                  <div className='flex flex-col gap-6'>
                    <div className='flex flex-col'>
                      <label className='text-gray-700'>
                        Nama<span className='text-red-500'>*</span>
                      </label>
                      <input
                        type='text'
                        placeholder='contoh: John Doe'
                        className='px-4 py-2 border-t-0 border-r-0 border-l-0 border-b-gray-300'
                        required
                      />
                    </div>
                    <div className='flex gap-6 w-full'>
                      <div className='flex flex-col w-full'>
                        <label className='text-gray-700'>
                          Email<span className='text-red-500'>*</span>
                        </label>
                        <input
                          type='email'
                          placeholder='nama@email.com'
                          className='px-4 py-2 border-t-0 border-r-0 border-l-0 border-b-gray-300'
                          required
                        />
                      </div>
                      <div className='flex flex-col w-full'>
                        <label className='text-gray-700'>
                          Label<span className='text-red-500'>*</span>
                        </label>
                        <input
                          type='text'
                          placeholder='+62'
                          className='px-4 py-2 border-t-0 border-r-0 border-l-0 border-b-gray-300'
                          required
                        />
                      </div>
                    </div>
                    <div className='flex gap-2 items-center'>
                      <input
                        type='checkbox'
                        id='agreement'
                        className='h-5 w-5 rounded-md'
                      />
                      <label htmlFor='agreement' className='text-sm'>
                        Dengan mendaftar, saya menyatakan telah membaca dan
                        menyetujui{' '}
                        <span className='text-indigo-500'>
                          Syarat dan Ketentuan
                        </span>{' '}
                        dan{' '}
                        <span className='text-indigo-500'>
                          Kebijakan Privasi
                        </span>{' '}
                        Videlfy
                      </label>
                    </div>
                    <Button
                      variant='submit'
                      size='md'
                      type='submit'
                      isLoading={isLoading}
                      className='w-fit '
                    >
                      Kirim
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </div>
          <div className='w-6/12'>
            <Image
              src={hero}
              alt='hero'
              style={{
                objectFit: 'contain',
              }}
              priority
              className='rounded-b-3xl'
            />
          </div>
        </div>
      ) : (
        <>
          {isIconLoading ? (
            <div className='bg-white flex justify-center items-center rounded-3xl py-80'>
              <div className='text-[#8D62EC]'>
                <ImSpinner2 size={48} className='animate-spin text-[#8D62EC]' />
              </div>
            </div>
          ) : (
            <div className='bg-white flex flex-col rounded-3xl gap-10'>
              <div className='flex flex-col gap-6'>
                <div className='pt-8 flex flex-col gap-2'>
                  <p className='text-black font-secondary font-extrabold lg:font-bold text-3xl lg:text-5xl text-center'>
                    Videomu Sudah Siap!
                  </p>
                  <p className='text-xs md:text-sm lg:text-lg text-center'>
                    Yuk, coba jadwalkan demo untuk bikin video tanpa batas
                    dengan semua fitur lengkap. <br />
                    Butuh yang lebih fleksibel? Lihat paket harga yang sesuai
                    dengan kebutuhanmu!
                  </p>
                </div>
                <div className='flex items-center justify-center gap-4'>
                  <Button variant='border' size='md'>
                    Liat Pricing
                  </Button>
                  <Button variant='submit' size='md'>
                    Jadwalkan Demo
                  </Button>
                </div>
              </div>
              <Image
                src={result}
                alt='result'
                style={{
                  objectFit: 'contain',
                }}
                priority
                className='rounded-b-3xl'
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Hero;
