import ArticleBanner from '@app/components/article-banner';
import bg from './digi-fans.png';

function DigiFans() {
  return (
    <ArticleBanner
      img={<img src={bg} alt='a meeting' />}
      to='https://intra.uniqa.cz/divize/HRBrandKomunikace/Kultura/SitePages/digi_funs.aspx'
      category='Komunita'
      description='Zajímá vás svět digitálních inovací a moderních nástrojů? Připojte se k DigiFans, komunitě nadšenců, kteří sdílejí své zkušenosti a nápady. Zapojte se do hackathonů, kde společně řešíme reálné výzvy,'
      title={<h1 className='max-w-[942px] text-5xl'>Digi Fans</h1>}
    />
  );
}

export default DigiFans;
