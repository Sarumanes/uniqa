import Footer from '@app/components/footer';
import Navbar from '@app/components/navbar';
import BannerFullScreen from '@app/components/banner-full-screen';
import Grid from '@app/components/grid';
import ArrowLeftIcon from '@app/components/icons/arrow-left-icon';
import ArrowRightIcon from '@app/components/icons/arrow-right-icon';
import { Button } from '@app/components/ui/button';
import { Link } from '@remix-run/react';
import { MetricDisplay, MetricDisplayContent, MetricDisplayNumber, MetricDisplayTitle } from '@app/components/metric-display';
import Divider from '@app/components/ui/divider';
import CustomLi from '@app/components/custom-li';
import bg from './imgs/bg.png';
import strategy1 from './imgs/strategy-1.png';
import strategy2 from './imgs/strategy-2.png';
import strategy3 from './imgs/strategy-3.png';
import strategy4 from './imgs/strategy-4.png';
import strategy5 from './imgs/strategy-5.png';
import ExternalBannersCarousel from '@app/components/external-banners-carousel';
import RelatedArticle from '@app/components/related-article';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import FinancialHouseCard from '@app/routes/article.financial-house/card';
import OurCultureCard from '@app/routes/article.our-culture/card';
import ForewordCard from '@app/routes/article.foreword/card';
import MissionAndVision2028Card from '@app/routes/article.mission-and-vision-2028/card';

