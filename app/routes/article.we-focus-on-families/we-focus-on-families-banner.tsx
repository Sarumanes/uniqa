import Grid from '@app/components/grid';
import ArrowRightIcon from '@app/components/icons/arrow-right-icon';
import { Button } from '@app/components/ui/button';
import { Link } from '@remix-run/react';
import bg from './imgs/bg.png';

function WeFocusOnFamilyBanner() {
  return (
    <Link to='/article/we-focus-on-families' className='block group' viewTransition>
      <section className='relative mb-34 overflow-hidden'>
        <img
          alt='hero'
          src={bg}
          className='absolute inset-0 w-full h-full object-center object-cover group-hover:scale-105 duration-200'
        />
        <Grid>
          <div className='h-[740px] text-white container py-6 relative z-10'>
            <h1 className='col-start-1 col-span-5 text-3xl font-semibold'>UNIQA je finanční dům pro všechny typy rodin.</h1>
            <div className='col-start-7 col-span-3 flex flex-col gap-y-1'>
              <h3 className='text-lg font-normal'>Zajímáme se o rodiny ve všech jejich formách</h3>
              <Button variant='secondary-ghost' asChild>
                <Link to='/article/we-focus-on-families' viewTransition>
                  Zjistit více <ArrowRightIcon />
                </Link>
              </Button>
            </div>
            <p className='col-start-12 col-span-1 justify-self-end text-base font-semibold'>Strategie</p>
          </div>
        </Grid>
      </section>
    </Link>
  );
}

export default WeFocusOnFamilyBanner;
