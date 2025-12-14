import type { ComponentPropsWithoutRef } from 'react';

function ArrowDownIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='12' height='11' fill='none' viewBox='0 0 12 11' {...props}>
      <path
        fill='currentColor'
        d='M5.505 10.495a.7.7 0 0 0 .99 0L10.95 6.04a.7.7 0 1 0-.99-.99L6 9.01 2.04 5.05a.7.7 0 0 0-.99.99zM5.3 0v10h1.4V0z'
      ></path>
    </svg>
  );
}

export default ArrowDownIcon;
