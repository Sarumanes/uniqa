import ArticleBanner from '@app/components/article-banner';
import bg from './mistake-masters.png';

function MistakeMasters() {
  return (
    <ArticleBanner
      img={<img src={bg} alt='qa in a conference' />}
      to='https://intra.uniqa.cz/divize/HRBrandKomunikace/Kultura/SitePages/mistake_masters.aspx'
      category='Zodpovědnost'
      description='Nebojíme se chyb! Přijďte na Mistake Masters a sdílejte, co vás chyby naučily. Otevřená atmosféra a příběhy ostatních vám ukážou, že i omyly mohou být cennou lekcí.'
      title={<h1 className='max-w-[842px] text-5xl'>Mistake Masters</h1>}
    />
  );
}

export default MistakeMasters;
