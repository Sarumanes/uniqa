import {
  CardVertical,
  CardVerticalCategory,
  CardVerticalContent,
  CardVerticalImage,
  CardVerticalTitle,
} from '@app/components/card-vertical';
import { Link } from '@remix-run/react';
import { ComponentPropsWithoutRef } from 'react';
import card from './imgs/card-vertical.png';

type FinancialHouseCardVerticalProps = ComponentPropsWithoutRef<typeof CardVertical>;

function FinancialHouseCardVertical(props: FinancialHouseCardVerticalProps) {
  return (
    <CardVertical {...props}>
      <Link to='/article/financial-house' viewTransition>
        <CardVerticalImage>
          <img src={card} className='object-center object-cover' alt='financial-house' />
        </CardVerticalImage>
      </Link>
      <CardVerticalContent>
        <CardVerticalTitle to='/article/financial-house'>Finanční dům UNIQA</CardVerticalTitle>
        <CardVerticalCategory>Identita</CardVerticalCategory>
      </CardVerticalContent>
    </CardVertical>
  );
}

export default FinancialHouseCardVertical;
