import ArticleBanner from '@app/components/article-banner';
import bg from './mental-health.png';

function MentalHealth() {
  return (
    <ArticleBanner
      img={<img src={bg} alt='people' />}
      to='https://intra.uniqa.cz/dusevni_zdravi/pomoc/SitePages/DomovskaStranka.aspx'
      category='Komunita'
      description='Necítíte se dobře nebo potřebujete někoho, kdo vás vyslechne? Naši certifikovaní kolegové v oblasti duševního zdraví jsou tu pro vás. Pomohou rozpoznat problémy, nasměrují vás na odborníky a podpoří vás v náročných situacích.'
      title={<h1 className='max-w-[1062px] text-4xl'>První pomoc pro duševní zdraví</h1>}
    />
  );
}

export default MentalHealth;
