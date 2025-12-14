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

type WeFocusOnFamiliesCardVerticalProps = ComponentPropsWithoutRef<typeof CardVertical>;

function WeFocusOnFamiliesCardVertical(props: WeFocusOnFamiliesCardVerticalProps) {
  return (
    <CardVertical {...props}>
      <Link to='/article/we-focus-on-families' viewTransition>
        <CardVerticalImage>
          <img src={card} className='object-center object-cover' alt='we-focus-on-families' />
        </CardVerticalImage>
      </Link>
      <CardVerticalContent>
        <CardVerticalTitle to='/article/we-focus-on-families'>Zaměřujeme se na rodiny</CardVerticalTitle>
        <CardVerticalCategory>Strategie</CardVerticalCategory>
      </CardVerticalContent>
    </CardVertical>
  );
}

export default WeFocusOnFamiliesCardVertical;
