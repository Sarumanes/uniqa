import { Card, CardCategory, CardContent, CardImage, CardTitle } from '@app/components/card';
import { Link } from '@remix-run/react';
import card from './imgs/card.png';
import { ComponentPropsWithoutRef } from 'react';

type MissionAndVision2028CardProps = ComponentPropsWithoutRef<typeof Card>;

function MissionAndVision2028Card(props: MissionAndVision2028CardProps) {
  return (
    <Card {...props}>
      <Link to='/article/mission-and-vision-2028' viewTransition>
        <CardImage>
          <img src={card} className='object-center object-cover' alt='mission-and-vision-2028' />
        </CardImage>
      </Link>
      <CardContent>
        <CardTitle to='/article/mission-and-vision-2028'>Vize a strategie 2025–2028</CardTitle>
        <CardCategory>Strategie</CardCategory>
      </CardContent>
    </Card>
  );
}

export default MissionAndVision2028Card;
