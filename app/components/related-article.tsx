import Grid from '@app/components/grid';
import ArrowRightIcon from '@app/components/icons/arrow-right-icon';
import { Button } from '@app/components/ui/button';
import { Link } from '@remix-run/react';
import { PropsWithChildren } from 'react';

function RelatedArticle({ children }: PropsWithChildren) {
  return (
    <Grid className='grid-rows-[auto_auto] gap-y-6 pb-16'>
      <section className='container'>
        <Button asChild className='col-start-1 col-span-2 row-start-1' variant='primary-ghost'>
          <Link to='/article' viewTransition>
            Všechna témata
            <ArrowRightIcon />
          </Link>
        </Button>
        <h1 className='col-start-7 col-span-3 row-start-1 text-2xl text-blue-1 font-semibold'>Související</h1>
        <Grid>
          <ul className='col-span-full row-start-2'>{children}</ul>
        </Grid>
      </section>
    </Grid>
  );
}

export default RelatedArticle;
