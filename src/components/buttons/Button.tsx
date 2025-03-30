/* eslint-disable unused-imports/no-unused-vars */

import { LucideIcon } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import * as React from 'react';
import { IconType } from 'react-icons';
import { ImSpinner2 } from 'react-icons/im';

import { cn } from '@/lib/utils';

const ButtonVariant = [
  'primary',
  'gradient',
  'outline',
  'submit',
  'border',
] as const;
const ButtonSize = ['sm', 'md', 'mmd', 'base'] as const;

type ButtonProps = {
  isLoading?: boolean;
  variant?: (typeof ButtonVariant)[number];
  size?: (typeof ButtonSize)[number];
  leftIcon?:
    | IconType
    | LucideIcon
    | string
    | { src: string; alt: string }
    | { src: StaticImageData; alt: string };
  rightIcon?:
    | IconType
    | LucideIcon
    | string
    | { src: string; alt: string }
    | { src: StaticImageData; alt: string };
  classNames?: {
    leftIcon?: string;
    rightIcon?: string;
  };
} & React.ComponentPropsWithRef<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = 'primary',
      size = 'base',
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      classNames,
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    const renderIcon = (
      Icon:
        | IconType
        | LucideIcon
        | string
        | { src: string; alt: string }
        | { src: StaticImageData; alt: string }
        | undefined,
      isLeft: boolean
    ) => {
      if (typeof Icon === 'string') {
        return (
          <div
            className={cn([
              size === 'base' && 'mr-1',
              size === 'sm' && 'mr-1.5',
              isLeft ? 'mr-2' : 'ml-2',
            ])}
          >
            <Image src={Icon} alt='icon' className='rounded-md' />
          </div>
        );
      } else if (React.isValidElement(Icon)) {
        return (
          <div
            className={cn([
              size === 'base' && 'mr-1',
              size === 'sm' && 'mr-1.5',
              isLeft ? 'mr-2' : 'ml-2',
            ])}
          >
            {Icon}
          </div>
        );
      } else if (
        Icon &&
        (Icon as { src: string | StaticImageData; alt: string }).src
      ) {
        const { src, alt } = Icon as {
          src: string | StaticImageData;
          alt: string;
        };
        return (
          <div
            className={cn([
              size === 'base' && 'mr-1',
              size === 'sm' && 'mr-1.5',
              isLeft ? 'mr-2' : 'ml-2',
            ])}
          >
            <Image
              src={src}
              alt={alt}
              width={24}
              height={24}
              className='rounded-md'
            />
          </div>
        );
      }
      return null;
    };

    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        className={cn(
          'inline-flex items-center rounded-xl',
          'focus-visible:ring-primary-500 focus:outline-none focus-visible:ring',
          'shadow-sm',
          'transition-colors duration-75',
          //#region  //*=========== Size ===========
          [
            size === 'base' && ['px-3 py-1.5', 'text-sm md:text-base'],
            size === 'md' && [
              'px-3 py-1 md:py-1.5 lg:px-5 lg:py-2.5',
              'text-xs md:text-sm lg:text-base',
            ],
            size === 'mmd' && [
              'px-5 py-3 lg:py-2.5',
              'text-xs md:text-sm lg:text-xl',
            ],
            size === 'sm' && ['px-2.5 py-0.5', 'text-xs'],
          ],
          //#endregion  //*======== Size ===========
          //#region  //*=========== Variants ===========
          [
            variant === 'primary' && [
              'bg-[#F5F5F5] text-[#545454]',
              'border-[#D6D6D6] border',
              'hover:bg-[#F5F5F5]/90',
              'active:bg-[#F5F5F5]/70',
              'disabled:opacity-50',
            ],
            variant === 'gradient' && [
              'bg-gradient-to-r from-[#7F52FF] to-[#FB8570] text-white',
              'hover:from-[#7F52FF]/90 hover:to-[#FB8570]/90',
              'active:from-[#7F52FF]/70 active:to-[#FB8570]/70',
              'disabled:opacity-50',
            ],
            variant === 'outline' && [
              'rounded-full',
              'cursor-none',
              'bg-transparent border text-[#703BE7]',
              'border-[#7F52FF]',
            ],
            variant === 'submit' && [
              'bg-[#703BE7] text-white',
              'hover:bg-[#6636D2] ',
              'active:bg-white/80 disabled:bg-gray-200',
            ],
            variant === 'border' && [
              'bg-transparent border text-[#703BE7]',
              'border-[#7F52FF]',
            ],
          ],
          //#endregion  //*======== Variants ===========
          'disabled:cursor-not-allowed',
          isLoading &&
            'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
          className
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={cn(
              'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
              {
                'text-white': ['primary', 'gradient'].includes(variant),
                'text-black': ['light'].includes(variant),
                'text-primary-500': ['outline', 'ghost'].includes(variant),
              }
            )}
          >
            <ImSpinner2 className='animate-spin' />
          </div>
        )}

        {LeftIcon && renderIcon(LeftIcon, true)}

        {children}

        {RightIcon && renderIcon(RightIcon, false)}
      </button>
    );
  }
);

export default Button;
