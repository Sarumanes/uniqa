import { cn } from '@app/libs/utils';
import { ComponentPropsWithoutRef } from 'react';

function CustomLi({ className, children, ...props }: ComponentPropsWithoutRef<'li'>) {
  return (
    <li
      {...props}
      className={cn(
        'relative before:content-[url("/imgs/custom-bullet.svg")] before:size-4 before:block ps-0 before:-start-6 before:top-0 before:absolute',
        className
      )}
    >
      {children}
    </li>
  );
}

export default CustomLi;
