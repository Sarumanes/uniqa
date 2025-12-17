import Grid from '@app/components/grid';
import ArrowRightIcon from '@app/components/icons/arrow-right-icon';
import { Button } from '@app/components/ui/button';
import Divider from '@app/components/ui/divider';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { Link } from '@remix-run/react';

function OurPlan() {
  return (
    <Grid className='grid-rows-[auto_auto_auto_auto] gap-y-4'>
      <section className='container pb-30 text-blue-1'>
        <h1 className='row-start-1 col-start-7 col-span-3 text-xl font-semibold'>Naše vize a strategie 2025–2028</h1>
        <Button asChild className='col-start-11 col-span-2 justify-self-end self-end' variant='primary-ghost'>
          <Link to='/article/mission-and-vision-2028' viewTransition>
            Zjistit více <ArrowRightIcon />
          </Link>
        </Button>
        <Divider className='row-start-2 col-start-7 col-span-6 mb-2' />
        <h5 className='row-start-3 col-start-7 col-span-6 text-lg'>
          V roce 2028 je UNIQA Česká republika a Slovensko <b>naším výjimečným finančním domem</b>. Využíváme omnichannel řešení k poskytování
          těch nejlepších služeb zákazníkům. Trh nás vnímá jako společnost s řešeními zaměřenými na potřeby rodiny.
        </h5>
        <div className='row-start-3 mt-12 row-span-2 col-start-2 col-span-7 max-w-[768px]'>
          <AspectRatio ratio={768 / 745}>
            <img src='imgs/our-plan.png' alt='' className='size-full' />
          </AspectRatio>
        </div>
      </section>
    </Grid>
  );
}

export default OurPlan;
