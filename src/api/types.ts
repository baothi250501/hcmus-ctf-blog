import type {AxiosError} from 'axios';

export type ApiError = {
    code: string;
    http_code: number;
    title?: string;
    description?: string;
    internal?: string;
}

export type DefaultQueryError = AxiosError<ApiError>;

export type DefaultCmsResponse<T> = {
    data: T;
    meta: {
      pagination: CmsPagination;
    };
  };
  
  export type DefaultCmsDataResponse<T> = {
    id: number;
    attributes: T;
  };

  export type CmsPagination = {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
  
  export type DefaultCmsError = {
    data: null;
    error: {
      status: number;
      name: string;
      message: string;
      details: Record<string, string>;
    };
  };


  export type FormatImage = {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: null;
    size: number;
    width: number;
    height: number;
  };
  
  export type Image = {
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: {
      large: FormatImage;
      small: FormatImage;
      medium: FormatImage;
      thumbnail: FormatImage;
    } | null;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    createdAt: Date;
    updatedAt: Date;
  };