import ArticleBanner from '@app/components/article-banner';
import bg from './uniqa-day.png';

function UniqaDay() {
  return (
    <ArticleBanner
      img={<img src={bg} alt='happy people' />}
      to='https://intra.uniqa.cz/SitePages/Detail_Novinky.aspx?ItemID=2566&ListID=6570e1d9-983a-42b2-9bd7-8402116b3619'
      category='Komunita'
      description='Naše největší společná akce pro kolegy z české a slovenské centrály, stejně jako pro kolegy z interní distribuce obou zemí. Těšíme se na příležitost setkat se při sportovních aktivitách, kdy přijdeme na jiné myšlenky i pracovní nápady.'
      title={<h1 className='max-w-[1106px] text-5xl'>UNIQA day</h1>}
    />
  );
}

export default UniqaDay;
