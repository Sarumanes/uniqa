import Footer from '@app/components/footer';
import Navbar from '@app/components/navbar';
import BannerFullScreen from '@app/components/banner-full-screen';
import ExternalBannersCarousel from '@app/components/external-banners-carousel';
import Grid from '@app/components/grid';
import ArrowLeftIcon from '@app/components/icons/arrow-left-icon';
import ArrowRightIcon from '@app/components/icons/arrow-right-icon';
import RelatedArticle from '@app/components/related-article';
import { Button } from '@app/components/ui/button';
import { Link } from '@remix-run/react';
import Divider from '@app/components/ui/divider';
import bg from './imgs/bg.png';
import forword1 from './imgs/foreword-1.png';
import forword2 from './imgs/foreword-2.png';
import signature from './imgs/signature.png';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import MissionAndVision2028Card from '@app/routes/article.mission-and-vision-2028/card';
import OurStrategyCard from '@app/routes/article.our-strategy/card';
import FinancialHouseCard from '@app/routes/article.financial-house/card';
import WeFocusOnFamiliesCard from '@app/routes/article.we-focus-on-families/card';

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
                <h1 className='text-5xl font-semibold max-w-[1090px] text-center'>Úvodní slovo</h1>
              </div>
              <Button variant='secondary-ghost' asChild className='col-start-1 col-span-2'>
                <Link to='/article' viewTransition>
                  <ArrowLeftIcon />
                  Všechna témata
                </Link>
              </Button>
              <div className='col-start-7 col-span-2 flex items-center justify-between'>
                <Button variant='secondary-ghost' asChild>
                  <Link to='/article/our-strategy' viewTransition>
                    <ArrowLeftIcon />
                    Předchozí
                  </Link>
                </Button>
                <Button variant='secondary-ghost' asChild>
                  <Link to='/article/mission-and-vision-2028' viewTransition>
                    Další
                    <ArrowRightIcon />
                  </Link>
                </Button>
              </div>
            </div>
          </Grid>
        </BannerFullScreen>
        <Grid className='grid-rows-[repeat(4,auto)] gap-y-6'>
          <section className='container text-blue-1 pt-4 pb-14'>
            <h5 className='col-start-1 col-span-2 row-start-1 text-base font-semibold'>Co tvoří naši DNA</h5>
            <h5 className='col-start-4 col-span-2 row-start-1 text-base font-semibold'>Strategie</h5>
            <h1 className='col-start-7 col-span-6 row-start-1 text-2xl font-semibold'>Úvod od CEO</h1>
            <h5 className='row-start-2 col-start-7 col-span-6 text-2xl pb-4'>
              Lepší život pre našich zákazníkov, lepší život pre vás, našich zamestnancov, lepší život pre nás všetkých spoločne.
              To je UNIQA, to sme my, to je naša DNA. Viem to, lebo UNIQA je celý môj profesionálny život a veľa pre mňa znamená.
              UNIQA je moja rodina.
            </h5>
            <p className='row-start-3 col-start-7 col-span-6 text-xl pb-16'>
              Som rád a hrdý na to, že sme silný finančný dom s krásnym poslaním. Pomáhame našim zákazníkom v ťažkých, dokonca
              niekedy až v kritických životných situáciách a staráme sa o ich finančné zdravie vo všetkých fázach života.
            </p>
            <div className='col-start-4 col-span-9'>
              <AspectRatio ratio={1037 / 600}>
                <img src={forword1} alt='ceo in front of a tv' className='size-full object-cover' />
              </AspectRatio>
            </div>
          </section>
        </Grid>
        <Grid className='grid-rows[repeat(3,auto)] gap-y-6'>
          <section className='container text-blue-1 pb-28'>
            <h1 className='row-start-2 col-start-4 col-span-9 text-3xl font-semibold pb-10'>
              Uľahčovať život našim zákazníkom v dnešných turbulentných časoch nie je málo. Je to všetko. Vy to svojou každodennou
              prácou robíte. A za to vám ďakujem.
            </h1>
            <h5 className='row-start-3 col-start-7 col-span-6 text-xl'>
              Žijeme dynamickú dobu, ktorú sprevádzajú následky klimatickej zmeny, ekonomická neistota, globálne konflikty a
              vznikajú nové bezpečnostné hrozby. Súbežne s tým sa menia aj potreby našich zákazníkov, na ktoré potrebujeme
              reagovať rýchlo a flexibilne. Mindset neustálej transformácie a interná kultúra založená na spolupráci a skúšaní
              nových prístupov a nápadov sú kľúčové atribúty, ako uspieť.
              <br />
              <br />
              UNIQA Česko a Slovensko sa musí stať moderným, zdravým a prosperujúcim finančným domom, ktorý bude poskytovať svojim
              zákazníkom najlepšie služby a bude na trhu vnímaný ako spoločnosť s riešeniami zameranými na potreby rodiny vo
              všetkých formách.
              <br /> <br />
              Táto symbolika sa mi páči. Ak sa budeme k sebe navzájom správať ako rodina, tak to pocítia v prístupe aj naši
              zákazníci. Nie je to žiadna revolúcia. Aj naďalej musí zostať zákazník na prvom mieste. Potrebujeme viac
              zjednodušovať a digitalizovať naše procesy, nebáť sa prevziať zodpovednosť, vytvárať spolupracujúce komunity a držať
              sa našich hodnôt.
            </h5>
          </section>
        </Grid>
        <Grid className='grid-rows-[repeat(4,auto)] gap-y-6 pb-18'>
          <section className='container text-blue-1'>
            <Divider className='col-start-4 col-span-9 row-start-1' />
            <h1 className='col-start-4 col-span-9 row-start-2 text-3xl font-semibold pb-12'>
              Naša stratégia je vo svojej podstate veľmi jednoduchá. Potrebujeme výrazne zlepšiť profitabilitu neživotného
              poistenia, aby sme boli schopní investovať do inovácií a zostali konkurencieschopní.
            </h1>
            <h5 className='col-start-7 col-span-6 row-start-3 text-xl pb-10'>
              Meradlom úspechu zdravia každej spoločnosti je spokojnosť zamestnancov a efektívnosť našich procesov a technológií,
              ktoré nám našu prácu zjednodušujú. Sme ako výborne zohratý orchester, ktorého hudba robí radosť a spája. A netreba
              zabúdať na to, že čokoľvek robíme, má svojho zákazníka, interného alebo externého. Zlepšovanie spokojnosti našich
              zákazníkov a partnerov je podstatou našej existencie.
              <br /> <br />
              Pozývam vás, aby sme tieto ciele spoločne naplnili, aby sme sa stali lepšími pre nás a pre našich zákazníkov. Urobme
              spolu pre to všetko.
            </h5>
            <div className='col-start-4 col-span-9 row-start-4'>
              <AspectRatio ratio={1037 / 600}>
                <img src={forword2} alt='people with uniqa logo' className='size-full object-cover' />
              </AspectRatio>
            </div>
          </section>
        </Grid>
        <Grid className='grid-rows-[repeat(3,auto)] gap-y-6'>
          <section className='container text-blue-1 pb-12'>
            <h1 className='col-start-4 col-span-9 row-start-2 text-4xl font-semibold pb-16'>
              Veď &nbsp;lepší život <br />
              spoločne je naša DNA.
            </h1>
            <div className='col-start-9 col-span-3 row-start-3'>
              <AspectRatio ratio={343 / 202}>
                <img src={signature} alt='signature' className='mix-blend-multiply size-full object-cover' />
              </AspectRatio>
            </div>
          </section>
        </Grid>
        <ExternalBannersCarousel startIndex={4} className='pb-34' />
        <RelatedArticle>
          <MissionAndVision2028Card className='col-span-3' />
          <OurStrategyCard className='col-span-3' />
          <FinancialHouseCard className='col-span-3' />
          <WeFocusOnFamiliesCard className='col-span-3' />
        </RelatedArticle>
      </main>
      <Footer />
    </>
  );
}

export default Page;
