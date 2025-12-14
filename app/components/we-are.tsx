import Grid from '@app/components/grid';
import { MetricDisplay, MetricDisplayContent, MetricDisplayNumber, MetricDisplayTitle } from '@app/components/metric-display';
import Divider from '@app/components/ui/divider';

function WeAre() {
  return (
    <Grid className='grid-rows-[auto_auto] gap-y-6'>
      <section className='container pb-34 text-blue-1'>
        <h5 className='col-start-1 col-span-3 row-start-1 text-lg'>
          Naše společnost je složena z lidí, kteří nás každý den podporují a inspirují.
        </h5>
        <h1 className='col-start-7 col-span-3 row-start-1 text-2xl font-semibold self-end'>My jsme UNIQA</h1>
        <MetricDisplay className='col-start-1 col-span-3 row-start-2'>
          <MetricDisplayContent>
            <MetricDisplayTitle>Spolu nás je:</MetricDisplayTitle>
            <MetricDisplayNumber>1400</MetricDisplayNumber>
          </MetricDisplayContent>
          <Divider />
        </MetricDisplay>
        <MetricDisplay className='col-start-4 col-span-3 row-start-2'>
          <MetricDisplayContent>
            <MetricDisplayTitle>Věkový průmer našich zaměstnanců je:</MetricDisplayTitle>
            <MetricDisplayNumber>43</MetricDisplayNumber>
          </MetricDisplayContent>
          <Divider />
        </MetricDisplay>
        <MetricDisplay className='col-start-7 col-span-3 row-start-2'>
          <MetricDisplayContent>
            <MetricDisplayTitle>
              Počet lokalit, v kterých
              <br /> pracujeme:
            </MetricDisplayTitle>
            <MetricDisplayNumber>5</MetricDisplayNumber>
          </MetricDisplayContent>
          <Divider />
        </MetricDisplay>
        <MetricDisplay className='col-start-10 col-span-3 row-start-2'>
          <MetricDisplayContent>
            <MetricDisplayTitle>
              Zastoupení žen v řadách zaměstnanců, včetně 3 členek nejvyššího vedení je více než:
            </MetricDisplayTitle>
            <MetricDisplayNumber className='flex gap-x-2'>
              52 <small className='text-2xl self-start mt-2'>%</small>
            </MetricDisplayNumber>
          </MetricDisplayContent>
          <Divider />
        </MetricDisplay>
      </section>
    </Grid>
  );
}

export default WeAre;
