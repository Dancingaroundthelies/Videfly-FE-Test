import Image from 'next/image';
import beauty from 'public/brands/beautyhaul.webp';
import blibli from 'public/brands/blibli.webp';
import lazada from 'public/brands/Lazada.webp';
import sociolla from 'public/brands/sociolla.webp';
import sopi from 'public/brands/sopi.webp';
import tiktok from 'public/brands/tiktok.webp';
import tokped from 'public/brands/tokped.webp';
import React from 'react';

import Button from '@/components/buttons/Button';

import next from '~/images/CarbonNextFilled.webp';

/**
 *
 * @author Nur Azizah
 *
 * @returns {JSX.Element}
 */

const ValuePoint = () => {
  const images = [
    { src: lazada, alt: 'lazada' },
    { src: blibli, alt: 'blibli' },
    { src: tokped, alt: 'tokped' },
    { src: sopi, alt: 'sopi' },
    { src: beauty, alt: 'beauty' },
    { src: sociolla, alt: 'sociolla' },
    { src: tiktok, alt: 'tiktok' },
  ];

  return (
    <div className='flex flex-col h-fit px-6 md:px-16 lg:px-[120px] py-12 lg:pt-[100px]'>
      <div className='flex flex-col bg-white justify-center p-6 lg:py-[75px] items-center w-full border border-[#E6E6E6] shadow-custom-shadow rounded-3xl'>
        <div className='flex flex-col gap-10 items-center'>
          <div className='flex flex-col items-center gap-3.5 lg:gap-6'>
            <p className='text-black font-secondary font-extrabold lg:font-bold text-3xl lg:text-5xl text-center'>
              Lebih Produktif, <br className='md:hidden' />
              Lebih Untung, Lebih Hemat!
            </p>
            <p className='text-xs md:text-sm lg:text-lg text-center'>
              Jangan tunggu lagi! Buat video pakai Videfly{' '}
              <br className='md:hidden' /> sekarang,{' '}
              <br className='hidden md:inline lg:hidden' />
              biar cepat, untung besar, dan hemat!
            </p>
          </div>
          <Button
            variant='gradient'
            size='mmd'
            rightIcon={{ src: next, alt: 'next' }}
            className='w-fit h-auto gap-3.5'
          >
            Buat Video
          </Button>
        </div>
        <dl className='flex flex-col md:flex-row justify-between mt-7 md:divide-x-[1px] divide-[#B0B0B0] w-full'>
          <div className='flex flex-col py-6 md:py-0 items-center justify-center gap-y-2 md:gap-y-10 md:w-1/3'>
            <dt className='text-sm lg:text-base text-center font-medium leading-4 md:leading-7'>
              Produktivitas meningkat
            </dt>
            <dd className='gradients'>
              <span className='animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-productivity)] before:content-[counter(num)]'>
                {' '}
                <span className='sr-only'>70</span>%{' '}
              </span>
            </dd>
          </div>
          <div className='flex flex-col py-6 md:py-0 items-center justify-center gap-y-2 md:gap-y-10 md:w-1/3'>
            <dt className='text-sm lg:text-base text-center font-medium leading-4 md:leading-7'>
              Kenaikan ROI
            </dt>
            <dd className='gradients'>
              <span className='animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-roi)] before:content-[counter(num)]'>
                {' '}
                <span className='sr-only'>50</span>%{' '}
              </span>
            </dd>
          </div>
          <div className='flex flex-col py-6 md:py-0 items-center justify-center gap-y-2 md:gap-y-10 md:w-1/3'>
            <dt className='text-sm lg:text-base text-center font-medium leading-4 md:leading-7'>
              Lebih Hemat
            </dt>
            <dd className='gradients'>
              <span className='animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-hemat)] before:content-[counter(num)]'>
                {' '}
                <span className='sr-only'>20</span>x{' '}
              </span>
            </dd>
          </div>
        </dl>
      </div>
      <div className='relative flex flex-col lg:flex-row items-center justify-center gap-3 w-full xl:gap-10 mt-12 grow-0'>
        <div className='w-fit shrink-0 whitespace-nowrap text-sm font-light md:text-base lg:text-lg'>
          Platform yang didukung:
        </div>
        <div
          x-data='{}'
          x-init="$nextTick(() => {
            let ul = $refs.logos;
            ul.insertAdjacentHTML('afterend', ul.outerHTML);
            ul.nextSibling.setAttribute('aria-hidden', 'true');
          })"
          className='relative w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_white_128px,_white_calc(100%-128px),transparent_100%)]'
        >
          <ul
            x-ref='logos'
            className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:h-5 md:[&_img]:h-7 xl:[&_img]:h-12 [&_img]:max-w-fit md:[&_img]:max-w-16 lg:[&_img]:max-w-20 animate-infinite-scroll-left'
          >
            {[...images, ...images].map((image, index) => (
              <li key={index} className=''>
                <Image
                  src={image.src}
                  alt={image.alt}
                  style={{
                    height: 'auto',
                    display: 'flex',
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ValuePoint;
