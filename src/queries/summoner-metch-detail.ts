import request from '~helper/request';
import { useQuery } from 'react-query';
import { useCallback, useMemo } from 'react';

const GetSummonerMatchDetail = (url: string) => {
  return request.get(url);
};

const useQuerySummonerMatchDetail = (summonerName: string, gameId: string) => {
  const url = useMemo(() => {
    return `summoner/${summonerName}/matchDetail/${gameId}`;
  }, [summonerName, gameId]);

  return useQuery([url], async () => GetSummonerMatchDetail(url), {
    enabled: !!summonerName && summonerName !== '',
    select: useCallback((data) => {
      return data;
    }, [])
  });
};

export default useQuerySummonerMatchDetail;
