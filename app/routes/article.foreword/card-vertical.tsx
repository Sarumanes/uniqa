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

type ForewordProps = ComponentPropsWithoutRef<typeof CardVertical>;

function ForewordCardVertical(props: ForewordProps) {
  return (
    <CardVertical {...props}>
      <Link to='/article/foreword' viewTransition>
        <CardVerticalImage>
          <img src={card} className='object-center object-cover' alt='man in suit' />
        </CardVerticalImage>
      </Link>
      <CardVerticalContent>
        <CardVerticalTitle to='/article/foreword'>Úvodní slovo</CardVerticalTitle>
        <CardVerticalCategory>Strategie</CardVerticalCategory>
      </CardVerticalContent>
    </CardVertical>
  );
}

export default ForewordCardVertical;
