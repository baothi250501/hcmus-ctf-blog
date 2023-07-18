import { BadRequest } from '@tsed/exceptions';
import HomePage from '@/modules/home/HomePage';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { homeConfig } from '@/modules/home/homeConfig';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import getIsSsrMobile from '@/lib/getIsSsrMobile';

export type HomeProps = {
  // Declare Home props
  isSsrMobile: boolean;
}

export default function Home(_props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <HomePage {..._props} />
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async (context) => {
  const {locale} = context;
  if (locale == undefined) {
    throw new BadRequest('locale is missing');
  }

  const { i18nNamespaces } = homeConfig;

  const isSsrMobile = getIsSsrMobile(context);

  return {
    props: {
      ...(await serverSideTranslations(locale, i18nNamespaces)),
      isSsrMobile
    }
  }
}
