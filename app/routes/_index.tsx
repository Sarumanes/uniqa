import Hero from '@app/components/hero';
import OurDna from '@app/components/our-dna';
import HistoryBanner from '@app/components/history-banner';
import OurMision from '@app/components/our-mision';
import OurPlan from '@app/components/our-plan';
import OurPrinciples from '@app/components/our-principles';
import OurVision from '@app/components/our-vision';
import Navbar from '@app/components/navbar';
import Footer from '@app/components/footer';
import WeAre from '@app/components/we-are';
import WeFocusOnFamilyBanner from '@app/routes/article.we-focus-on-families/we-focus-on-families-banner';

export const handle = {
  i18n: 'common',
};

export default function Index() {
  return (
    <>
      <main className='relative bg-blue-1/10'>
        <div className='absolute top-0 z-10 w-full'>
          <Navbar className='items-center py-5' variant='secondary' />
        </div>
        <Hero />
        <OurVision />
        <OurMision />
        <WeAre />
        <OurDna />
        <WeFocusOnFamilyBanner />
        <OurPlan />
        <HistoryBanner />
        <OurPrinciples />
      </main>
      <Footer />
    </>
  );
}
