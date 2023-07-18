import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosRequestConfig } from 'axios';
import apiRoutes from '@/lib/apiRoutes';
import httpClient from '@/lib/httpClient';
import type {
  DefaultCmsDataResponse,
  DefaultCmsError,
  DefaultCmsResponse,
} from '../types';
import type { Post } from './types';
export const getPostBySlugFn = async (
  slug: string,
  config?: AxiosRequestConfig
) => {
  const response = await httpClient.get<
    DefaultCmsResponse<DefaultCmsDataResponse<Post>>
  >(
    process.env.NEXT_PUBLIC_CMS_API_URI + apiRoutes.cms.post.postBySlug(slug),
    config
  );
  return response.data;
};

export const useGetPostBySlug = (
  slug: string,
  opts?: UseQueryOptions<
    DefaultCmsResponse<DefaultCmsDataResponse<Post>>,
    DefaultCmsError
  >
) =>
  useQuery<DefaultCmsResponse<DefaultCmsDataResponse<Post>>, DefaultCmsError>(
    [process.env.NEXT_PUBLIC_CMS_API_URI + apiRoutes.cms.post.postBySlug(slug)],
    () => getPostBySlugFn(slug),
    opts
  );
