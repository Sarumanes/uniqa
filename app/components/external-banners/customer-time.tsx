import ArticleBanner from '@app/components/article-banner';
import bg from './customer-time.png';

function CustomerTime() {
  return (
    <ArticleBanner
      img={<img src={bg} alt='two man work on a computer' />}
      to='https://intra.uniqa.cz/divize/HRBrandKomunikace/Kultura/SitePages/time_with_customer.aspx'
      category='Zákazník na prvním místě'
      description='Celofiremní komplexní rituál, který zahrnuje několik klíčových aktivit zaměřených na zlepšení vztahů se zákazníky, porozumění jejich potřebám a zajištění zpětné vazby. Tento rituál podporuje lepší porozumění potřebám zákazníků, zlepšuje kvalitu poskytovaných služeb a posiluje celofiremní zaměření na zákaznickou spokojenost.'
      title={<h1 className='max-w-[1106px] text-4xl'>Čas se zákazníkem</h1>}
    />
  );
}

export default CustomerTime;
