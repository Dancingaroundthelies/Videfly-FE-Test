'use client';

import Image from 'next/image';
import content1 from 'public/images/content1.webp';
import content2 from 'public/images/content2.webp';
import content3 from 'public/images/content3.webp';
import diamond from 'public/images/diamond.webp';
import React, { useState } from 'react';

import Button from '@/components/buttons/Button';

/**
 *
 * @author Nur Azizah
 *
 * @returns {JSX.Element}
 */

const ValuePoint = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (step: number) => {
    setActiveStep(step);
  };

  const getImageForStep = () => {
    switch (activeStep) {
      case 1:
        return content1;
      case 2:
        return content2;
      case 3:
        return content3;
      default:
        return content1;
    }
  };

  return (
    <div className='flex flex-col h-fit px-6 md:px-16 lg:px-[120px] pt-12 lg:pt-[100px] pb-12 gap-14 lg:gap-20'>
      <div className='flex flex-col justify-center items-center gap-[30px] px-0 lg:px-24'>
        <Button
          variant='outline'
          size='sm'
          leftIcon={diamond.src}
          className='w-fit'
        >
          Tutorial
        </Button>
        <div className='flex flex-col items-center gap-3.5 lg:gap-6'>
          <p className='text-black font-secondary font-extrabold lg:font-bold text-3xl lg:text-5xl text-center'>
            Buat Konten Menarik Untuk Bisnismu
          </p>
          <p className='gradient font-extrabold lg:font-bold text-3xl lg:text-5xl text-center'>
            Dalam 3 Langkah Mudah!
          </p>
        </div>
      </div>
      <div className='flex w-full flex-col lg:flex-row items-center justify-center gap-9 lg:gap-0'>
        <div className='lg:w-1/2 h-full bg-[#F5F5F9] p-9 lg:p-[60px] border border-[#E6E6E6] rounded-3xl min-h-28'>
          <div className='bg-white rounded-2xl'>
            <Image
              src={getImageForStep()}
              alt='videfly'
              style={{
                objectFit: 'contain',
              }}
              className='border border-[#E6E6E6] rounded-2xl transition-opacity duration-500 ease-in-out'
            />
          </div>
        </div>
        <div className='lg:w-1/2'>
          <div className='space-y-4 lg:py-6 lg:pl-14 lg:space-y-9'>
            <button
              className={`flex flex-col group p-4 gap-3 rounded-3xl border border-[#E6E6E6]/90 hover:border-[#9747FF] active:border-[#9747FF] cursor-pointer ${
                activeStep === 1 ? 'border-[#9747FF]' : 'border-[#E6E6E6]/90'
              }`}
              onClick={() => handleStepClick(1)}
            >
              <p
                className={`btn-gradient text-start ${
                  activeStep === 1
                    ? 'bg-primary-gradient bg-clip-text text-transparent'
                    : ''
                }`}
              >
                Step 1 - Masukkan URL
              </p>
              <p className='text-start text-xs md:text-sm'>
                Cukup Tempelkan tautan produk atau bisnis Anda, dan sistem kami
                akan secara otomatis mengambil informasi penting untuk memulai.
              </p>
            </button>
            <button
              className={`flex flex-col group p-4 gap-3 rounded-3xl border border-[#E6E6E6]/90 hover:border-[#9747FF] active:border-[#9747FF] cursor-pointer ${
                activeStep === 2 ? 'border-[#9747FF]' : 'border-[#E6E6E6]/90'
              }`}
              onClick={() => handleStepClick(2)}
            >
              <p
                className={`btn-gradient text-start ${
                  activeStep === 2
                    ? 'bg-primary-gradient bg-clip-text text-transparent'
                    : ''
                }`}
              >
                Step 2 - Konfirmasi Informasi & Personalisasi
              </p>
              <p className='text-start text-xs md:text-sm'>
                Periksa detail produk yang diambil, tambahkan sentuhan unik, dan
                pilih gaya yang sesuai dengan brand Anda.
              </p>
            </button>
            <button
              className={`flex flex-col group p-4 gap-3 rounded-3xl border border-[#E6E6E6]/90 hover:border-[#9747FF] active:border-[#9747FF] cursor-pointer ${
                activeStep === 3 ? 'border-[#9747FF]' : 'border-[#E6E6E6]/90'
              }`}
              onClick={() => handleStepClick(3)}
            >
              <p
                className={`btn-gradient text-start ${
                  activeStep === 3
                    ? 'bg-primary-gradient bg-clip-text text-transparent'
                    : ''
                }`}
              >
                Step 3 - Generate & Dapatkan Hasilnya
              </p>
              <p className='text-start text-xs md:text-sm'>
                Dalam hitungan detik, dapatkan konten bisnis yang siap
                digunakan—efektif, menarik, dan profesional!
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuePoint;
