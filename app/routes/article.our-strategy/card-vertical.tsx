import {
  CardVertical,
  CardVerticalCategory,
  CardVerticalContent,
  CardVerticalImage,
  CardVerticalTitle,
} from '@app/components/card-vertical';
import card from './imgs/card-vertical.png';
import { Link } from '@remix-run/react';
import { ComponentPropsWithoutRef } from 'react';

type OurStrategyCardVerticalProps = ComponentPropsWithoutRef<typeof CardVertical>;

function OurStrategyCardVertical(props: OurStrategyCardVerticalProps) {
  return (
    <CardVertical {...props}>
      <Link to='/article/our-strategy' viewTransition>
        <CardVerticalImage>
          <img src={card} className='object-center object-cover' alt='our-strategy' />
        </CardVerticalImage>
      </Link>
      <CardVerticalContent>
        <CardVerticalTitle to='/article/our-strategy'>Detaily naší strategie</CardVerticalTitle>
        <CardVerticalCategory>Strategie</CardVerticalCategory>
      </CardVerticalContent>
    </CardVertical>
  );
}

export default OurStrategyCardVertical;
