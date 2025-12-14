import Grid from '@app/components/grid';
import ArrowLeftIcon from '@app/components/icons/arrow-left-icon';
import ArrowRightIcon from '@app/components/icons/arrow-right-icon';
import Navbar from '@app/components/navbar';
import { Button } from '@app/components/ui/button';
import { Link } from '@remix-run/react';
import { PropsWithChildren, ReactNode } from 'react';
import bg from './imgs/bg.png';
import customer from './imgs/customer.png';
import simplicity from './imgs/simplicity.png';
import responsibility from './imgs/responsibility.png';
import integrity from './imgs/integrity.png';
import community from './imgs/community.png';
import Footer from '@app/components/footer';
import { cn } from '@app/libs/utils';
import CommunicationIcon from '@app/components/icons/communication-icon';
import CallendarIcon from '@app/components/icons/callendar-icon';
import OnlineMeetIcon from '@app/components/icons/online-meet-icon';
import BannerFullScreen from '@app/components/banner-full-screen';
import { Slot } from '@radix-ui/react-slot';
import RelatedArticle from '@app/components/related-article';
import ExternalBannersCarousel from '@app/components/external-banners-carousel';
import CustomerTime from '@app/components/external-banners/customer-time';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import FinancialHouseCard from '@app/routes/article.financial-house/card';
import ForewordCard from '@app/routes/article.foreword/card';
import MissionAndVision2028Card from '@app/routes/article.mission-and-vision-2028/card';
import OurStrategyCard from '@app/routes/article.our-strategy/card';
import UniqaDay from '@app/components/external-banners/uniqa-day';

