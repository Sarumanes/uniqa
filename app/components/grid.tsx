import { cn } from '@app/libs/utils';
import { Slot } from '@radix-ui/react-slot';
import { ComponentPropsWithoutRef } from 'react';

function Grid({ className, ...props }: ComponentPropsWithoutRef<typeof Slot>) {
  return <Slot className={cn('grid grid-cols-12 gap-x-6', className)} {...props} />;
}

export default Grid;
