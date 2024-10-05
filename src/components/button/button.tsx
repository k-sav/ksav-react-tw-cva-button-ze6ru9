import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

export const button = cva(
  'button transition-all flex items-center focusable border',
  {
    variants: {
      radius: {
        md: 'rounded-md',
        lg: 'rounded-lg',
        '3xl': 'rounded-3xl',
        full: 'rounded-full',
      },
      intent: {
        primary: [
          'bg-primary',
          'text-white',
          'border-transparent',
          'hover:bg-primary-alt',
        ],
        secondary: [
          'bg-transparent',
          'text-gray-800',
          'border-sand',
          'hover:bg-chalk',
          'hover:border-chalk',
        ],
        tertiary: [
          'bg-fuschia',
          'text-white',
          'border-transparent',
          'hover:bg-fuschia-alt',
        ],
      },
      size: {
        small: ['text-sm', 'py-2', 'px-4'],
        medium: ['text-base', 'py-3', 'px-5'],
      },
      // Only really appropriate for secondary. not sure how to do subvariant
      border: {
        // true: 'border',
        // false: 'border-none',
        true: '',
        false: '',
      },
      elevation: {
        none: 'shadow-none',
        '1': 'shadow shadow-black/25',
        sm: 'shadow-sm shadow-black/25',
        md: 'shadow-md shadow-black/25',
        lg: 'shadow-lg shadow-black/25',
        xl: 'shadow-xl shadow-black/25',
        '2xl': 'shadow-2xl shadow-black/25',
      },
    },
    compoundVariants: [
      {
        // ✨ apply to `secondary`  intents ✨
        intent: ['secondary'],
        border: false,
        class: 'border-transparent',
      },
    ],
    defaultVariants: {
      intent: 'primary',
      size: 'medium',
      radius: '3xl',
      elevation: 'none',
      border: true,
    },
  }
);

export interface ButtonVariantProps extends VariantProps<typeof button> {}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {}

// do you ship react components or just the cva function or both?
export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  radius,
  elevation,
  border,
  ...props
}) => (
  <button
    className={button({ intent, size, className, radius, elevation, border })}
    {...props}
  />
);
