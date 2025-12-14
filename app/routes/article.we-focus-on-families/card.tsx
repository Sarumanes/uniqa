import { Card, CardCategory, CardContent, CardImage, CardTitle } from '@app/components/card';
import card from './imgs/card.png';
import { Link } from '@remix-run/react';
import { ComponentPropsWithoutRef } from 'react';

type WeFocusOnFamiliesCardProps = ComponentPropsWithoutRef<typeof Card>;

function WeFocusOnFamiliesCard(props: WeFocusOnFamiliesCardProps) {
  return (
    <Card {...props}>
      <Link to='/article/we-focus-on-families' viewTransition>
        <CardImage>
          <img src={card} className='object-center object-cover' alt='we-focus-on-families' />
        </CardImage>
      </Link>
      <CardContent>
        <CardTitle to='/article/we-focus-on-families'>Zaměřujeme se na rodiny</CardTitle>
        <CardCategory>Strategie</CardCategory>
      </CardContent>
    </Card>
  );
}

export default WeFocusOnFamiliesCard;
