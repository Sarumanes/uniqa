import Grid from '@app/components/grid';
import ArrowLeftIcon from '@app/components/icons/arrow-left-icon';
import LogoIcon from '@app/components/icons/logo-icon';
import { Button } from '@app/components/ui/button';
import { Link } from '@remix-run/react';

function SplatRoute() {
  return (
    <Grid className='grid-rows-[auto_1fr]'>
      <main className='h-screen container py-10'>
        <Button asChild className='row-start-1 col-start-1 col-span-3 h-auto text-lg' variant='primary-ghost'>
          <Link to='/' viewTransition>
            <ArrowLeftIcon className='size-8' /> Home
          </Link>
        </Button>
        <LogoIcon className='row-start-1 col-start-11 col-span-2 text-blue-1 w-40 h-8' />
        <div className='row-start-2 col-span-full flex items-center justify-center'>
          <h1 className='text-6xl text-blue-1 font-semibold text-center'>
            404 <br />
            page not found
          </h1>
        </div>
      </main>
    </Grid>
  );
}

export default SplatRoute;
