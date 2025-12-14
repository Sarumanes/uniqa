import BannerFullScreen from '@app/components/banner-full-screen';
import Footer from '@app/components/footer';
import Grid from '@app/components/grid';
import Navbar from '@app/components/navbar';
import ArrowLeftIcon from '@app/components/icons/arrow-left-icon';
import ArrowRightIcon from '@app/components/icons/arrow-right-icon';
import { Button } from '@app/components/ui/button';
import { Link } from '@remix-run/react';
import HouseWithPersonAndLaptopIcon from '@app/components/icons/house-with-person-and-laptop-icon';
import ShildIcon from '@app/components/icons/shild-icon';
import PicadoIcon from '@app/components/icons/picado-icon';
import { MetricDisplay, MetricDisplayContent, MetricDisplayNumber, MetricDisplayTitle } from '@app/components/metric-display';
import Divider from '@app/components/ui/divider';
import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@app/libs/utils';
import ExternalBannersCarousel from '@app/components/external-banners-carousel';
import RelatedArticle from '@app/components/related-article';
import bg from './imgs/bg.png';
import people from './imgs/people.png';
import peopleWithDog from './imgs/people-with-dog.png';
import peopleOnHill from './imgs/people-on-hill.png';
import salzburg from './imgs/salzburg.png';
import bridge from './imgs/bridge.png';
import prague from './imgs/prague.png';
import uniqaSign from './imgs/uniqa-sign.png';
import money from './imgs/money.png';
import uniqaBuilding from './imgs/uniqa-building.png';
import CorporatSociaResponsibility from '@app/components/external-banners/corporate-social-responsibility';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import MissionAndVision2028Card from '@app/routes/article.mission-and-vision-2028/card';
import OurStrategyCard from '@app/routes/article.our-strategy/card';
import OurCultureCard from '@app/routes/article.our-culture/card';
import ForewordCard from '@app/routes/article.foreword/card';

