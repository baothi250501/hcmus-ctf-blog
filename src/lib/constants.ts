import { ApiError } from "@/api/types";

export const __prod__ = process.env.NODE_ENV === 'production';
export const baseUrl = process.env.NEXT_PUBLIC_APP_URI || 'https://blog.blackpinker.com';
export const domainUrl = process.env.NEXT_PUBLIC_APP_DOMAIN || 'blackpinker.com'
export const apiUrl = process.env.NEXT_PUBLIC_API_URI!;
export const PAGE_INDEX = 0;
export const PAGE_SIZE = 24;
export const MIN_PAGE_SIZE = 10;

export const API_FETCH_TIMEOUT = 7;

export enum ERROR_CODE {
    NOT_ENOUGH_CREDIT = 'NOT_ENOUGH_CREDIT',
    NOT_AUTHORIZED = 'NOT_AUTHORIZED',
    REFRESH_TOKEN_HAS_EXPIRED = 'REFRESH_TOKEN_HAS_EXPIRED',
    INVALID_DATA = 'INVALID_DATA',
    BAD_REQUEST = 'BAD_REQUEST',
};

export const ERROR_CODES: Record<ERROR_CODE, ApiError> = {
    NOT_AUTHORIZED: {
      code: 'NOT_AUTHORIZED',
      description:
        'Không có quyền thực hiện thao tác này, vui lòng kiểm tra lại.',
      http_code: 401,
      title: 'Thao tác bị từ chối.',
    },
    REFRESH_TOKEN_HAS_EXPIRED: {
      code: 'REFRESH_TOKEN_HAS_EXPIRED',
      http_code: 401,
      title: 'Token expired',
      description: 'Your token has expired, please sign in again.',
      internal: '',
    },
    INVALID_DATA: {
      code: 'INVALID_DATA',
      http_code: 400,
      title: 'Invalid data',
      description: 'Dữ liệu gửi lên chưa đúng, vui lòng kiểm tra lại',
      internal: '',
    },
    BAD_REQUEST: {
      code: 'BAD_REQUEST',
      http_code: 400,
      title: 'Thông tin không hợp lệ.',
      description: 'Thông tin không hợp lệ, vui lòng kiểm tra lại.',
      internal: '',
    },
  };

