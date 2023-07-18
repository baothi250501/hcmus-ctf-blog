import Link from "next/link";
import { useRouter } from "next/router";
import Image from 'next/legacy/image';
import LanguageSwitch from "./LanguageSwitch";
import { navigateData, quickLinkData } from "./layoutData";
import { homeConfig } from "@/modules/home/homeConfig";
import { useTranslation } from "next-i18next";
import useIsMobile from "@/hooks/useIsMobile";

export default function Footer() {
    const { locale } = useRouter();
    const {t} = useTranslation(homeConfig.i18nNamespaces);
    const isMobile = useIsMobile();
    return (
        <footer className="border-t-neutral-200 desktop:pt-14 desktop:pb-9 z-20 border-t pt-9 pb-8 bg-primary-90 w-full">
            <div className="max-w-8xl desktop:px-8 px-4 mx-auto flex desktop:flex-row flex-col justify-center desktop:space-x-16">
                <div className="flex flex-col space-y-6">
                    <div className="flex desktop:items-center flex-row space-x-4">
                        <div className="h-16 w-16">
                            <Link href="/" passHref locale={locale}
                            className="inline-block"
                            title="HomePage"
                            aria-label="">
                                <div className="relative h-16 w-16">
                                    <Image src="/static/icons/LogoClb.svg" alt="" layout="fill" priority />
                                </div>
                            </Link>
                        </div>
                        <div className="h-16 aspect-[8405/3612]">
                        <Link href="/" passHref locale={locale}
                        className="inline-block"
                        title="HomePage"
                        aria-label="">
                            <div className="relative h-16 aspect-[8405/3612]">
                                <Image src="/static/icons/LogoFit.svg" alt="" layout="fill" priority />
                            </div>
                        </Link>
                    </div>
                    </div>
                    {!isMobile ? <LanguageSwitch /> : null}
                </div>
                <div className="flex desktop:flex-col flex-row desktop:space-x-0 space-x-16 mt-4 desktop:mt-0">
                    <ul className="text-body14 text-neutral-100 desktop:space-y-2 desktop:text-body16 space-y-1 text-left">
                        {navigateData.map((item, idx) => <li key={idx}>
                        <Link
                  href={item.href}
                  rel="noreferrer"
                  passHref
                  locale={locale}
                  title={t(`common:navigate.${item.name}`).toString()}
                  className="hover:text-neutral-70"
                  target='_self'
                >
                  {t(`common:navigate.${item.name}`)}
                </Link>
                        </li>)}
                    </ul>
                    <div className="flex flex-col desktop:space-y-2 space-y-1 desktop:pt-5">
                    <h3 className="text-neutral-100 font-semibold text-left text-subtitle18 ">Đường dẫn nhanh</h3>
                    <ul className="text-body14 text-neutral-100 desktop:space-y-2 desktop:text-body16 space-y-1 text-left">
                    {quickLinkData.map((item, idx) =>
                        <li key={idx}><Link
                  href={item.href}
                  rel="noreferrer"
                  passHref
                  locale={locale}
                  title={t(`common:navigate.${item.name}`).toString()}
                  className="hover:text-neutral-70"
                  target='_self'
                >
                  {t(`common:navigate.${item.name}`)}
                </Link></li>)}
                    </ul>
                </div>
                    </div>
                    <hr className="h-0.5 my-4 desktop:my-0 desktop:hidden" />
                <div className="grow desktop:space-y-6 space-y-4">
                <h2 className="text-subtitle18 desktop:text-title24 desktop:font-bold text-left font-semibold text-white">
       {t('common:contact.name')}
      </h2>
      <ul className="text-body14 desktop:space-y-3 desktop:text-body16 space-y-4 text-left font-medium text-black">
      <li>
          <Link
            href="https://goo.gl/maps/DWEzvjCUiP4ujVJf8?coh=178573&entry=tt"
            className="hover:text-neutral-70 desktop:items-center flex flex-nowrap space-x-3"
            title=""
            aria-label=""
          >
            <div className="relative inline-block h-5 w-5 shrink-0">
              <Image
                src="/static/icons/LocationMarker.svg"
                alt=""
                layout="fill"
              />
            </div>
            <p className="inline-block text-neutral-100">
              {t('common:contact.location')}
            </p>
          </Link>
        </li>
        <li>
          <Link
            href="mailto:compsec.club@fit.hcmus.edu.vn"
            className="hover:text-neutral-70 desktop:items-center flex flex-nowrap space-x-3"
            title=""
            aria-label=""
          >
            <div className="relative inline-block h-5 w-5 shrink-0">
              <Image src="/static/icons/Mail.svg" alt="" layout="fill" />
            </div>
            <p className="inline-block text-neutral-100">compsec.club@fit.hcmus.edu.vn</p>
          </Link>
        </li>
      </ul>
      <div className="desktop:flex desktop:flex-row desktop:items-center desktop:space-x-6 grid grid-cols-1 space-y-3">
            <p className="text-body14 desktop:text-body16 font-medium text-neutral-100">
              Kết nối với chúng tôi
            </p>
            <div className="desktop:justify-center flex flex-row items-center space-x-3">
              <div>
                <Link
                  href="https://www.facebook.com/hcmus.compsec.club"
                  target="_blank"
                  className="relative inline-block h-6 w-6 bg-transparent"
                  title="Facebook"
                  aria-label="Facebook"
                >
                  <Image
                    src="/static/icons/Facebook.svg"
                    layout="fill"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
                </div>
            </div>
        </footer>
    )
}