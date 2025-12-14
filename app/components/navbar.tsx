import Grid from '@app/components/grid';
import { cn } from '@app/libs/utils';
import { useTranslation } from 'react-i18next';
import ChangeLanguageDropdown from '@app/components/change-language-dropdown';
import { Button } from '@app/components/ui/button';
import ArrowDownIcon from '@app/components/icons/arrow-down-icon';
import LogoIcon from '@app/components/icons/logo-icon';
import { NavLink } from '@remix-run/react';
import ArrowRightIcon from '@app/components/icons/arrow-right-icon';

type NavbarProps = {
  className?: string;
  variant: 'primary' | 'secondary';
};

function Navbar({ className, variant }: NavbarProps) {
  const { i18n } = useTranslation();
  return (
    <Grid>
      <nav className={cn('container h-20', className)}>
        <NavLink to='/' className='col-span-2' viewTransition>
          <LogoIcon className={variant === 'primary' ? 'text-blue-1' : 'text-white'} />
        </NavLink>
        <div className='col-start-7 col-span-3 flex items-center gap-x-4'>
          <Button variant={`${variant}-ghost`} asChild>
            <NavLink to='/' viewTransition>
              Úvodní strana
            </NavLink>
          </Button>
          <Button variant={`${variant}-ghost`} asChild>
            <NavLink to='/article' viewTransition end>
              Všechna témata
            </NavLink>
          </Button>
        </div>
        <Button className='col-start-10 col-span-2 hidden' variant={`${variant}-ghost`}>
          PDF ke stažení <ArrowRightIcon />
        </Button>
        <div className='col-start-12 col-span-1 flex justify-end'>
          <ChangeLanguageDropdown
            trigger={
              <Button className='uppercase gap-x-1 hidden' variant={`${variant}-ghost`}>
                <ArrowDownIcon />
                {i18n.language == 'cs' ? 'CZ' : i18n.language}
              </Button>
            }
          />
        </div>
      </nav>
    </Grid>
  );
}

export default Navbar;
