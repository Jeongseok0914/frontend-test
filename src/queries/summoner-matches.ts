import request from '~helper/request';
import { useQuery } from 'react-query';
import { useCallback, useMemo } from 'react';

const GetSummonerMatches = (url: string) => {
  return request.get(url);
};

const useQuerySummonerMatches = (summonerName: string) => {
  const url = useMemo(() => {
    return `summoner/${summonerName}/matches`;
  }, [summonerName]);

  return useQuery([url], async () => GetSummonerMatches(url), {
    enabled: !!summonerName && summonerName !== '',
    select: useCallback((data) => {
      return data;
    }, [])
  });
};

export default useQuerySummonerMatches;
