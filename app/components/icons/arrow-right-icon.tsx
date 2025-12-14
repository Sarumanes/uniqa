import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@app/libs/utils';

function ArrowRightIcon({ className, ...props }: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='11'
      height='12'
      viewBox='0 0 11 12'
      fill='none'
      {...props}
      className={cn('group-hover/button:-translate-x-0.5 transform duration-200 ease-in-out', className)}
    >
      <path
        d='M10.495 6.49497C10.7683 6.22161 10.7683 5.77839 10.495 5.50502L6.0402 1.05025C5.76683 0.776885 5.32362 0.776885 5.05025 1.05025C4.77689 1.32362 4.77689 1.76684 5.05025 2.0402L9.01005 6L5.05025 9.9598C4.77689 10.2332 4.77689 10.6764 5.05025 10.9497C5.32362 11.2231 5.76684 11.2231 6.0402 10.9497L10.495 6.49497ZM3.0598e-08 6.7L10 6.7L10 5.3L-3.0598e-08 5.3L3.0598e-08 6.7Z'
        fill='currentColor'
      />
    </svg>
  );
}

export default ArrowRightIcon;
