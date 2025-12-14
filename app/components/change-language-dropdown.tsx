import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from '@app/components/ui/dropdown-menu';
import { useTranslation } from 'react-i18next';
import { ReactNode } from 'react';

type ChangeLanguageDropdownProps = {
  trigger: ReactNode;
};

function ChangeLanguageDropdown({ trigger }: ChangeLanguageDropdownProps) {
  const { i18n } = useTranslation();
  return (
    <DropdownMenu modal>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent align='end'>
          <DropdownMenuItem
            onSelect={() => {
              i18n.changeLanguage('en');
            }}
          >
            EN
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => {
              i18n.changeLanguage('cs');
            }}
          >
            CZ
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => {
              i18n.changeLanguage('sk');
            }}
          >
            SK
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
}

export default ChangeLanguageDropdown;