function Page() {
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
                <h1 className='text-5xl font-semibold max-w-[1090px] text-center'>Detaily naší strategie</h1>
              </div>
              <Button variant='secondary-ghost' asChild className='col-start-1 col-span-2'>
                <Link to='/article' viewTransition>
                  <ArrowLeftIcon />
                  Všechna témata
                </Link>
              </Button>
              <div className='col-start-7 col-span-2 flex items-center justify-between'>
                <Button variant='secondary-ghost' asChild>
                  <Link to='/article/financial-house' viewTransition>
                    <ArrowLeftIcon />
                    Předchozí
                  </Link>
                </Button>
                <Button variant='secondary-ghost' asChild>
                  <Link to='/article/foreword' viewTransition>
                    Další
                    <ArrowRightIcon />
                  </Link>
                </Button>
              </div>
            </div>
          </Grid>
        </BannerFullScreen>
        <Grid className='grid-rows-[repeat(2,auto)] gap-y-12 pt-6 pb-26'>
          <section className='text-blue-1 container'>
            <h5 className='col-start-1 col-span-2 row-start-1 text-base font-semibold'>Co tvoří naši DNA</h5>
            <h5 className='col-start-4 col-span-2 row-start-1 text-base font-semibold'>Strategie</h5>
            <h2 className='row-start-1 col-start-7 col-span-6 text-2xl'>
              Naše strategie na období 2025–2028 vychází ze strategie skupiny UNIQA, ale zároveň naplňuje naše lokální vize a potřeby. Zaměřuje se na 3 klíčové oblasti, 1 podpůrnou oblast a 1 diferenciátor:
            </h2>
            <p className='row-start-2 col-start-7 col-span-6 text-xl font-medium'> <b>
             Klíčové oblasti:</b>
            </p>
            <ul className='row-start-3 col-start-7 col-span-6 text-2xl list-disc ps-14'>
              <li>Jsme ekonomicky úspěšní</li>
                <li>Jsme preferovaným zaměstnavatelem</li>
                <li>Poskytujeme nejlepší služby</li>
            </ul>

             <p className='row-start-4 col-start-7 col-span-6 text-xl font-medium'> <b>
             Podpůrná oblast:</b>
            </p>
            <ul className='row-start-5 col-start-7 col-span-6 text-2xl list-disc ps-14'>
              <li>Operational Excellence</li>
            </ul>

             <p className='row-start-6 col-start-7 col-span-6 text-xl font-medium'> <b>
             Diferenciátor:</b>
            </p>
            <ul className='row-start-7 col-start-7 col-span-6 text-2xl list-disc ps-14'>
              <li>Zaměření na rodinu</li>
            </ul>
          </section>
        </Grid>
        <Grid className='grid-rows-[repeat(4,auto)] gap-y-4'>
          <section className='container text-blue-1 pb-18'>
            <h5 className='row-start-1 col-start-1 col-span-2 self-end text-lg font-semibold'>Ukazatel úspěchu</h5>
            <h2 className='row-start-1 col-start-7 col-span-5 pb-2 text-2xl'>
              <strong>Prosperita: ziskový růst</strong>&nbsp; Výrazně zlepšujeme ziskovost neživotních produktů
            </h2>
            <MetricDisplay className='row-start-2 col-start-1 col-span-3 '>
              <MetricDisplayContent className='opacity-50'>
                <MetricDisplayTitle className='flex justify-between items-center pe-0'>
                  CoR z neživ. pojištění (odhad)<span>2024</span>
                </MetricDisplayTitle>
                <MetricDisplayNumber>97%</MetricDisplayNumber>
              </MetricDisplayContent>
            </MetricDisplay>
            <MetricDisplay className='row-start-2 col-start-4 col-span-3'>
              <MetricDisplayContent>
                <MetricDisplayTitle className='flex justify-between items-center pe-0'>
                  CoR z neživ. pojištění (odhad)<span>2028</span>
                </MetricDisplayTitle>
                <MetricDisplayNumber>86.1%</MetricDisplayNumber>
              </MetricDisplayContent>
            </MetricDisplay>
            <div className='flex flex-col row-start-2 row-span-2 col-start-7 col-span-3'>
              <Divider />
              <ul className='pt-4 text-lg ps-6'>
                <CustomLi className=''>Zvyšujeme ziskovost finančního domu ve všech obchodních modelech</CustomLi>
                <CustomLi>Zvyšujeme předpis v souladu se</CustomLi>
              </ul>
            </div>
            <div className='flex flex-col row-start-2 row-span-2 col-start-10 col-span-3'>
              <Divider />
              <ul className='list-disc text-lg ps-6 pt-4'>
                <li>Investujeme do inovací, abychom si udrželi konkurenceschopnost</li>
              </ul>
            </div>
            <MetricDisplay className='row-start-3 col-start-1 col-span-3 '>
              <MetricDisplayContent className='opacity-50'>
                <MetricDisplayTitle className='flex justify-between items-center pe-0'>
                  Čistý výsledek z neživ. pojištění<span>2024</span>
                </MetricDisplayTitle>
                <MetricDisplayNumber>
                  <small>€</small>
                  -1.6
                  <small>mil</small>
                </MetricDisplayNumber>
              </MetricDisplayContent>
            </MetricDisplay>
            <MetricDisplay className='row-start-3 col-start-4 col-span-3'>
              <MetricDisplayContent>
                <MetricDisplayTitle className='flex justify-between items-center pe-0'>
                  Čistý výsledek z neživ. pojištění<span>2028</span>
                </MetricDisplayTitle>
                <MetricDisplayNumber>
                  <small>€</small>
                  27.8
                  <small>mil</small>
                </MetricDisplayNumber>
              </MetricDisplayContent>
            </MetricDisplay>
            <div className='row-start-4 col-start-4 col-span-9 mt-20 block'>
              <AspectRatio ratio={1037 / 600}>
                <img src={strategy1} alt='people are planting a plant' className='size-full object-cover' />
              </AspectRatio>
            </div>
          </section>
        </Grid>
        <Grid className='grid-rows-[repeat(3,auto)] gap-y-6'>
          <section className='container text-blue-1 pb-28'>
            <h5 className='row-start-1 col-start-1 col-span-3 text-lg font-semibold self-end'>
              Ukazatel úspěchu: Zaměstnanecká zkušenost
            </h5>
            <h2 className='row-start-1 col-start-7 col-span-5 text-2xl'>
              <strong>Zdraví: lidé a kultura</strong>
              <br />
              Jsme preferovaným zaměstnavatelem v oblasti pojišťovnictví
            </h2>
            <MetricDisplay className='row-start-2 col-start-1 col-span-3 '>
              <MetricDisplayContent className='opacity-50'>
                <MetricDisplayNumber className='flex justify-between text-3xl'>
                  4.0<small className='self-start text-base pt-2'>2024</small>
                </MetricDisplayNumber>
              </MetricDisplayContent>
            </MetricDisplay>
            <MetricDisplay className='row-start-2 col-start-4 col-span-3'>
              <MetricDisplayContent>
                <MetricDisplayNumber className='flex justify-between text-3xl'>
                  4.5* z 5*<small className='self-start text-base pt-2'>2028</small>
                </MetricDisplayNumber>
              </MetricDisplayContent>
            </MetricDisplay>
            <div className='row-start-2 col-start-7 col-span-3'>
              <Divider />
              <ul className='pt-4 text-lg ps-6'>
                <CustomLi>Žijeme kulturou spolupráce a inovací</CustomLi>
                <CustomLi>Zlepšujeme se na základě zpětné vazby od zaměstnanců</CustomLi>
                <CustomLi>Rozvíjíme klíčové dovednosti pro budoucí úspěch</CustomLi>
              </ul>
            </div>
            <div className='row-start-2 col-start-10 col-span-3'>
              <Divider />
              <ul className='pt-4 text-lg ps-6'>
                <CustomLi>Efektivně využíváme agilní metody</CustomLi>
                <li className='list-disc'>Chováme se zodpovědně k planetě a společnosti</li>
              </ul>
            </div>
            <div className='row-start-3 col-start-4 col-span-9 block mt-14'>
              <AspectRatio ratio={1037 / 600}>
                <img src={strategy2} alt='group of people in circle with fist' className='size-full object-cover' />
              </AspectRatio>
            </div>
          </section>
        </Grid>
        <Grid className='grid-rows-[repeat(3,auto)] gap-y-6'>
          <section className='container text-blue-1 pb-14'>
            <h5 className='row-start-1 col-start-1 col-span-3 text-lg font-semibold self-end'>
              Ukazatel úspěchu: Self-service 50%, Automatizace 50%
            </h5>
            <h2 className='row-start-1 col-start-7 col-span-6 text-2xl'>
              <strong>Zdraví: Operational Excellence</strong>
              <br />
              Naše procesy jsou efektivní. Jsme digitálně orientovaná společnost
            </h2>
            <MetricDisplay className='row-start-2 col-start-1 col-span-3  self-start'>
              <MetricDisplayContent className='opacity-50'>
                <MetricDisplayTitle className='flex gap-x-2 pe-0'>
                  <span className='flex-1'>
                    Self-service
                    <br />
                    (odhad)
                  </span>
                  <span className='flex-1 inline-flex'>
                    Automatizace (odhad)
                    <strong>2024</strong>
                  </span>
                </MetricDisplayTitle>
                <MetricDisplayNumber className='flex justify-between text-3xl'>
                  <span className='flex-1'>24%</span>
                  <span className='flex-1'>17%</span>
                </MetricDisplayNumber>
              </MetricDisplayContent>
            </MetricDisplay>
            <MetricDisplay className='row-start-2 col-start-4 col-span-3 self-start'>
              <MetricDisplayContent>
                <MetricDisplayTitle className='flex gap-x-2 pe-0'>
                  <span className='flex-1'>
                    Self-service
                    <br /> (odhad)
                  </span>
                  <span className='flex-1 inline-flex'>
                    Automatizace (odhad)
                    <strong>2028</strong>
                  </span>
                </MetricDisplayTitle>
                <MetricDisplayNumber className='flex text-3xl'>
                  <span className='flex-1'>50%</span>
                  <span className='flex-1'>50%</span>
                </MetricDisplayNumber>
              </MetricDisplayContent>
            </MetricDisplay>
            <div className='row-start-2 col-start-7 col-span-3'>
              <Divider />
              <ul className='pt-4 text-lg ps-6'>
                <CustomLi>Optimalizujeme všechny naše procesy od začátku do konce.</CustomLi>
                <CustomLi>Efektivně řídíme směrování pojistných událostí, rozpočty a regresy.</CustomLi>
                <CustomLi>Využíváme umělou inteligenci a případy využití dat, kde je to relevantní</CustomLi>
              </ul>
            </div>
            <div className='row-start-2 col-start-10 col-span-3'>
              <Divider />
              <ul className='pt-4 text-lg ps-6'>
                <CustomLi>Máme harmonizované produkty v systému UNIPOINT</CustomLi>
                <CustomLi>Rozhodujeme se na základě spolehlivých a dostupných dat</CustomLi>
                <li className='list-disc'>Snižujeme počet našich žádostí a máme řešení pro INAS</li>
              </ul>
            </div>
            <div className='row-start-3 col-start-4 col-span-9 block mt-14'>
              <AspectRatio ratio={1037 / 600}>
                <img src={strategy3} alt='concert' className='size-full object-cover' />
              </AspectRatio>
            </div>
          </section>
        </Grid>
        <Grid className='grid-rows-[repeat(5,auto)] gap-y-6'>
          <section className='container text-blue-1 pb-24'>
            <h5 className='row-start-1 col-start-1 col-span-3 text-lg font-semibold self-end'>
              Ukazatel úspěchu: Spokojenost zákazníků
            </h5>
            <h2 className='row-start-1 col-start-7 col-span-6 text-2xl'>
              <strong>Nejlepší služby a Omnichannel: Zákazníci a Partneři.</strong>
              <br />
              Zlepšíme spokojenost zákazníků a partnerů ve všech zákaznických cestách.
            </h2>
            <MetricDisplay className='row-start-2 col-start-1 col-span-3'>
              <MetricDisplayContent className='opacity-50'>
                <MetricDisplayTitle className='flex justify-between items-center pe-0'>
                  Spokojenost zákazníků<span>2024</span>
                </MetricDisplayTitle>
                <MetricDisplayNumber className='text-3xl'>4.5* z 5*</MetricDisplayNumber>
              </MetricDisplayContent>
            </MetricDisplay>
            <MetricDisplay className='row-start-2 col-start-4 col-span-3'>
              <MetricDisplayContent>
                <MetricDisplayTitle className='flex justify-between items-center pe-0'>
                  Spokojenost zákazníků<span>2028</span>
                </MetricDisplayTitle>
                <MetricDisplayNumber className='text-3xl'>4.5* z 5*</MetricDisplayNumber>
              </MetricDisplayContent>
            </MetricDisplay>
            <MetricDisplay className='row-start-3 col-start-1 col-span-3'>
              <MetricDisplayContent className='opacity-50'>
                <MetricDisplayTitle className='flex justify-between items-center pe-0'>
                  Podíl počtu odpovědí od zákazníků<span>2024</span>
                </MetricDisplayTitle>
                <MetricDisplayNumber className='text-3xl'>4.7 %</MetricDisplayNumber>
              </MetricDisplayContent>
            </MetricDisplay>
            <MetricDisplay className='row-start-3 col-start-4 col-span-3'>
              <MetricDisplayContent>
                <MetricDisplayTitle className='flex justify-between items-center pe-0'>
                  Podíl počtu odpovědí od zákazníků<span>2028</span>
                </MetricDisplayTitle>
                <MetricDisplayNumber className='text-3xl'>8.0 %</MetricDisplayNumber>
              </MetricDisplayContent>
            </MetricDisplay>
            <div className='row-start-2 row-span-3 col-start-7 col-span-3'>
              <Divider />
              <ul className='pt-4 text-lg ps-6'>
                <CustomLi>
                  Partnerům umožňujeme okamžité připojení k produktům a procesům prostřednictvím rozhraní Webshop API.
                </CustomLi>
                <CustomLi>
                  Prostřednictvím mojaUNIQA poskytujeme všechny relevantní služby pro individuální i firemní zákazníky.
                </CustomLi>
                <CustomLi>
                  Efektivně realizujeme skupinové iniciativy (Assurebanking, USBS, CBN, Affinity Commerce, digitalizace bankovního
                  pojištění).
                </CustomLi>
                <CustomLi>Podporujeme obchodní strategii prostřednictvím brandingu</CustomLi>
                <CustomLi>Neustále zlepšujeme know-how v oblasti tvorby cen neživotních produktů</CustomLi>
                <CustomLi>Máme připravený omnichannel produkt pro motorová vozidla</CustomLi>
                <CustomLi>Zdvojnásobujeme podíl v přímém prodeji</CustomLi>
              </ul>
            </div>
            <div className='row-start-2 row-span-2 col-start-10 col-span-3'>
              <Divider />
              <ul className='pt-4 text-lg ps-6 list-disc'>
                <li>Definovali jsme hodnotu pro zákazníka napříč obchodními modely a produkty</li>
                <li>Používáme účinné nástroje pro udržení zákazníků</li>
                <li>Využíváme pokročilou analytiku k proaktivnímu oslovování zákazníků s produktem (službou)</li>
              </ul>
            </div>
            <div className='row-start-5 col-start-4 col-span-9 block mt-14'>
              <AspectRatio ratio={1037 / 600}>
                <img src={strategy4} alt='a laptop' className='size-full object-cover' />
              </AspectRatio>
            </div>
          </section>
        </Grid>
        <Grid className='grid-rows-[repeat(3,auto)] gap-y-6'>
          <section className='container pb-10 text-blue-1'>
            <h5 className='row-start-1 col-start-1 col-span-3 text-lg font-semibold self-end'>Ukazatel úspěchu:</h5>
            <h2 className='row-start-1 col-start-7 col-span-6 text-2xl'>
              <strong>Zaměření na rodiny.</strong>
              <br />
              Trh nás vnímá jako společnost s řešeními zaměřenými na potřeby rodin.
            </h2>
            <div className='row-start-2 col-start-1 col-span-3'>
              <Divider />
              <h3 className='pt-4 text-lg font-semibold'>
                Trh nás vnímá jako nejvíce rodinně orientovanou společnost mezi našimi konkurenty.
              </h3>
            </div>
            <div className='row-start-2 col-start-4 col-span-3'>
              <Divider />
              <p className='pt-4 text-base'>Vyhodnoceno externím průzkumem trhu</p>
            </div>
            <div className='row-start-2 col-start-7 col-span-3'>
              <Divider />
              <ul className='text-lg list-disc ps-6 pt-4'>
                <li>Naše produkty a služby zahrnují výhody a pomoc, které ocení každá rodina.</li>
                <li>Rozumíme potřebám různých rodin a podporujeme odpovídajícím způsobem iniciativy společenské odpovědnosti</li>
              </ul>
            </div>
            <div className='row-start-2 col-start-10 col-span-3'>
              <Divider />
              <ul className='text-lg list-disc ps-6 pt-4'>
                <li>
                  Při komunikaci s klienty se aktivně zajímáme o životní situaci rodiny, abychom poskytli řešení vhodná pro
                  každého jejího člena
                </li>
                <li>Zaměřením na rodinu žijeme také interně</li>
              </ul>
            </div>
            <div className='row-start-3 col-start-4 col-span-9 block mt-14'>
              <AspectRatio ratio={1037 / 600}>
                <img src={strategy5} alt='grid gallery' className='size-full object-cover' />
              </AspectRatio>
            </div>
          </section>
        </Grid>
        <ExternalBannersCarousel startIndex={3} className='pb-34' />
        <RelatedArticle>
          <MissionAndVision2028Card className='col-span-3' />
          <OurCultureCard className='col-span-3' />
          <FinancialHouseCard className='col-span-3' />
          <ForewordCard className='col-span-3' />
        </RelatedArticle>
      </main>
      <Footer />
    </>
  );
}

export default Page;
