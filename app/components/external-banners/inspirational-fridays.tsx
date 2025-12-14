import ArticleBanner from '@app/components/article-banner';
import bg from './inspirational-fridays.png';

function InspirationalFridays() {
  return (
    <ArticleBanner
      img={<img src={bg} alt='a boy with baloons' />}
      to='https://intra.uniqa.cz/divize/HRBrandKomunikace/Vzdelavani/SitePages/inspirativni_patky.aspx'
      category='Komunita'
      description='Každý pátek se můžete připojit k online setkání s kolegy plnému inspirace a rozvoje. Čekají vás zajímavá témata, která obohatí nejen vaši práci, ale i váš pohled na svět. Stačí se přihlásit přes Teams a strávit svůj pátek pozitivně!'
      title={<h1 className='max-w-[1064px] text-5xl'>Inspirativní pátky</h1>}
    />
  );
}

export default InspirationalFridays;
