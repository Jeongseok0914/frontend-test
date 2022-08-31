import request from '~helper/request';
import { useQuery } from 'react-query';
import { useCallback } from 'react';

const GetSummoner = (url: string) => {
  return request.get(url);
};

const useQuerySummoner = (summonerName: string) => {
  const url = `summoner/${summonerName}`;
  return useQuery([url], async () => GetSummoner(url), {
    enabled: !!summonerName && summonerName !== '',
    select: useCallback((data) => {
      return data;
    }, [])
  });
};

export default useQuerySummoner;
