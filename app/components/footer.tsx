import { cn } from '@app/libs/utils';
import type { ComponentPropsWithoutRef } from 'react';
import ArrowDownIcon from '@app/components/icons/arrow-down-icon';
import ArrowRightIcon from '@app/components/icons/arrow-right-icon';
import ArrowUpIcon from '@app/components/icons/arrow-up-icon';
import LogoIcon from '@app/components/icons/logo-icon';
import { Button } from '@app/components/ui/button';
import Grid from '@app/components/grid';
import ChangeLanguageDropdown from '@app/components/change-language-dropdown';
import { Link } from '@remix-run/react';
import { useTranslation } from 'react-i18next';
import BlurBg from '@app/components/blur-bg';

function Footer({ className, ...props }: ComponentPropsWithoutRef<'footer'>) {
  const { i18n } = useTranslation();
  return (
    <footer className={cn('py-4 bg-blue-1 relative', className)} {...props}>
      <BlurBg />
      <Grid className='items-center'>
        <div className='container relative'>
          <Link className='col-span-2 ' to='/' viewTransition>
            <LogoIcon className='text-white' />
          </Link>
          <Button
            className='col-start-7 col-span-2'
            variant='secondary-ghost'
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Zpět nahoru <ArrowUpIcon />
          </Button>
          <Button className='col-start-10 col-span-2 hidden' variant='secondary-ghost'>
            PDF ke stažení
            <ArrowRightIcon />
          </Button>
          <div className='col-start-12 col-span-1 flex justify-end'>
            <ChangeLanguageDropdown
              trigger={
                <Button className='uppercase gap-x-1 hidden' variant='secondary-ghost'>
                  <ArrowDownIcon />
                  {i18n.language == 'cs' ? 'CZ' : i18n.language}
                </Button>
              }
            />
          </div>
        </div>
      </Grid>
    </footer>
  );
}

export default Footer;
