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

type OurCultureCardVerticalProps = ComponentPropsWithoutRef<typeof CardVertical>;

function OurCultureCardVertical(props: OurCultureCardVerticalProps) {
  return (
    <CardVertical {...props}>
      <Link to='/article/our-culture' viewTransition>
        <CardVerticalImage>
          <img src={card} className='object-center object-cover' alt='our-culture' />
        </CardVerticalImage>
      </Link>
      <CardVerticalContent>
        <CardVerticalTitle to='/article/our-culture'>Naše kultura</CardVerticalTitle>
        <CardVerticalCategory>Kultura</CardVerticalCategory>
      </CardVerticalContent>
    </CardVertical>
  );
}

export default OurCultureCardVertical;
