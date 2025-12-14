import { Card, CardCategory, CardContent, CardImage, CardTitle } from '@app/components/card';
import card from './imgs/card.png';
import { Link } from '@remix-run/react';
import { ComponentPropsWithoutRef } from 'react';

type OurCultureCardProps = ComponentPropsWithoutRef<typeof Card>;

function OurCultureCard(props: OurCultureCardProps) {
  return (
    <Card {...props}>
      <Link to='/article/our-culture' viewTransition>
        <CardImage>
          <img src={card} className='object-center object-cover' alt='our-culture' />
        </CardImage>
      </Link>
      <CardContent>
        <CardTitle to='/article/our-culture'>Naše kultura</CardTitle>
        <CardCategory>Kultura</CardCategory>
      </CardContent>
    </Card>
  );
}

export default OurCultureCard;
