import request from '~helper/request';
import { useQuery } from 'react-query';
import { useCallback } from 'react';

const GetSummonerMostInfo = (url: string) => {
  return request.get(url);
};

const QuerySummonerMostInfo = (summonerName: string) => {
  const url = `summoner/${summonerName}/mostInfo`;
  return useQuery([url], async () => GetSummonerMostInfo(url), {
    enabled: !!summonerName && summonerName !== '',
    select: useCallback((data) => {
      return data;
    }, [])
  });
};

export default QuerySummonerMostInfo;
