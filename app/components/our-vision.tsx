import Grid from '@app/components/grid';
import ArrowRightIcon from '@app/components/icons/arrow-right-icon';
import { Button } from '@app/components/ui/button';
import Divider from '@app/components/ui/divider';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { Link } from '@remix-run/react';

function OurVision() {
  return (
    <Grid className='grid-rows-[auto_auto_auto] gap-y-8'>
      <section className='pt-8 pb-26 container text-blue-1'>
        <h5 className='col-start-1 col-span-2 row-start-1 text-lg font-semibold scroll-m-8' id='our-vision'>
          Naše mise
        </h5>
        <h3 className='col-start-7 col-span-6 row-start-1 text-2xl'>
          Díky síle naší komunity chráníme a zlepšujeme zdraví a prosperitu. Zvolit si UNIQA znamená žít lépe. <b>Lepší život
          společně.</b>
        </h3>
        <h5 className='col-start-1 col-span-2 row-start-2 text-lg font-semibold'>Naše vize</h5>
        <h3 className='col-start-7 col-span-6 row-start-2 text-2xl'>
          V roce 2028 je UNIQA Česká republika a Slovensko moderním, zdravým a prosperujícím finančním domem. Využíváme
          omnichannel řešení, abychom poskytovali nejlepší služby zákazníkům. Trh nás vnímá jako společnost s řešeními zaměřenými
          na potřeby rodiny.
        </h3>
        <Grid className='grid-rows-[auto_auto_auto] gap-y-6'>
          <article className='col-span-full row-start-3 pt-4'>
            <h1 className='col-start-7 col-span-6 row-start-1 text-lg font-semibold'>Úvodní slovo</h1>
            <Divider className='col-span-full row-start-2 mb-2 block' />
            <div className='col-start-1 col-span-6 row-start-3'>
              <AspectRatio ratio={684 / 408}>
                <img src='imgs/our-vision.png' alt='man in suits' className='size-full object-center object-cover' />
              </AspectRatio>
            </div>
            <div className='col-start-7 col-span-6 flex flex-col gap-y-8'>
              <h3 className='text-2xl'>
                Lepší život pre našich zákazníkov, lepší život pre vás, našich zamestnancov, lepší život pre nás všetkých
                spoločne.
              </h3>
              <Button variant='primary-ghost' asChild>
                <Link to='/article/foreword' viewTransition>
                  Zjistit více <ArrowRightIcon />
                </Link>
              </Button>
            </div>
          </article>
        </Grid>
      </section>
    </Grid>
  );
}

export default OurVision;
