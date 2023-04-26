export const __prod__ = process.env.NODE_ENV === 'production';
export const baseUrl = process.env.NEXT_PUBLIC_APP_URI || 'https://blog.blackpinker.com';
export const domainUrl = process.env.NEXT_PUBLIC_APP_DOMAIN || 'blackpinker.com'
export const PAGE_INDEX = 0;
export const PAGE_SIZE = 24;
export const MIN_PAGE_SIZE = 10;

