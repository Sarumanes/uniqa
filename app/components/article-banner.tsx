import Grid from '@app/components/grid';
import ArrowRightIcon from '@app/components/icons/arrow-right-icon';
import { Button } from '@app/components/ui/button';
import { cn } from '@app/libs/utils';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

type ArticleBannerProps = {
  to: string;
  category: ReactNode;
  img: ReactNode;
  title: ReactNode;
  description: ReactNode;
  className?: string;
};

function ArticleBanner({ className, category, title, description, img, to, ...props }: ArticleBannerProps) {
  return (
    <article className={cn('overflow-hidden', className)} {...props}>
      <AspectRatio ratio={1392 / 632} className='py-6 px-8 text-white'>
        <a className='group size-full' href={to} target='_blank' rel='noopener noreferrer'>
          <Slot className='absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 duration-150'>
            {img}
          </Slot>
          <Grid className='grid-rows-[auto_1fr_auto] relative'>
            <div className='relative h-full w-full flex'>
              <h5 className='row-start-1 col-start-1 col-span-2 text-base font-semibold'>lepší život společně</h5>
              <h5 className='row-start-1 col-start-7 col-span-2 text-base font-semibold'>{category}</h5>
              <Button className='row-start-1 col-start-11 col-span-2 justify-self-end' variant='secondary-ghost'>
                Zjistit více <ArrowRightIcon />
              </Button>
              <div className='absolute inset-0 size-full flex justify-center items-center'>
                <Slot className='text-center font-semibold'>{title}</Slot>
              </div>
              <h4 className='col-start-7 col-span-6 row-start-3 text-lg'>{description}</h4>
            </div>
          </Grid>
        </a>
      </AspectRatio>
    </article>
  );
}

export default ArticleBanner;
