import { Card, CardCategory, CardContent, CardImage, CardTitle } from '@app/components/card';
import { Link } from '@remix-run/react';
import card from './imgs/card.png';
import { ComponentPropsWithoutRef } from 'react';

type FinancialHouseCardProps = ComponentPropsWithoutRef<typeof Card>;

function FinancialHouseCard(props: FinancialHouseCardProps) {
  return (
    <Card {...props}>
      <Link to='/article/financial-house' viewTransition>
        <CardImage>
          <img src={card} className='object-center object-cover' alt='financial-house' />
        </CardImage>
      </Link>
      <CardContent>
        <CardTitle to='/article/financial-house'>Finanční dům UNIQA</CardTitle>
        <CardCategory>Identita</CardCategory>
      </CardContent>
    </Card>
  );
}

export default FinancialHouseCard;
