'use client';

import Image from 'next/image';
import analisis from 'public/images/analisis.webp';
import diamond from 'public/images/diamond.webp';
import edit from 'public/images/edit.webp';
import jadwal from 'public/images/jadwal.webp';
import template from 'public/images/template.webp';
import videourl from 'public/images/videourl.webp';
import React from 'react';

import Button from '@/components/buttons/Button';

/**
 *
 * @author Nur Azizah
 *
 * @returns {JSX.Element}
 */

const Features = () => {
  const features = [
    {
      icon: 'i-line-md-link',
      title: 'Buat Video dari URL',
      description:
        'Cukup masukkan tautan produk atau bisnismu, dan Videfly akan otomatis mengambil informasi serta menghasilkan video siap pakai.',
      image: videourl,
    },
    {
      icon: 'i-carbon-template',
      title: 'Template Siap Pakai',
      description:
        'Tak perlu mendesain dari nol! Gunakan berbagai template yang bisa langsung disesuaikan dengan kebutuhan bisnismu.',
      image: template,
    },
    {
      icon: 'i-streamline-ai-edit-spark',
      title: 'Edit Cepat & Fleksibel',
      description:
        'Sesuaikan konten dengan mudah menggunakan Quick Edit. Ubah gambar, musik, atau elemen lainnya tanpa keahlian editing.',
      image: edit,
    },
    {
      icon: 'i-solar-chart-linear',
      title: 'Analisis & Rekomendasi Cerdas',
      description:
        'Dapatkan insight performa video dengan Videlfy Analytics, lengkap dengan saran improvement untuk konten yang lebih menarik dan efektif.',
      image: analisis,
    },
    {
      icon: 'i-hugeicons-calendar-03',
      title: 'Jadwalkan & Posting Otomatis',
      description:
        'Hemat waktu dengan integrasi media sosial! Langsung jadwalkan dan publikasikan kontenmu ke berbagai platform tanpa perlu pindah aplikasi.',
      image: jadwal,
    },
  ];
  return (
    <div className='flex flex-col h-fit px-6 md:px-16 lg:px-[120px] pt-12 lg:pt-[100px] pb-12 gap-14 lg:gap-20'>
      <div className='flex flex-col justify-center items-center gap-[30px] px-0 lg:px-24'>
        <Button
          variant='outline'
          size='sm'
          leftIcon={diamond.src}
          className='w-fit'
        >
          Features
        </Button>
        <div className='flex flex-col items-center gap-3.5 lg:gap-6'>
          <p className='text-black font-secondary font-extrabold lg:font-bold text-3xl lg:text-5xl text-center'>
            Bagaimana Videfly Membantu Bisnismu?
          </p>
          <p className='gradient font-extrabold lg:font-bold text-3xl lg:text-5xl text-center'>
            Lebih Efisien, Lebih Mudah, Hasil Maksimal!
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-12 md: gap-3'>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col items-center bg-[#F5F5F9] rounded-xl transition-all ${
              index >= 3 ? 'md:col-span-6' : 'md:col-span-4'
            }`}
          >
            <div className='relative w-full'>
              <div className='absolute h-[75px] left-0 right-0 bottom-0 bg-[linear-gradient(182.84deg,rgba(245,245,249,0)_2.36%,#F5F5F9_55.82%)] rounded-t-xl' />
              <Image
                src={feature.image}
                alt={feature.title}
                style={{
                  objectFit: 'contain',
                }}
                className='rounded-t-xl'
              />
            </div>
            <div className='flex flex-col px-6 pb-4 pt-2 gap-3'>
              <div className='flex gap-3 items-center'>
                <i className={`text-black ${feature.icon}`} />
                <h3 className='font-secondary font-bold text-lg text-black'>
                  {feature.title}
                </h3>
              </div>
              <p className='text-sm'>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
