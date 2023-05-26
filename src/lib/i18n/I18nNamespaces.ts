import type common from '@/public/locales/en/common.json';
import type system from '@/public/locales/en/system.json';
import type home from '@/public/locales/en/home.json';


export interface I18nNamespaces {
    common: typeof common;
    system: typeof system;
    home: typeof home;
}