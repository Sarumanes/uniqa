import { cn } from '@app/libs/utils';
import { Slot } from '@radix-ui/react-slot';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

type BannerFullScreenProps = ComponentPropsWithoutRef<'section'> & {
  img: ReactNode;
};

function BannerFullScreen({ className, children, img, ...props }: BannerFullScreenProps) {
  return (
    <section {...props} className={cn('relative', className)}>
      <Slot className='absolute inset-0 w-full h-full'>{img}</Slot>
      <Slot className='min-h-screen relative'>{children}</Slot>
    </section>
  );
}

export default BannerFullScreen;
