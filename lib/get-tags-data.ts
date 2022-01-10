import flatMapDeep from 'lodash/flatMapDeep';
import { getAllPosts } from 'lib/get-posts-data';

export const getAllTags = () => {
  const allPosts = getAllPosts();

  return flatMapDeep(allPosts, 'tags');
};
