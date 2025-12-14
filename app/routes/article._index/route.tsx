import Footer from '@app/components/footer';
import Grid from '@app/components/grid';
import Navbar from '@app/components/navbar';
import Divider from '@app/components/ui/divider';
import FinancialHouseCardVertical from '@app/routes/article.financial-house/card-vertical';
import WeFocusOnFamiliesCardVertical from '@app/routes/article.we-focus-on-families/card-vertical';
import ForewordCardVertical from '@app/routes/article.foreword/card-vertical';
import MissionAndVision2028CardVertical from '@app/routes/article.mission-and-vision-2028/card-vertical';
import OurStrategyCardVertical from '@app/routes/article.our-strategy/card-vertical';
import OurCultureCardVertical from '@app/routes/article.our-culture/card-vertical';

function ArticleIndexPage() {
  return (
    <>
      <main>
        <Grid>
          <Navbar className='items-center py-5' variant='primary' />
        </Grid>
        <Grid className='grid-rows-[auto_auto_auto] gap-y-6'>
          <section className='container pt-48 pb-20'>
            <p className='col-start-1 col-span-2 row-start-1 text-base text-blue-1 self-center'>Všechna témata</p>
            <h1 className='col-start-7 col-span-6 row-start-1 text-2xl font-semibold text-blue-1 self-center'>
              Co tvoří naši DNA
            </h1>
            <Divider className='col-span-full row-start-2' />
            <Grid className='gap-y-20 grid-rows-[auto_auto_auto]'>
              <ul className='col-span-full row-start-3'>
                <ForewordCardVertical className='col-span-6' />
                <MissionAndVision2028CardVertical className='col-span-6' />
                <OurStrategyCardVertical className='col-span-6' />
                <FinancialHouseCardVertical className='col-span-6' />
                <OurCultureCardVertical className='col-span-6' />
                <WeFocusOnFamiliesCardVertical className='col-span-6' />
              </ul>
            </Grid>
          </section>
        </Grid>
      </main>
      <Footer />
    </>
  );
}

export default ArticleIndexPage;
