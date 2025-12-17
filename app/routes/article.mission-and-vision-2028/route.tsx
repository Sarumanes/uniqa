import BannerFullScreen from '@app/components/banner-full-screen';
import Footer from '@app/components/footer';
import Grid from '@app/components/grid';
import ArrowLeftIcon from '@app/components/icons/arrow-left-icon';
import ArrowRightIcon from '@app/components/icons/arrow-right-icon';
import Navbar from '@app/components/navbar';
import { Button } from '@app/components/ui/button';
import { Link } from '@remix-run/react';
import Divider from '@app/components/ui/divider';
import UniqaDay from '@app/components/external-banners/uniqa-day';
import bg from './imgs/bg.png';
import graph from './imgs/graph.png';
import mission1 from './imgs/mission-1.png';
import ExternalBannersCarousel from '@app/components/external-banners-carousel';
import RelatedArticle from '@app/components/related-article';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import ForewordCard from '@app/routes/article.foreword/card';
import OurStrategyCard from '@app/routes/article.our-strategy/card';
import WeFocusOnFamiliesCard from '@app/routes/article.we-focus-on-families/card';
import FinancialHouseCard from '@app/routes/article.financial-house/card';

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
                <h1 className='text-5xl font-semibold max-w-[1090px] text-center'>Vize a strategie 2025–2028</h1>
              </div>
              <Button variant='secondary-ghost' asChild className='col-start-1 col-span-2'>
                <Link to='/article' viewTransition>
                  <ArrowLeftIcon />
                  Všechna témata
                </Link>
              </Button>
              <div className='col-start-7 col-span-2 flex items-center justify-between'>
                <Button variant='secondary-ghost' asChild>
                  <Link to='/article/foreword' viewTransition>
                    <ArrowLeftIcon />
                    Předchozí
                  </Link>
                </Button>
                <Button variant='secondary-ghost' asChild>
                  <Link to='/article/our-culture' viewTransition>
                    Další
                    <ArrowRightIcon />
                  </Link>
                </Button>
              </div>
            </div>
          </Grid>
        </BannerFullScreen>

        <Grid className='grid-rows-[repeat(4,auto)] gap-y-6'>
          <section className='container text-blue-1 pt-4 pb-20'>
            <h5 className='col-start-1 col-span-2 row-start-1 text-base font-semibold'>Co tvoří naši DNA</h5>
            <h5 className='col-start-4 col-span-2 row-start-1 text-base font-semibold'>Strategie</h5>
            <h1 className='col-start-7 col-span-6 row-start-1 text-2xl font-semibold'>Naše mise</h1>
            <h5 className='col-start-7 col-span-6 row-start-2 text-2xl pb-6'>
              Díky síle naší komunity chráníme a zlepšujeme zdraví a prosperitu. Zvolit si UNIQA znamená žít lépe. <b>Lepší život
              společně.</b>
            </h5>
            <h1 className='col-start-7 col-span-6 row-start-3 text-2xl font-semibold'>Naše vize</h1>
            <h5 className='col-start-7 col-span-6 row-start-4 text-2xl'>
              V roce 2028 je UNIQA Česká republika a Slovensko <b>naším výjimečným finančním domem</b>. Využíváme
              omnichannel řešení, abychom poskytovali nejlepší služby zákazníkům. Trh nás vnímá jako společnost s řešeními
              zaměřenými na potřeby rodiny.
            </h5>
          </section>
        </Grid>
        <Grid className='grid-rows-[repeat(5,auto)] gap-y-6'>
          <section className='container text-blue-1 pb-32'>
            <h1 className='row-start-1 col-start-7 col-span-5 text-xl font-semibold'>Vize a strategie 2025–2028</h1>
            <Button className='row-start-1 col-start-11 col-span-2 justify-self-end self-end' variant='primary-ghost' asChild>
              <Link to='/article/our-strategy' viewTransition>
                Zjistit více <ArrowRightIcon />
              </Link>
            </Button>
            <Divider className='row-start-2 col-start-7 col-span-6' />
            <div className='row-start-3 row-span-3 col-start-7 col-span-6'>
              <p className='text-lg pb-4'>
                Naše strategie na období 2025–2028 vychází ze strategie skupiny UNIQA, ale zároveň naplňuje naše lokální vize a potřeby. Zaměřuje se na 3 klíčové oblasti, 1 podpůrnou oblast a 1 diferenciátor:{' '}
              </p><br />
              <p><b>Klíčové oblasti:</b></p>
              <ul className='list-disc text-lg ps-8'>
                <li>Jsme ekonomicky úspěšní</li>
                <li>Jsme preferovaným zaměstnavatelem</li>
                <li>Poskytujeme nejlepší služby</li>
              </ul>
              <br />
              <p><b>Podpůrná oblast:</b></p>
              <ul className='list-disc text-lg ps-8'>
                <li>Operational Excellence</li>
              </ul>
              <br />
              <p><b>Diferenciátor:</b></p>
              <ul className='list-disc text-lg ps-8'>
                <li>Zaměření na rodinu</li>
              </ul>
            </div>
            <div className='row-start-4 row-span-2 col-start-1 col-span-7 ps-6'>
              <AspectRatio ratio={778 / 737}>
                <img src={graph} className='size-full object-cover' alt='graph' />
              </AspectRatio>
            </div>
          </section>
        </Grid>
        <Grid className='grid-rows-[repeat(2,auto)] gap-y-6'>
          <section className='container text-blue-1 pb-20'>
            <header className='row-start-1 row-span-2 col-start-1 col-span-2'>
              <h1 className='text-lg font-semibold pb-1'>Naše hodnoty</h1>
              <p className='text-base'>V naplňování naší vize nám pomáhají hodnoty, kterými se jménem značky UNIQA řídíme.</p>
            </header>
            <div className='row-start-1 row-span-2 col-start-3 col-span-4'>
              <AspectRatio ratio={382 / 243}>
                <img src={mission1} alt='two people shaking hands' className='size-full object-cover' />
              </AspectRatio>
            </div>
            <div className='row-start-1 col-start-7 col-span-6 flex flex-col gap-y-6 pb-20'>
              <Divider />
              <h2 className='text-2xl font-semibold'>Zákazník na prvním místě</h2>
              <p className='text-lg'>
                Aktivně přicházíme s řešeními, která reagují na potřeby našich zákazníků a mají pozitivní dopad na jejich
                zákaznickou zkušenost.
              </p>
              <Divider />
              <h2 className='text-2xl font-semibold'>Jednoduchost</h2>
              <p className='text-lg'>
                Aktivně hledáme způsoby, jak zjednodušit, zlepšit a digitalizovat procesy pro naše zákazníky a kolegy.
              </p>
              <Divider />
              <h2 className='text-2xl font-semibold'>Zodpovědnost</h2>
              <p className='text-lg'>
                Přijímáme odpovědnost, projevujeme odvahu a ochotu rozhodovat a umožňujeme ostatním, aby dělali totéž.
              </p>
              <Divider />
              <h2 className='text-2xl font-semibold'>Integrita</h2>
              <p className='text-lg'>
                Své hodnoty žijeme a prosazujeme v každodenní práci. Když vidíme, že se někdo chová v rozporu s nimi, dáme mu
                zpětnou vazbu.
              </p>
              <Divider />
              <h2 className='text-2xl font-semibold'>Komunita</h2>
              <p className='text-lg'>
                Svým příkladem povzbuzujeme ostatní k dosažení společných cílů. Spolupracujeme napříč týmy a zeměmi.
              </p>
            </div>
            <div className='row-start-3 col-start-7 col-span-6'>
              <AspectRatio ratio={1038 / 581}>
                <iframe
                  title='uniqa-video'
                  className='size-full'
                  src='https://www.youtube.com/embed/22FqWuJF9BE?autoplay=1&mute=1'
                ></iframe>
              </AspectRatio>
            </div>
          </section>
        </Grid>
        <ExternalBannersCarousel className='pb-26' startIndex={5} />
        <RelatedArticle>
          <WeFocusOnFamiliesCard className='col-span-3' />
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
