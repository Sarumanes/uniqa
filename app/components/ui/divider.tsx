import { cn } from '@app/libs/utils';
import { ComponentPropsWithoutRef } from 'react';

function Divider({ className, ...props }: ComponentPropsWithoutRef<'hr'>) {
  return <hr {...props} className={cn('border-t-[1.5px] border-t-blue-1', className)} />;
}

export default Divider;
