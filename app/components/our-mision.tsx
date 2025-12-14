import Grid from '@app/components/grid';
import ArrowRightIcon from '@app/components/icons/arrow-right-icon';
import { Button } from '@app/components/ui/button';
import Divider from '@app/components/ui/divider';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { Link } from '@remix-run/react';

function OurMision() {
  return (
    <Grid className='grid-rows-[auto_auto_auto_auto] gap-y-6 pb-30'>
      <section className='container py-20'>
        <h2 className='col-start-7 col-span-3 row-start-1 text-lg font-semibold text-blue-1'>Naše poslání</h2>
        <Divider className='col-span-full row-start-2 block pb-2' />
        <h3 className='col-start-1 col-span-3 row-start-3 text-lg font-normal text-blue-1'>
          Rizika, která by pro jednotlivce byla příliš těžká, neseme společně jako komunita.
        </h3>
        <div className='col-start-4 col-span-9 row-start-3'>
          <AspectRatio ratio={1038 / 581}>
            <iframe
              title='uniqa-video'
              className='size-full'
              src='https://www.youtube.com/embed/22FqWuJF9BE?autoplay=1&mute=1'
            ></iframe>
          </AspectRatio>
        </div>
        <Button asChild className='col-start-11 col-span-2 justify-self-end row-start-4 mt-2' variant='primary-ghost'>
          <Link to='/article' viewTransition>
            Všechna témata <ArrowRightIcon />
          </Link>
        </Button>
      </section>
    </Grid>
  );
}

export default OurMision;
