import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@app/libs/utils';

function ArrowLeftIcon({ className, ...props }: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      width='11'
      height='12'
      viewBox='0 0 11 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      className={cn('group-hover/button:translate-x-0.5 transform duration-200 ease-in-out', className)}
    >
      <path
        d='M0.505025 5.50502C0.231658 5.77839 0.231658 6.22161 0.505025 6.49497L4.9598 10.9497C5.23316 11.2231 5.67638 11.2231 5.94975 10.9497C6.22311 10.6764 6.22311 10.2332 5.94975 9.9598L1.98995 6L5.94975 2.0402C6.22311 1.76684 6.22311 1.32362 5.94975 1.05025C5.67638 0.776885 5.23317 0.776885 4.9598 1.05025L0.505025 5.50502ZM11 5.3L1 5.3L1 6.7L11 6.7L11 5.3Z'
        fill='currentColor'
      />
    </svg>
  );
}

export default ArrowLeftIcon;
