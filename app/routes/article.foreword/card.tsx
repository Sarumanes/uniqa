import { Card, CardCategory, CardContent, CardImage, CardTitle } from '@app/components/card';
import card from './imgs/card.png';
import { Link } from '@remix-run/react';
import { ComponentPropsWithoutRef } from 'react';

type ForewordProps = ComponentPropsWithoutRef<typeof Card>;

function ForewordCard(props: ForewordProps) {
  return (
    <Card {...props}>
      <Link to='/article/foreword' viewTransition>
        <CardImage>
          <img src={card} className='object-center object-cover' alt='man in suit' />
        </CardImage>
      </Link>
      <CardContent>
        <CardTitle to='/article/foreword'>Úvodní slovo</CardTitle>
        <CardCategory>Strategie</CardCategory>
      </CardContent>
    </Card>
  );
}

export default ForewordCard;
