import '@/styles/globals.css';
import { Hydrate } from '@tanstack/react-query';
import { AppProviders } from 'AppProviders';
import { appWithTranslation } from 'next-i18next';
import type { AppProps as NextAppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import nProgress from 'nprogress';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import nextI18nextConfig from '../../next-i18next.config';

export type AppProps = NextAppProps & {
  err?: Error;
}

function App({ Component, pageProps, err }: AppProps) {
  const router = useRouter();

  nProgress.configure({showSpinner: false});

  useEffect(() => {
    router.events.on('routeChangeStart', ()=>nProgress.start());
    router.events.on('routeChangeComplete', () => nProgress.done());
    router.events.on('routeChangeError', () => nProgress.done());
  }, [router.events]);
  return <AppProviders>
    <Head>
  <meta
    name="viewport"
    content="width=device-width,initial-scale=1,maximum-scale=5,viewport-fit=cover"
  />
</Head>
<Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} err={err} key={router.asPath} />
        <ToastContainer autoClose={3000} hideProgressBar={true} />
      </Hydrate>
    </AppProviders>
}

export default appWithTranslation(App, {
  ...nextI18nextConfig,
})