export default function Page() {
  return (
    <>
      <main className='relative bg-blue-1/10'>
        <div className='absolute top-0 z-10 w-full'>
          <Navbar className='items-center py-5' variant='secondary' />
        </div>
        <BannerFullScreen className='text-white' img={<img src={bg} alt='hero' className='object-center object-cover' />}>
          <Grid className='grid-rows-[1fr_auto]'>
            <div className='container relative pb-4 pt-20'>
              <div className='col-span-full row-start-1 flex items-center justify-center'>
                <h1 className='text-5xl font-semibold max-w-[1090px] text-center'>Naše kultura</h1>
              </div>
              <Button variant='secondary-ghost' asChild className='col-start-1 col-span-2'>
                <Link to='/article' viewTransition>
                  <ArrowLeftIcon />
                  Všechna témata
                </Link>
              </Button>
              <div className='col-start-7 col-span-2 flex items-center justify-between'>
                <Button variant='secondary-ghost' asChild>
                  <Link to='/article/mission-and-vision-2028' viewTransition>
                    <ArrowLeftIcon />
                    Předchozí
                  </Link>
                </Button>
                <Button variant='secondary-ghost' asChild>
                  <Link to='/article/we-focus-on-families' viewTransition>
                    Další
                    <ArrowRightIcon />
                  </Link>
                </Button>
              </div>
            </div>
          </Grid>
        </BannerFullScreen>
        <Grid className='grid-rows-[auto_auto_auto] gap-y-18'>
          <section className='pt-6 pb-44 container text-blue-1'>
            <h5 className='col-start-1 col-span-2 row-start-1 text-base text-blue-1 font-semibold'>Co tvoří naši DNA</h5>
            <h5 className='col-start-4 col-span-1 row-start-1 text-base text-blue-1 font-semibold'>Kultura</h5>
            <header className='col-start-7 col-span-6 row-start-1 flex flex-col gap-y-4'>
              <h1 className='text-2xl font-semibold'>
                V UNIQA věříme, že silná kultura spolupráce a inovací je tím, co nás posouvá vpřed.
              </h1>
              <p className='text-lg'>
                Každý z nás má možnost ovlivnit, jak se v práci cítíme my i naši kolegové, a jak vnímáme naši společnou misi.
                Abychom si v tomhle směru mohli lépe pomáhat, vytvořili jsme Kulturní kompas.
              </p>
            </header>
            <div className='col-start-2 col-span-10 row-start-2'>
              <AspectRatio ratio={1156 / 647}>
                <iframe
                  title='article-video'
                  className='size-full object-cover'
                  src='https://www.youtube.com/embed/_QrIHLrWQFo?autoplay=1&mute=1'
                ></iframe>
              </AspectRatio>
            </div>
            <p className='col-start-7 col-span-6 row-start-3 text-lg'>
              Tento kompas nás provází v každodenní práci – od toho, jak komunikujeme s klienty, až po způsob, jak spolupracujeme
              mezi sebou. Je to náš návod, jak z UNIQA dělat lepší místo pro práci i pro naše zákazníky. Společně tvoříme kulturu,
              která stojí na důvěře, jednoduchosti a vzájemné podpoře. Děkujeme, že jste její součástí!
            </p>
          </section>
        </Grid>
        <Grid className='grid-rows-[auto_auto_auto_auto_auto] gap-y-8'>
          <section className='container pb-26'>
            <ArticleThemeSection
              title='Zákazník na prvním místě'
              description='Proaktivně přicházím s řešeními, která reagují na potřeby našich zákazníků.'
              image={
                <div className='col-start-1 col-span-5 justify-self-center w-full max-w-[442px]'>
                  <AspectRatio ratio={1 / 1}>
                    <img src={customer} alt='Customer first' className='size-full object-cover' />
                  </AspectRatio>
                </div>
              }
            />
            <ArticleThemeSection
              title='Jednoduchost'
              description='Aktivně hledám způsoby, jak zjednodušit, zlepšit a digitalizovat procesy pro naše zákazníky i kolegy.'
              image={
                <div className='col-start-1 col-span-5 justify-self-center w-full max-w-[468px]'>
                  <AspectRatio ratio={1 / 1}>
                    <img src={simplicity} alt='Simplicity' className='size-full object-cover' />
                  </AspectRatio>
                </div>
              }
            />
            <ArticleThemeSection
              title='Zodpovědnost'
              description='Přebírám zodpovědnost, projevuji odvahu a ochotu rozhodovat a dávám ostatním možnost dělat totéž.'
              image={
                <div className='col-start-1 col-span-5 justify-self-center w-full max-w-[442px]'>
                  <AspectRatio ratio={1 / 1}>
                    <img src={responsibility} alt='Responsibility' className='size-full object-cover' />
                  </AspectRatio>
                </div>
              }
            />
            <ArticleThemeSection
              title='Integrita'
              description='Naše hodnoty žiji a prosazuji v každodenní práci. Když vidím, že se někdo chová v rozporu s nimi, poskytnu mu zpětnou vazbu.'
              image={
                <div className='col-start-1 col-span-5 justify-self-center w-full max-w-[480px]'>
                  <AspectRatio ratio={1 / 1}>
                    <img src={integrity} alt='Integrity' className='size-full object-cover' />
                  </AspectRatio>
                </div>
              }
            />
            <ArticleThemeSection
              title='Komunita'
              description='Svým příkladem podporuji ostatní k dosažení společných cílů. Spolupracuji napříč týmy a zeměmi.'
              image={
                <div className='col-start-1 col-span-5 justify-self-center w-full max-w-[504px]'>
                  <AspectRatio ratio={1 / 1}>
                    <img src={community} alt='Community' className='size-full object-cover' />
                  </AspectRatio>
                </div>
              }
            />
          </section>
        </Grid>
        <section className='container pb-28'>
          <CustomerTime />
        </section>
        <Grid className='grid-rows-[auto_auto] gap-y-22'>
          <section className='container pb-14'>
            <header className='flex flex-col items-center col-span-full row-start-1 gap-y-2'>
              <h1 className='text-3xl font-semibold text-center text-blue-1'>Firemní charta</h1>
              <p className='text-center max-w-[542px] text-blue-1 text-lg'>
                Charta nám pomáhá definovat, co je pro nás důležité, a jakým způsobem chceme společně každý den pracovat.
                Oslovujeme se křestním jménem, podporuje to přístupnost a otevřenou komunikaci.
              </p>
            </header>
            <OurValues icon={<CommunicationIcon />} title={<h1>Komunikace</h1>} className='col-span-4 row-start-2'>
              <li>
                E-mail používáme pro formální a komplexní informace, zatímco chat nebo telefon volíme pro rychlé dotazy nebo
                urgentní věci.
              </li>
              <li>Na e-maily odpovídáme do 48 hodin v pracovních dnech pro předvídatelnost a plynulost práce.</li>
              <li>E-maily píšeme stručné a relevantní pro potřebné příjemce. Manažery zahrnujeme jen v nutných případech.</li>
            </OurValues>
            <OurValues icon={<CallendarIcon />} title={<h1>Čas</h1>} className='col-span-4 row-start-2'>
              <li>Čas od 12:00 do 13:00 necháváme bez schůzek, aby byl prostor na odpočinek či společné chvíle.</li>
              <li>chůzky plánujeme na 50 nebo 25 minut, aby zbyl čas na oddech a přechod k dalším úkolům.</li>
              <li>
                Když nejsme v práci déle než den, nastavíme automatickou odpověď, aby ostatní věděli, kdy se nám mohou ozvat, a
                měli kontakt na případné zastoupení.
              </li>
            </OurValues>
            <OurValues icon={<OnlineMeetIcon />} title={<h1>Schůzky</h1>} className='col-span-4 row-start-2'>
              <li>
                Než svoláme schůzku, zvažujeme, zda se situace nedá vyřešit jinak – schůzky jsou časově náročné a měly by mít
                jasný přínos.
              </li>
              <li>Vždy připravíme jasnou agendu a rozdělíme role, aby každý věděl, proč je zván a co se očekává.</li>
              <li>Při online schůzkách zapínáme kamery – zvyšuje to zapojení a zlepšuje atmosféru.</li>
            </OurValues>
          </section>
        </Grid>
        <ExternalBannersCarousel startIndex={0} className='pb-6' />
        <section className='container pb-26'>
          <UniqaDay />
        </section>
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

type ArticleThemeSectionProps = {
  image: ReactNode;
  title: ReactNode;
  description: ReactNode;
};

function ArticleThemeSection({ image, title, description }: ArticleThemeSectionProps) {
  return (
    <Grid>
      <section className='col-span-full pt-8 border-t-[1.5px] border-t-blue-1'>
        {image}
        <div className='col-start-7 col-span-5 flex flex-col justify-between'>
          <div className='flex flex-col gap-y-4'>
            <h2 className='text-2xl font-semibold text-blue-1'>{title}</h2>
            <p className='text-2xl text-blue-1'>{description}</p>
          </div>
        </div>
      </section>
    </Grid>
  );
}

type OurValuesProps = PropsWithChildren<{
  icon: ReactNode;
  title: ReactNode;
  className?: string;
}>;

function OurValues({ icon, title, children, className }: OurValuesProps) {
  return (
    <article className={cn('bg-blue-1/20 flex flex-col gap-y-2 py-21 px-16', className)}>
      <Slot className='stroke-blue-1'>{icon}</Slot>
      <Slot className='pb-2 text-xl font-semibold text-blue-1'>{title}</Slot>
      <ul className='list-decimal text-blue-1 text-base flex flex-col gap-y-4'>{children}</ul>
    </article>
  );
}
