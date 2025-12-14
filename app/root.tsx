import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { useTranslation } from 'react-i18next';
import { PropsWithChildren } from 'react';
import LogoIcon from '@app/components/icons/logo-icon';
import '@app/tailwind.css';

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
  { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png' },
  { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
  { rel: 'shortcut icon', href: '/favicon.ico' },
  { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
  { rel: 'manifest', href: '/site.webmanifest' },
];

export const meta: MetaFunction = () => {
  return [{ title: 'UNIQA DNA' }, { name: 'description', content: 'UNIQA DNA' }];
};

export function Layout({ children }: PropsWithChildren) {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const dir = i18n.dir();
  return (
    <html lang={lang} dir={dir}>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function HydrateFallback() {
  return (
    <div className='fixed left-0 top-0 z-50 h-full w-full bg-white flex items-center justify-center'>
      <LogoIcon className='text-blue-1 w-80 h-14' />
    </div>
  );
}
