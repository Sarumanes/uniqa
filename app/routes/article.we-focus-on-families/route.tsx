import Footer from '@app/components/footer';
import Navbar from '@app/components/navbar';
import Grid from '@app/components/grid';
import { Button } from '@app/components/ui/button';
import ArrowLeftIcon from '@app/components/icons/arrow-left-icon';
import ArrowRightIcon from '@app/components/icons/arrow-right-icon';
import family from './imgs/family.png';
import bg from './imgs/bg.png';
import family1 from './imgs/family-1.png';
import family2 from './imgs/family-2.png';
import family3 from './imgs/family-3.png';
import family4 from './imgs/family-4.png';
import family5 from './imgs/family-5.png';
import family6 from './imgs/family-6.png';
import Divider from '@app/components/ui/divider';
import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { Link } from '@remix-run/react';
import BannerFullScreen from '@app/components/banner-full-screen';
import RelatedArticle from '@app/components/related-article';
import ExternalBannersCarousel from '@app/components/external-banners-carousel';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import FinancialHouseCard from '@app/routes/article.financial-house/card';
import ForewordCard from '@app/routes/article.foreword/card';
import MissionAndVision2028Card from '@app/routes/article.mission-and-vision-2028/card';
import OurStrategyCard from '@app/routes/article.our-strategy/card';

