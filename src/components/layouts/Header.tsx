import { Disclosure } from '@headlessui/react';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '../Button';
import MenuIcon from '../icons/MenuIcon';
import XMenuIcon from '../icons/XMenuIcon';
import { navigateData } from './layoutData';

export default function Header() {
  const { locale, pathname } = useRouter();
  const router = useRouter();
  const { t } = useTranslation(['common']);
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <header
          className={cn('shadow-shadow4 fixed inset-x-0 top-0 z-50', {
            'bg-neutral-900/80 backdrop-blur-sm backdrop-saturate-150': !open,
            'bg-neutral-900': open,
          })}
        >
          <div className="max-w-8xl desktop:h-header-desktop desktop:px-8 relative mx-auto flex h-20 items-center justify-between px-4">
            {/* Mobile menu button */}
            <Disclosure.Button
              aria-label="menu"
              className="desktop:hidden absolute right-4 inline-flex items-center justify-center text-neutral-50"
            >
              {open ? (
                <XMenuIcon className="desktop:hover:fill-primary-50 fill-neutral-50" />
              ) : (
                <MenuIcon className="desktop:hover:fill-primary-50 fill-neutral-50" />
              )}
            </Disclosure.Button>
            <div className="desktop:flex-1 desktop:justify-between flex h-full flex-nowrap items-center justify-start">
              <Link
                href="/"
                passHref
                locale={locale}
                className="inline-block flex-none"
                legacyBehavior
              >
                <a
                  title="HomePage"
                  className="relative mr-4 h-16 aspect-square bg-transparent"
                >
                  <Image
                    src="/static/icons/LogoClb.svg"
                    alt=""
                    layout="fill"
                    priority
                  />
                </a>
              </Link>
              <nav className="desktop:grid ml-auto mr-4 hidden h-full grow grid-cols-5 place-items-center">
                {navigateData.map((item, idx) =>
                  <div key={idx} className="inline-block h-full w-full">
                  <Link
                    href={item.href ? item.href : '/'}
                    passHref
                    locale={locale}
                    legacyBehavior
                  >
                      <button
                        aria-label="button"
                        className={cn(
                          'text-subtitle18 active:text-primary-30 text-primary-10 desktop:hover:text-primary-20 group inline-flex h-full w-full items-center justify-center px-4 font-semibold focus-visible:outline-none',
                          {
                            'text-secondary-50 cursor-no-drop transition-none':
                              pathname === item.href,
                            'text-neutral-90 desktop:hover:text-primary-50':
                              pathname !== item.href,
                          }
                        )}
                      >
                        {t(`common:navigate.${item.name}`)}
                      </button>
                  </Link>
                </div>
                )}
              </nav>
              <Button
                title={t('common:navigate.hcmus-ctf').toString()}
                className="desktop:block hidden flex-none"
                href="https://app.ahamove.com/"
                setLocale={false}
                type="link"
              >
                {t('common:navigate.hcmus-ctf')}
              </Button>
            </div>
          </div>
          <Disclosure.Panel className="desktop:hidden bg-white">
            <div className="flex h-[calc(100vh-80px)] flex-col">
              <div className="overflow-x-none grow overflow-y-auto pt-2 pb-6 shadow-inner">
                {navigateData.map((item, idx) => (
                  <div key={idx}>
                    <button
                        aria-label="button"
                        className={cn(
                          'text-title24 inline-flex w-full justify-start px-4 py-3 font-semibold',
                          {
                            'text-primary-60 cursor-no-drop transition-none':
                              pathname === '/blog',
                            'text-neutral-90 desktop:hover:text-primary-50':
                              pathname !== '/blog',
                          }
                        )}
                        onClick={() => router.push('/blog')}
                      >
                        {t(`common:navigate.${item.name}`)}
                      </button>
                  </div>
                ))}
                <div className="p-4">
                  <Button
                     title={t('common:navigate.hcmus-ctf').toString()}
                    className="w-full"
                    type="link"
                    href="https://app.ahamove.com/"
                    setLocale={false}
                  >
                     {t('common:navigate.hcmus-ctf').toString()}
                  </Button>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </header>
      )}
    </Disclosure>
  );
}
