import BlurBg from '@app/components/blur-bg';
import Grid from '@app/components/grid';
import ArrowRightIcon from '@app/components/icons/arrow-right-icon';
import { Button } from '@app/components/ui/button';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { Link } from '@remix-run/react';

function HistoryBanner() {
  return (
    <section className='text-white py-6 relative bg-blue-1'>
      <BlurBg />
      <Grid className='grid-rows-[auto_auto] gap-y-10'>
        <div className='relative container '>
          <h1 className='col-span-3 col-start-1 row-start-1 text-xl font-semibold'>Historie UNIQA</h1>
          <h4 className='col-start-7 col-span-4 text-lg font-normal'>
            Naše společnost má za sebou dlouhou historii – lidé nám důvěřují a pojišťují se u nás už od roku 1811.
          </h4>
          <div className='colstart-11 col-span-2 flex justify-end items-start'>
            <Button variant='secondary-ghost' asChild>
              <Link
                to={{
                  pathname: '/article/financial-house',
                  hash: '#history-1811',
                }}
                viewTransition
              >
                Zjistit více <ArrowRightIcon />
              </Link>
            </Button>
          </div>
          <Grid className='grid-rows-[auto_auto_auto] gap-y-8'>
            <div className='col-span-full pt-24'>
              <Grid>
                <div className='row-start-1 col-span-full'>
                  <div className='col-start-1 col-span-2 self-end'>
                    <h5 className='text-base pb-8'>Založení Salzburské pojišťovny</h5>
                    <div>
                      <AspectRatio ratio={210 / 260}>
                        <img src='imgs/history-1.png' alt='salzburg' className='size-full object-center object-cover' />
                      </AspectRatio>
                    </div>
                  </div>
                  <div className='col-start-4 col-span-2 self-end'>
                    <h5 className='text-base pb-8'>Založení pojišťovny Otčina (později UNIQA SK)</h5>
                    <div>
                      <AspectRatio ratio={210 / 144}>
                        <img src='imgs/history-2.png' alt='Otčina' className='size-full object-center object-cover' />
                      </AspectRatio>
                    </div>
                  </div>
                  <div className='col-start-7 col-span-2 self-end'>
                    <h5 className='text-base pb-8'>Založení ČRP (později UNIQA CZ)</h5>
                    <div>
                      <AspectRatio ratio={212 / 260}>
                        <img src='imgs/history-3.png' alt='Založení ČRP' className='size-full object-center object-cover' />
                      </AspectRatio>
                    </div>
                  </div>
                  <div className='col-start-10 col-span-2 self-end'>
                    <h5 className='text-base pb-8'>Vznik brandu UNIQA</h5>
                    <div>
                      <AspectRatio ratio={212 / 144}>
                        <img src='imgs/history-4.png' alt='Vznik brandu UNIQA' className='size-full object-cover object-center' />
                      </AspectRatio>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid>
                <div className='col-span-full h-8 relative row-start-2'>
                  <div className='w-full absolute start-0 top-1/2 h-px bg-white/40' />
                  <div className='col-start-1 col-span-1 h-full bg-white/40 w-px' />
                  <div className='col-start-2 col-span-1 h-full bg-white/40 w-px' />
                  <div className='col-start-3 col-span-1 h-full bg-white/40 w-px' />
                  <div className='col-start-4 col-span-1 h-full bg-white/40 w-px' />
                  <div className='col-start-5 col-span-1 h-full bg-white/40 w-px' />
                  <div className='col-start-6 col-span-1 h-full bg-white/40 w-px' />
                  <div className='col-start-7 col-span-1 h-full bg-white/40 w-px' />
                  <div className='col-start-8 col-span-1 h-full bg-white/40 w-px' />
                  <div className='col-start-9 col-span-1 h-full bg-white/40 w-px' />
                  <div className='col-start-10 col-span-1 h-full bg-white/40 w-px' />
                  <div className='col-start-11 col-span-1 h-ful bg-white/40 w-px' />
                  <div className='col-start-12 col-span-1 h-full bg-white/40 w-px relative'>
                    <Button
                      asChild
                      className='rounded-full size-14 absolute items-center justify-center -start-7 -top-3'
                      variant='secondary'
                    >
                      <Link
                        to={{
                          pathname: '/article/financial-house',
                          hash: '#history-1999',
                        }}
                        viewTransition
                      >
                        <ArrowRightIcon />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Grid>
              <Grid>
                <div className='row-start-3 col-span-full'>
                  <h1 className='col-start-1 col-span-2 text-4xl font-semibold'>1811</h1>
                  <h1 className='col-start-4 col-span-2 text-4xl font-semibold'>1990</h1>
                  <h1 className='col-start-7 col-span-2 text-4xl font-semibold'>1993</h1>
                  <h1 className='col-start-10 col-span-2 text-4xl font-semibold'>1999</h1>
                </div>
              </Grid>
            </div>
          </Grid>
        </div>
      </Grid>
    </section>
  );
}

export default HistoryBanner;
