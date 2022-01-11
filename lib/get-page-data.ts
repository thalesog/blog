import { allPages } from ".contentlayer/data";
import compact from "lodash/compact";
import filter from "lodash/filter";
import find from "lodash/find";
import flattenDeep from "lodash/flattenDeep";
import { ParsedUrlQuery } from "querystring";
import { Page } from ".contentlayer/types";

export const getCurrentPage = (params: ParsedUrlQuery | undefined) => {
  const currentPage = find(allPages, (page) => {
    if (page.slug === params.page) {
      return page;
    }
  });

  return currentPage as Page;
};

export const getAllPages = () => {
  return allPages;
};

export const getNextPages = (params: ParsedUrlQuery | undefined) => {
  const allPages = getAllPages();

  return filter(allPages, (article) => article !== getCurrentPage(params));
};
