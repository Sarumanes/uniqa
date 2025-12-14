import Grid from '@app/components/grid';
import { Accordion, AccordionContent, AccordionHeader, AccordionItem, AccordionTrigger } from '@app/components/ui/accordion';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';

function OurPrinciples() {
  return (
    <Grid className='grid-rows-[auto]'>
      <section className='container pt-16 pb-30 text-blue-1'>
        <header className='col-start-1 col-span-2 '>
          <h1 className='text-lg font-semibold pb-2'>Naše hodnoty</h1>
          <p className='text-base'>V naplňování naší vize nám pomáhají hodnoty, kterými se jménem značky UNIQA řídíme.</p>
        </header>
        <div className='col-start-3 col-span-4'>
          <AspectRatio ratio={424 / 270}>
            <img src='/imgs/our-principles.png' alt='Our Principles' className='size-full object-cover object-center' />
          </AspectRatio>
        </div>
        <div className='col-start-7 col-span-6'>
          <Accordion type='single' defaultValue={'0'} collapsible>
            <AccordionItem value='0'>
              <AccordionHeader>
                <AccordionTrigger>Zákazník na prvním místě</AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                Aktivně přicházíme s řešeními, která reagují na potřeby našich zákazníků a mají pozitivní dopad na jejich
                zákaznickou zkušenost.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='1'>
              <AccordionHeader>
                <AccordionTrigger>Jednoduchost</AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                Aktivně hledáme způsoby, jak zjednodušit, zlepšit a digitalizovat procesy pro naše zákazníky a kolegy.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='2'>
              <AccordionHeader>
                <AccordionTrigger>Zodpovědnost</AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                Přijímáme odpovědnost, projevujeme odvahu a ochotu rozhodovat a umožňujeme ostatním, aby dělali totéž.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='3'>
              <AccordionHeader>
                <AccordionTrigger>Integrita</AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                Své hodnoty žijeme a prosazujeme v každodenní práci. Když vidíme, že se někdo chová v rozporu s nimi, dáme mu
                zpětnou vazbu.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='4'>
              <AccordionHeader>
                <AccordionTrigger>Komunita</AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                Svým příkladem povzbuzujeme ostatní k dosažení společných cílů. Spolupracujeme napříč týmy a zeměmi.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </Grid>
  );
}

export default OurPrinciples;
