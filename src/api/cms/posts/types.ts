import type { DefaultCmsDataResponse, Image } from '../types';

export interface Category {
  slug: string;
  count: number;
  description: string;
  link: null;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  parent: number;
  name: string;
}

export interface PostTag {
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  name: string;
  slug: string;
  count: number;
  link: null;
  description: string;
}

export interface Post {
  title: string;
  content: string;
  author: number;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  summary: string;
  thumbnail_url: string;
  images: {
    data: DefaultCmsDataResponse<Image>[];
  };
  categories: {
    data: DefaultCmsDataResponse<Category>[];
  };
  tags: {
    data: DefaultCmsDataResponse<PostTag>[];
  };
}
