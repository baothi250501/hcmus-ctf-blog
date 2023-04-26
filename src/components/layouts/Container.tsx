import { NextSeo, NextSeoProps } from 'next-seo';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';

type ContainerProps = Omit<NextSeoProps, 'childrent'> & {
  chiladren: ReactNode;
  blank?: boolean;
};
export default function Container({
  children,
  blank = false,
  ...props
}: ContainerProps) {
  const router = useRouter();
  const { locale } = useRouter();
  const {
    title,
    description = locale === 'vi'
      ? 'Trang tin tức của câu lạc bộ An toàn thông tin - Đại học Khoa học Tự nhiên, DHQG-HCM'
      : 'Blog of Computer Security Club - VNU-HCMUS',
    ...restProps
  } = props;
  return (
    <>
      <NextSeo
        title={title}
        titleTemplate={`%s | ${process.env.NEXT_PUBLIC_APP_NAME}`}
        defaultTitle={process.env.NEXT_PUBLIC_APP_NAME}
        description={description}
        canonical={`${baseUrl}${router.asPath}`}
        openGraph={{
          url: `${baseUrl}${router.asPath}`,
          type: 'website',
          site_name: process.env.NEXT_PUBLIC_APP_NAME,
          description,
          title: title || process.env.NEXT_PUBLIC_APP_NAME,
          images: [
            {
              url: `${baseUrl}/static/images/home/banner-faster-delivery-desktop.webp`,
              height: 627,
              width: 1200,
              alt: title || process.env.NEXT_PUBLIC_APP_NAME,
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: '@ahamove',
        }}
        {...restProps}
      ></NextSeo>
    </>
  );
}
