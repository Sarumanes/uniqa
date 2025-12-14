import ArticleBanner from '@app/components/article-banner';
import bg from './corporate-social-responsibility.png';

function CorporatSociaResponsibility() {
  return (
    <ArticleBanner
      img={<img src={bg} alt='a tv show' />}
      to='https://intra.uniqa.cz/Lists/News/DispForm.aspx?ID=2845'
      category='Zodpovědnost'
      description='Aktivity v oblasti společenské odpovědnosti nevnímáme jen jako povinnost. Je to pro nás především příležitost pozitivně ovlivnit své okolí a přispět k lepší budoucnosti těch, kteří to potřebují, i nás všech.'
      title={<h1 className='max-w-[1106px] text-4xl'>Corporate Social Responsibility</h1>}
    />
  );
}

export default CorporatSociaResponsibility;
