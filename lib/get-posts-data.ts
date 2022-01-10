import { allPosts } from '.contentlayer/data';
import compact from 'lodash/compact';
import filter from 'lodash/filter';
import find from 'lodash/find';
import flattenDeep from 'lodash/flattenDeep';
import { ParsedUrlQuery } from 'querystring';
import { Post } from '.contentlayer/types';

export const getCurrentPost = (params: ParsedUrlQuery | undefined) => {
  const currentPost = find(allPosts, (article) => {
    if (article.slug === params.slug) {
      return article;
    }
  });

  return currentPost as Post;
};

export const getAllPosts = () => {
  return allPosts;
};

export const getAllPostsWhichBelongToCurrentSlug = (
  params: ParsedUrlQuery | undefined,
  type: 'categories' | 'tags'
) => {
  const allPosts = getAllPosts();

  switch (type) {
    case 'categories':
      const allPostsFromThisCategory = filter(allPosts, (article) => {
        return article.categories.includes(params?.slug);
      });

      return compact(
        flattenDeep(allPostsFromThisCategory)
      ) as unknown as Post[];

    case 'tags':
      const allPostsFromThisTag = filter(allPosts, (article) => {
        return article.tags.includes(params?.slug);
      });

      return compact(flattenDeep(allPostsFromThisTag)) as unknown as Post[];

    default:
      break;
  }
};

export const getNextPosts = (params: ParsedUrlQuery | undefined) => {
  const allPosts = getAllPosts();

  return filter(allPosts, (article) => article !== getCurrentPost(params));
};
