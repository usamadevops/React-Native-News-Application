import {
  GET_NEWS,
  SEARCH_KEYWORD,
  LATEST_NEWS,
  SPORT_NEWS,
} from './constant.HomeFeed';

export const GetNews = payload => {
  return {
    type: GET_NEWS,
    payload: payload,
  };
};

export const SearchNews = payload => {
  return {
    type: SEARCH_KEYWORD,
    payload: payload,
  };
};
