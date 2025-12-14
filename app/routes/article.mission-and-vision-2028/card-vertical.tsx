import {
  CardVertical,
  CardVerticalCategory,
  CardVerticalContent,
  CardVerticalImage,
  CardVerticalTitle,
} from '@app/components/card-vertical';
import { Link } from '@remix-run/react';
import card from './imgs/card-vertical.png';
import { ComponentPropsWithoutRef } from 'react';

type MissionAndVision2028CardVerticalProps = ComponentPropsWithoutRef<typeof CardVertical>;

function MissionAndVision2028CardVertical(props: MissionAndVision2028CardVerticalProps) {
  return (
    <CardVertical {...props}>
      <Link to='/article/mission-and-vision-2028' viewTransition>
        <CardVerticalImage>
          <img src={card} className='object-center object-cover' alt='mission-and-vision-2028' />
        </CardVerticalImage>
      </Link>
      <CardVerticalContent>
        <CardVerticalTitle to='/article/mission-and-vision-2028'>Vize a strategie 2025–2028</CardVerticalTitle>
        <CardVerticalCategory>Strategie</CardVerticalCategory>
      </CardVerticalContent>
    </CardVertical>
  );
}

export default MissionAndVision2028CardVertical;
