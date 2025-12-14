import ArticleBanner from '@app/components/article-banner';
import bg from './community.png';

function Community() {
  return (
    <ArticleBanner
      img={<img src={bg} alt='chess' />}
      to='https://intra.uniqa.cz/divize/HRBrandKomunikace/Kultura/komunity/SitePages/DomovskaStranka.aspx'
      category='Komunita'
      description='Máte koníček, který byste chtěli sdílet s kolegy? Přidejte se k volnočasovým komunitám, které propojují kolegy se stejnými zájmy. Společně budujeme přátelské prostředí a posilujeme vztahy nejen v práci, ale i mimo ni.'
      title={<h1 className='max-w-[942px] text-5xl'>Komunity</h1>}
    />
  );
}

export default Community;
