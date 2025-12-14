import ArticleBanner from '@app/components/article-banner';
import bg from './esg.png';

function Esg() {
  return (
    <ArticleBanner
      img={<img src={bg} alt='a pen' />}
      to='https://intra.uniqa.cz/divize/generalnireditel/Generalnisekretariat/SitePages/ESG.aspx'
      category='Zodpovědnost'
      description='Jedno z nejdůležitějších témat současnosti – udržitelnost. My v UNIQA nejsme výjimkou a důsledně shromažďujeme údaje o jednotlivých oblastech ESG a pracujeme na jejich zlepšování. Svým příkladem povzbuzujeme ostatní k dosažení společných cílů. Spolupracujeme napříč týmy a zeměmi.'
      title={<h1 className='max-w-[1072px] text-4xl'>ESG - Pro lepší budoucnost společně</h1>}
    />
  );
}

export default Esg;
