import Grid from '@app/components/grid';
import ArrowRightIcon from '@app/components/icons/arrow-right-icon';
import { Button } from '@app/components/ui/button';
import { Link } from '@remix-run/react';
import FinancialHouseCard from '@app/routes/article.financial-house/card';
import OurCultureCard from '@app/routes/article.our-culture/card';
import MissionAndVision2028Card from '@app/routes/article.mission-and-vision-2028/card';
import OurStrategyCard from '@app/routes/article.our-strategy/card';

function OurDna() {
  return (
    <Grid className='grid-rows-[auto_auto] gap-y-4'>
      <section className='container pb-34'>
        <div className='col-start-1 col-span-2 row-start-1'>
          <Button variant='primary-ghost' asChild>
            <Link to='/article' viewTransition>
              Všechny témata <ArrowRightIcon />
            </Link>
          </Button>
        </div>
        <h1 className='text-xl font-semibold text-blue-1 col-start-7 col-span-3 row-start-1'>Co tvoří naši DNA</h1>
        <Grid className='col-span-full row-start-2'>
          <ul>
            <MissionAndVision2028Card className='col-span-3' />
            <FinancialHouseCard className='col-span-3' />
            <OurCultureCard className='col-span-3' />
            <OurStrategyCard className='col-span-3' />
          </ul>
        </Grid>
      </section>
    </Grid>
  );
}

export default OurDna;
