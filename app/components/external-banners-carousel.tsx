import {
  ArticleCarousel,
  ArticleCarouselPrevious,
  ArticleCarouselNext,
  ArticleCarouselContent,
  ArticleCarouselItem,
} from '@app/components/article-carousel';
import Community from '@app/components/external-banners/community';
import CorporatSociaResponsibility from '@app/components/external-banners/corporate-social-responsibility';
import CustomerTime from '@app/components/external-banners/customer-time';
import DigiFans from '@app/components/external-banners/digi-fans';
import Esg from '@app/components/external-banners/esg';
import InspirationalFridays from '@app/components/external-banners/inspirational-fridays';
import MentalHealth from '@app/components/external-banners/mental-health';
import MistakeMasters from '@app/components/external-banners/mistake-masters';
import UniqaDay from '@app/components/external-banners/uniqa-day';
import ArrowLeftIcon from '@app/components/icons/arrow-left-icon';
import { Button } from '@app/components/ui/button';
import { cn } from '@app/libs/utils';
import { Link } from '@remix-run/react';

type ExternalBannersCarouselProps = {
  startIndex: number;
  className?: string;
};

function ExternalBannersCarousel({ startIndex, className }: ExternalBannersCarouselProps) {
  return (
    <section className={cn('container', className)}>
      <ArticleCarousel className='col-span-full row-start-2' startIndex={startIndex}>
        <Button asChild variant='primary-ghost' className='row-start-2 col-start-1 col-span-2'>
          <Link to='/article' viewTransition>
            <ArrowLeftIcon />
            Všechna témata
          </Link>
        </Button>
        <ArticleCarouselPrevious variant='primary-ghost'>Předchozí</ArticleCarouselPrevious>
        <ArticleCarouselNext variant='primary-ghost'>Další</ArticleCarouselNext>
        <ArticleCarouselContent>
          <ArticleCarouselItem>
            <InspirationalFridays />
          </ArticleCarouselItem>
          <ArticleCarouselItem>
            <DigiFans />
          </ArticleCarouselItem>
          <ArticleCarouselItem>
            <Community />
          </ArticleCarouselItem>
          <ArticleCarouselItem>
            <MentalHealth />
          </ArticleCarouselItem>
          <ArticleCarouselItem>
            <MistakeMasters />
          </ArticleCarouselItem>
          <ArticleCarouselItem>
            <Esg />
          </ArticleCarouselItem>
          <ArticleCarouselItem>
            <CorporatSociaResponsibility />
          </ArticleCarouselItem>
          <ArticleCarouselItem>
            <CustomerTime />
          </ArticleCarouselItem>
          <ArticleCarouselItem>
            <UniqaDay />
          </ArticleCarouselItem>
        </ArticleCarouselContent>
      </ArticleCarousel>
    </section>
  );
}

export default ExternalBannersCarousel;
