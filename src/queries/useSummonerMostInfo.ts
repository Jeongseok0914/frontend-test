import request from '~helper/request';
import { useQuery } from 'react-query';
import { useCallback, useMemo } from 'react';

const getSummonerMostInfo = (url: string) => {
  return request.get(url);
};

interface Params {
  summonerName: string;
}

const useQuerySummonerMostInfo = ({ summonerName }: Params) => {
  const url = useMemo(() => {
    return `summoner/${summonerName}/mostInfo`;
  }, [summonerName]);

  return useQuery([url], async () => getSummonerMostInfo(url), {
    enabled: !!summonerName && summonerName !== '',
    select: useCallback((data) => {
      return data;
    }, [])
  });
};

export default useQuerySummonerMostInfo;
export { getSummonerMostInfo };
