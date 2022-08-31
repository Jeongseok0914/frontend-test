import request, { AxiosPromise, AxiosError } from '~helper/request';
import { useQuery } from 'react-query';
import { useCallback } from 'react';

const url = 'http://ddragon.leagueoflegends.com/cdn/10.15.1/data/ko_KR/item.json';

const getLoLItem = (url: string) => {
  return request.get(url);
};

const useQueryLoLItem = () => {
  return useQuery([url], async () => getLoLItem(url), {
    select: useCallback((data) => {
      return data;
    }, [])
  });
};

export default useQueryLoLItem;
export { getLoLItem };
