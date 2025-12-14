import { Card, CardCategory, CardContent, CardImage, CardTitle } from '@app/components/card';
import card from './imgs/card.png';
import { Link } from '@remix-run/react';
import { ComponentPropsWithoutRef } from 'react';

type OurStrategyCardProps = ComponentPropsWithoutRef<typeof Card>;

function OurStrategyCard(props: OurStrategyCardProps) {
  return (
    <Card {...props}>
      <Link to='/article/our-strategy' viewTransition>
        <CardImage>
          <img src={card} className='object-center object-cover' alt='our-strategy' />
        </CardImage>
      </Link>
      <CardContent>
        <CardTitle to='/article/our-strategy'>Detaily naší strategie</CardTitle>
        <CardCategory>Strategie</CardCategory>
      </CardContent>
    </Card>
  );
}

export default OurStrategyCard;