function Page() {
  return (
    <>
      <main className='relative bg-blue-1/10'>
        <div className='absolute top-0 z-10 w-full'>
          <Navbar className='items-center py-5' variant='secondary' />
        </div>
        <BannerFullScreen img={<img src={bg} alt='hero' className='object-center object-cover' />}>
          <Grid className='grid-rows-[1fr_auto]'>
            <div className='container relative min-h-screen pb-4 pt-20'>
              <div className='col-span-full row-start-1 flex justify-center items-center'>
                <h1 className='max-w-[860px] text-center text-5xl font-semibold text-white'>Zaměřujeme se na rodiny</h1>
              </div>
              <Button variant='secondary-ghost' className='row-start-2 col-start-1 col-span-2' asChild>
                <Link to='/article' viewTransition>
                  Všechna témata
                </Link>
              </Button>
              <div className='row-start-2 col-start-7 col-span-2 flex items-center justify-between'>
                <Button variant='secondary-ghost' asChild>
                  <Link to='/article/our-culture' viewTransition>
                    <ArrowLeftIcon />
                    Předchozí
                  </Link>
                </Button>
                <Button variant='secondary-ghost' asChild>
                  <Link to='/article/financial-house' viewTransition>
                    Další
                    <ArrowRightIcon />
                  </Link>
                </Button>
              </div>
            </div>
          </Grid>
        </BannerFullScreen>
        <Grid className='grid-rows-[auto_auto_auto] gap-y-6'>
          <section className='container pb-20 pt-6 text-blue-1'>
            <h5 className='col-start-1 col-span-2 row-start-1 text-base font-semibold'>Co tvoří naši DNA</h5>
            <h5 className='col-start-4 col-span-2 row-start-1 text-base font-semibold'>Strategie</h5>
            <h1 className='col-start-7 col-span-6 row-start-1 text-2xl font-semibold'>
              Zajímáme se o rodiny ve všech jejich formách.
            </h1>
            <h3 className='col-start-7 col-span-6 row-start-2 text-2xl'>
              Chceme být partnerem pro rodiny ve všech jejich podobách. Naší vizí je nabízet podporu a jistotu ve všech fázích
              života, aby každý mohl žít lepší život bez zbytečných starostí.
            </h3>
            <div className='col-start-4 col-span-9 row-start-3 mt-16'>
              <AspectRatio ratio={1037 / 600} className=''>
                <img className='size-full object-cover object-center ' src={family} alt='family' />
              </AspectRatio>
            </div>
          </section>
        </Grid>
        <Grid className='grid-rows-[repeat(4,auto)] gap-y-8'>
          <section className='container text-blue-1 pb-24'>
            <h1 className='row-start-1 col-start-4 col-span-9  text-4xl font-semibold mb-14'>
              Podporujeme všechny podoby rodiny. Jsme partnerkou pro lepší společný život.
            </h1>
            <div className='row-start-2 col-start-4 col-span-2 flex flex-col'>
              <h4 className='text-lg font-semibold'>Ochrana</h4>
              <h4 className='text-lg font-semibold'>Bezstarostnost</h4>
              <h4 className='text-lg font-semibold'>Kvalita života</h4>
            </div>
            <h3 className='row-start-2 col-start-7 col-span-6 text-xl mb-8'>
              UNIQA podporuje všechny formy rodin – od jednotlivců přes partnery a tradiční rodiny až po blízké přátele, kteří
              sdílejí domov. Sdílené hodnoty a společně strávený čas jsou pro nás klíčové.
            </h3>
            <h2 className='row-start-3 col-start-7 col-span-6 text-2xl font-semibold'>Čeho chceme dosáhnout</h2>
            <h5 className='row-start-4 col-start-4 col-span-3 text-lg font-semibold'>
              Trh nás vnímá jako společnost s řešeními zaměřenými na potřeby rodiny.
            </h5>
            <ul className='row-start-4 col-start-7 col-span-6 text-xl list-disc ps-11'>
              <li>Naši zaměstnanci se aktivně zapojují do iniciativ, které mají pozitivní dopad na jejich rodinný život.</li>
              <li>Naše produkty a služby zahrnují výhody a pomoc, které ocení každá rodina.</li>
              <li>V naší marketingové komunikaci navenek zobrazujeme běžné i méně běžné rodiny.</li>
              <li> Chápeme potřeby rodin a podle toho podporujeme iniciativy společenské odpovědnosti.</li>
              <li>
                Při kontaktu s klientem se aktivně zajímáme o životní situaci rodiny, abychom mohli nabídnout řešení vhodné pro
                každého jejího člena.
              </li>
            </ul>
          </section>
        </Grid>
        <Grid className='grid-rows-[auto_auto] gap-y-8'>
          <section className='container pb-24'>
            <h1 className='col-start-7 col-span-6 row-start-1 text-2xl font-semibold text-blue-1'>
              Jak to podporujeme v komunikaci?
            </h1>
            <ul className='col-span-full flex flex-col row-start-2 gap-y-24'>
              <ArticleSection
                subtitle={<h5>01.</h5>}
                title={
                  <h1>
                    <strong>Mluvíme ke všem rodinám</strong> – Každý z nás žije ve své verzi rodiny. Na našich stránkách nenajdete
                    věty, které by naznačovaly, že jedna rodina je lepší než druhá. Jsme tu pro rodiče, děti, prarodiče, páry,
                    přátele – zkrátka pro všechny, kdo si tvoří svůj domov.
                  </h1>
                }
                img={<img src={family1} alt='faimily with a kid' />}
              />
              <ArticleSection
                subtitle={<h5>02.</h5>}
                title={
                  <h1>
                    <strong>Ukazujeme různorodost</strong> – V našich fotkách a příbězích najdete nejen klasické rodiny, ale i ty
                    méně obvyklé. Máme rádi odlišnost a necháváme ji zazářit. Ať už je to máma samoživitelka, tatínci s dětmi,
                    nebo parta přátel, kteří sdílejí jeden byt – každá rodina je pro nás inspirací.
                  </h1>
                }
                img={<img src={family2} alt='family with children in front of a house' />}
              />
              <ArticleSection
                subtitle={<h5>03.</h5>}
                title={
                  <h1>
                    <strong>Myslíme na každého</strong> – Nemluvíme jen k tomu, kdo sjednává pojištění. Naše komunikace ukazuje,
                    jak produkty UNIQA pomáhají celé rodině – od těch nejmenších až po ty, kteří jim dávají životní rady.
                  </h1>
                }
                img={<img src={family3} alt='children with their grandparents' />}
              />
              <ArticleSection
                subtitle={<h5>04.</h5>}
                title={
                  <h1>
                    <strong>Radost místo strachu</strong> – Naše kampaně neukazují katastrofické scénáře ani varovné signály. My
                    raději ukazujeme, jak si užít klidný život díky pojištění, spoření nebo investicím. Chceme, aby naše zprávy
                    přinášely naději, řešení a pohodu.
                  </h1>
                }
                img={<img src={family4} alt='a kid is eating fruits' />}
              />
              <ArticleSection
                subtitle={<h5>05.</h5>}
                title={
                  <h1>
                    <strong>Podporujeme životní milníky</strong> – Ať už jde o první dětský úraz, nákup domu, nebo přípravu na
                    důchod – UNIQA stojí za rodinou ve všech fázích života.
                  </h1>
                }
                img={<img src={family5} alt='a couple in new flat' />}
              />
              <ArticleSection
                subtitle={<h5>06.</h5>}
                title={
                  <h1>
                    <strong>Autentické příběhy, žádné pozlátko</strong> – Žádné dokonalé pózy ani umělé úsměvy. Naše fotografie a
                    příběhy odrážejí opravdové rodiny a jejich každodenní radosti i starosti. Protože víme, že život není dokonalý
                    – a to je na něm to krásné.
                  </h1>
                }
                img={<img src={family6} alt='a family is eating lunch' />}
              />
            </ul>
          </section>
        </Grid>
        <ExternalBannersCarousel startIndex={1} className='pb-44' />
        <RelatedArticle>
          <MissionAndVision2028Card className='col-span-3' />
          <OurStrategyCard className='col-span-3' />
          <FinancialHouseCard className='col-span-3' />
          <ForewordCard className='col-span-3' />
        </RelatedArticle>
      </main>
      <Footer />
    </>
  );
}

export default Page;

type ArticleSectionProps = {
  subtitle: ReactNode;
  title: ReactNode;
  img: ReactNode;
};

function ArticleSection({ subtitle, title, img }: ArticleSectionProps) {
  return (
    <Grid className='grid-rows-[auto_auto_auto] text-blue-1 gap-y-6'>
      <li>
        <Divider className='col-start-4 col-span-9 row-start-1' />
        <Slot className='row-start-2 col-start-4 col-span-2 text-4xl font-semibold'>{subtitle}</Slot>
        <Slot className='row-start-2 col-start-7 col-span-6 text-xl'>{title}</Slot>
        <div className='row-start-3 col-start-4 col-span-9 mt-8'>
          <AspectRatio ratio={1037 / 600} className='col-start-4 col-span-9'>
            <Slot className='size-full object-cover'>{img}</Slot>
          </AspectRatio>
        </div>
      </li>
    </Grid>
  );
}