export default function Page() {
  return (
    <>
      <main className='relative bg-blue-1/10'>
        <div className='absolute top-0 z-10 w-full'>
          <Navbar className='items-center py-5' variant='secondary' />
        </div>
        <BannerFullScreen className='text-white' img={<img src={bg} alt='hero' className='object-center object-cover' />}>
          <Grid className='grid-rows-[1fr_auto]'>
            <div className='container relative min-h-screen pb-4 pt-20'>
              <div className='col-span-full row-start-1 flex items-center justify-center'>
                <h1 className='text-5xl font-semibold max-w-[1090px] text-center'>Finanční dům UNIQA</h1>
              </div>
              <Button variant='secondary-ghost' asChild className='col-start-1 col-span-2'>
                <Link to='/article' viewTransition>
                  <ArrowLeftIcon />
                  Všechna témata
                </Link>
              </Button>
              <div className='col-start-7 col-span-2 flex items-center justify-between'>
                <Button variant='secondary-ghost' asChild>
                  <Link to='/article/we-focus-on-families' viewTransition>
                    <ArrowLeftIcon />
                    Předchozí
                  </Link>
                </Button>
                <Button variant='secondary-ghost' asChild>
                  <Link to='/article/our-strategy' viewTransition>
                    Další
                    <ArrowRightIcon />
                  </Link>
                </Button>
              </div>
            </div>
          </Grid>
        </BannerFullScreen>
        <Grid className='grid-rows-[auto_auto_auto] gap-y-20'>
          <section className='pt-4 text-blue-1 container pb-16'>
            <h5 className='col-start-1 col-span-2 row-start-1 text-base font-semibold'>Co tvoří naši DNA</h5>
            <h5 className='col-start-4 col-span-2 row-start-1 text-base font-semibold'>Identita</h5>
            <header className='col-start-7 col-span-6 row-start-1 flex flex-col gap-y-4'>
              <h1 className='text-2xl font-semibold'>O nás</h1>
              <h4 className='text-2xl'>
                Jsme součástí velké skupiny UNIQA Insurance Group, která zaměstnává přes 21 000 lidí, působí na 17 evropských
                trzích a stará se o více než 16,5 milionu klientů. Hlavním regionem skupiny je Rakousko a střední Evropa.
              </h4>
            </header>
            <div className='row-start-2 col-start-4 col-span-9 mt-8'>
              <AspectRatio ratio={1037 / 600}>
                <img
                  src={people}
                  alt='group of people in circle taking salfie'
                  className=' object-center object-cover size-full'
                />
              </AspectRatio>
            </div>
            <p className='row-start-3 col-start-7 col-span-3 text-lg'>
              V rámci střední a východní Evropy patří UNIQA mezi pět nejsilnějších hráčů na trhu financí a pojištění. Česká a
              slovenská UNIQA dlouhodobě patří mezi nejdynamičtější a nejúspěšnější části celé UNIQA Group.
            </p>
            <p className='row-start-3 col-start-10 col-span-3 text-lg'>
              Tvoří silný pilíř celé skupiny, který dohromady zajišťuje více než 40 % tržeb UNIQA Group. Za těmito výsledky stojí
              naši lidé, kteří pracují s nasazením a kterým klienti důvěřují.
            </p>
          </section>
        </Grid>
        <Grid>
          <section className='container pb-42'>
            <div className='col-start-1 col-span-6'>
              <div className='flex flex-col gap-y-6 max-w-[532px] mx-auto'>
                <div
                  className='bg-blue-1 h-28'
                  style={{
                    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                  }}
                />
                <div className='flex gap-x-7 h-90'>
                  <div className='bg-blue-1 flex-1 flex flex-col items-center justify-center py-10'>
                    <HouseWithPersonAndLaptopIcon className='my-auto stroke-white w-17 h-15' />
                    <p className='text-lg text-white'>Pojištění</p>
                  </div>
                  <div className='bg-blue-1 flex-1 flex flex-col items-center justify-center py-10'>
                    <ShildIcon className='my-auto text-white w-14 h-16' />
                    <p className='text-lg text-white'>Penze</p>
                  </div>
                  <div className='bg-blue-1 flex-1 flex flex-col items-center justify-center py-10'>
                    <PicadoIcon className='my-auto stroke-white size-17' />
                    <p className='text-lg text-white'>Investice</p>
                  </div>
                </div>
                <div className='h-8 bg-blue-1' />
              </div>
            </div>
            <header className='col-start-7 col-span-6 text-blue-1 flex flex-col gap-y-10 pt-22'>
              <h1 className='text-2xl font-semibold'>UNIQA je finanční dům</h1>
              <p className='text-2xl'>
                UNIQA je silný finanční dům, který nabízí pod jednou střechou kromě pojištění také investice a spoření na důchod.
              </p>
              <p className='text-2xl'>
                Máme řešení pro každou rodinu na obou trzích v Česku i na Slovensku – naše produkty jsou variabilní a snadno
                přístupné na různých touchpointech.
              </p>
            </header>
          </section>
        </Grid>
        <section className='container pb-34'>
          <CorporatSociaResponsibility />
        </section>
        <Grid className='grid-rows-[auto_auto_auto_auto_auto_auto] gap-y-5'>
          <section className='container text-blue-1 pb-34'>
            <h1 className='col-start-4 col-span-3 row-start-1 text-xl font-semibold pb-2'>UNIQA CZ/SK v číslech</h1>
            <MetricDisplay className='col-start-4 col-span-3 row-start-2'>
              <MetricDisplayContent>
                <MetricDisplayTitle>Předep. pojistného</MetricDisplayTitle>
                <MetricDisplayNumber className='flex gap-x-2 items-baseline'>
                  <small className='text-2xl'>€</small>
                  836
                  <small className='text-2xl'>mil</small>
                </MetricDisplayNumber>
              </MetricDisplayContent>
            </MetricDisplay>
            <MetricDisplay className='col-start-7 col-span-3 row-start-2'>
              <MetricDisplayContent className='flex gap-x-2 items-baseline'>
                <MetricDisplayTitle>Zisk před zdaněním</MetricDisplayTitle>
                <MetricDisplayNumber className='flex gap-x-2 items-baseline'>
                  <small className='text-2xl'>€</small>
                  71.3
                  <small className='text-2xl'>mil</small>
                </MetricDisplayNumber>
              </MetricDisplayContent>
            </MetricDisplay>
            <MetricDisplay className='col-start-10 col-span-3 row-start-2'>
              <MetricDisplayContent>
                <MetricDisplayTitle>Klientů</MetricDisplayTitle>
                <MetricDisplayNumber className='flex gap-x-2 items-baseline'>
                  2.6
                  <small className='text-2xl'>mil</small>
                </MetricDisplayNumber>
              </MetricDisplayContent>
            </MetricDisplay>
            <MetricDisplay className='col-start-4 col-span-3 row-start-3'>
              <MetricDisplayContent>
                <MetricDisplayTitle>Zaměstnanců</MetricDisplayTitle>
                <MetricDisplayNumber>1400</MetricDisplayNumber>
              </MetricDisplayContent>
            </MetricDisplay>
            <MetricDisplay className='col-start-7 col-span-3 row-start-3'>
              <MetricDisplayContent>
                <MetricDisplayTitle>Obchodních zástupců</MetricDisplayTitle>
                <MetricDisplayNumber>1600</MetricDisplayNumber>
              </MetricDisplayContent>
            </MetricDisplay>
            <MetricDisplay className='col-start-10 col-span-3 row-start-3'>
              <MetricDisplayContent>
                <MetricDisplayTitle>Podíl na trhu CZ</MetricDisplayTitle>
                <MetricDisplayNumber>7.9 %</MetricDisplayNumber>
              </MetricDisplayContent>
            </MetricDisplay>
            <MetricDisplay className='col-start-4 col-span-3 row-start-4'>
              <MetricDisplayContent>
                <MetricDisplayTitle>Pozice na trhu CZ</MetricDisplayTitle>
                <MetricDisplayNumber>6</MetricDisplayNumber>
              </MetricDisplayContent>
              <Divider />
            </MetricDisplay>
            <MetricDisplay className='col-start-7 col-span-3 row-start-4'>
              <MetricDisplayContent>
                <MetricDisplayTitle>Pozice na trhu SK</MetricDisplayTitle>
                <MetricDisplayNumber>4</MetricDisplayNumber>
              </MetricDisplayContent>
              <Divider />
            </MetricDisplay>
            <MetricDisplay className='col-start-10 col-span-3 row-start-4'>
              <MetricDisplayContent>
                <MetricDisplayTitle>Podíl na trhu SK</MetricDisplayTitle>
                <MetricDisplayNumber>11 %</MetricDisplayNumber>
              </MetricDisplayContent>
              <Divider />
            </MetricDisplay>
            <h4 className='col-start-4 col-span-3 row-start-5 text-base'>Údaje platné ke konci roku 2023.</h4>
            <div className='col-start-4 col-span-9 roow-start-6 mt-16'>
              <AspectRatio ratio={1037 / 600}>
                <img
                  src={peopleWithDog}
                  alt='group of people in circle with a dog taking salfie'
                  className='size-full object-center object-cover '
                />
              </AspectRatio>
            </div>
          </section>
        </Grid>
        <Grid className='grid-rwos-[auto_auto_auto] gap-y-6'>
          <section className='container text-blue-1 pb-32'>
            <h1 className='col-start-7 col-span-6 row-start-1 text-3xl font-semibold'>Naše milníky</h1>
            <div className='col-span-full row-start-2 mb-4'>
              <AspectRatio ratio={1392 / 805}>
                <img src={peopleOnHill} alt='people on hill' className='size-full object-center object-cover' />
              </AspectRatio>
            </div>
            <h5 className='col-start-4 col-span-2 row-start-3 text-lg font-semibold'>Jak to všechno začalo?</h5>
            <h4 className='col-start-7 col-span-6 row-start-3 text-2xl'>
              Náš příběh začal už v roce 1811, kdy vznikla Salzburská pojišťovna. Od té doby jsme urazili pořádný kus cesty a dnes
              jsme součástí UNIQA Group – jedné z největších pojišťovacích skupin ve střední a východní Evropě.
            </h4>
          </section>
        </Grid>
        <Grid className='grid-rows-[repeat(20,_1fr)]'>
          <section className='container text-white pt-30 pb-34 mb-40 bg-blue-1'>
            <div className='row-span-full col-start-6 justify-self-end bg-white w-[1.5px]' />
            <h3 className='col-start-4 row-start-1 text-4xl font-semibold scroll-m-28' id='history-1811'>
              1811
            </h3>
            <h3 className='col-start-4 row-start-5 text-4xl font-semibold'>1990</h3>
            <h3 className='col-start-4 row-start-8 text-4xl font-semibold'>1993</h3>
            <h3 className='col-start-4 row-start-12 text-4xl font-semibold scroll-m-30' id='history-1999'>
              1999
            </h3>
            <h3 className='col-start-4 row-start-15 text-4xl font-semibold scroll-m-30' id='history-2001'>
              2001
            </h3>
            <h3 className='col-start-4 row-start-19 text-4xl font-semibold'>2020</h3>
            {Array.from({ length: 20 }).map((_, idx) => (
              <div
                key={idx}
                className='col-start-6 col-span-1 justify-self-end w-[18px] h-px translate-x-[8px] bg-white'
                style={{
                  gridRowStart: idx + 1,
                }}
              />
            ))}
            <div className='col-start-6 justify-self-end w-[18px] h-px translate-x-[8px] bg-white row-start-20 self-end' />
            <div className='size-3 bg-white rounded-full row-start-1 col-start-6 col-span-1 justify-self-end -translate-y-[6px] translate-x-[5px]' />
            <div className='size-3 bg-white rounded-full row-start-5 col-start-6 col-span-1 justify-self-end -translate-y-[6px] translate-x-[5px]' />
            <div className='size-3 bg-white rounded-full row-start-8 col-start-6 col-span-1 justify-self-end -translate-y-[6px] translate-x-[5px]' />
            <div className='size-3 bg-white rounded-full row-start-12 col-start-6 col-span-1 justify-self-end -translate-y-[6px] translate-x-[5px]' />
            <div className='size-3 bg-white rounded-full row-start-15 col-start-6 col-span-1 justify-self-end -translate-y-[6px] translate-x-[5px]' />
            <div className='size-3 bg-white rounded-full row-start-19 col-start-6 col-span-1 justify-self-end -translate-y-[6px] translate-x-[5px]' />
            <Timeline
              className='row-start-1 row-span-3'
              title={<h3>Založení Salzburské pojišťovny</h3>}
              description={<p>Salzburger Landes-Versicherung (Rakousko)</p>}
              img={
                <div className='col-span-full'>
                  <AspectRatio ratio={684 / 374}>
                    <img src={salzburg} alt='Salzburg map' className='size-full object-cover' />
                  </AspectRatio>
                </div>
              }
            />
            <Timeline
              className='row-start-5 row-span-2'
              title={<h3>Založení pojišťovny Otčina</h3>}
              description={<p>UNIQA Slovensko</p>}
              img={
                <div className='col-span-3'>
                  <AspectRatio ratio={330 / 216}>
                    <img src={bridge} alt='Bidge' className='size-full object-cover' />
                  </AspectRatio>
                </div>
              }
            />
            <Timeline
              className='row-start-8 row-span-3 '
              title={<h3>Založení Česko-rakouské pojišťovny</h3>}
              description={<p className='invisible'>UNIQA Česká republika</p>}
              img={
                <div className='col-span-full'>
                  <AspectRatio ratio={684 / 374}>
                    <img src={prague} alt='Prague' className='size-full object-cover' />
                  </AspectRatio>
                </div>
              }
            />
            <Timeline
              className='row-start-12 row-span-3'
              title={<h3>Vznik značky UNIQA Group spojením několika pojišťoven</h3>}
              description={<p className='invisible'>UNIQA Česká republika</p>}
              img={
                <div className='col-span-3'>
                  <AspectRatio ratio={330 / 216}>
                    <img src={uniqaSign} alt='A man cleaning a UNIQA sign on a building' className='size-full object-cover' />
                  </AspectRatio>
                </div>
              }
            />
            <Timeline
              className='row-start-15 row-span-3'
              title={<h3>Vstup značky UNIQA na český a slovenský trh</h3>}
              description={<p>UNIQA CZ/SK</p>}
              img={
                <div className='col-span-full'>
                  <AspectRatio ratio={684 / 374}>
                    <img src={money} alt='Money' className='size-full object-cover' />
                  </AspectRatio>
                </div>
              }
            />
            <Timeline
              className='row-start-19 row-span-2'
              title={<h3>Fúze s AXA CZ/SK a posílení pozice</h3>}
              description={<p>UNIQA CZ/SK</p>}
              img={
                <div className='col-span-3'>
                  <AspectRatio ratio={330 / 216}>
                    <img src={uniqaBuilding} alt='UNIQA building' className='size-full object-cover' />
                  </AspectRatio>
                </div>
              }
            />
          </section>
        </Grid>
        <ExternalBannersCarousel startIndex={2} className='pb-40 pt-10' />
        <RelatedArticle>
          <MissionAndVision2028Card className='col-span-3' />
          <OurStrategyCard className='col-span-3' />
          <OurCultureCard className='col-span-3' />
          <ForewordCard className='col-span-3' />
        </RelatedArticle>
      </main>
      <Footer />
    </>
  );
}

type TimelineProps = {
  title: ReactNode;
  description?: ReactNode;
  img: ReactNode;
  className?: string;
};

function Timeline({ title, description, img, className }: TimelineProps) {
  return (
    <article className={cn('col-start-7 col-span-6 grid grid-cols-6 grid-rows-[repeat(3,max-content)] gap-y-0', className)}>
      <Slot className='text-2xl font-semibold col-span-full row-start-1 pb-1'>{title}</Slot>
      <Slot className='text-base pb-4 col-span-full row-start-2'>{description}</Slot>
      <Slot className='row-start-3'>{img}</Slot>
    </article>
  );
}
