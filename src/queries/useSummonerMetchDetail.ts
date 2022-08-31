import request from '~helper/request';
import { useQuery } from 'react-query';
import { useCallback, useMemo } from 'react';

const getSummonerMatchDetail = (url: string) => {
  return request.get(url);
};

interface Params {
  summonerName: string;
  gameId: string;
}

const useQuerySummonerMatchDetail = ({ summonerName, gameId }: Params) => {
  const url = useMemo(() => {
    return `summoner/${summonerName}/matchDetail/${gameId}`;
  }, [summonerName, gameId]);

  return useQuery([url], async () => getSummonerMatchDetail(url), {
    enabled: !!summonerName && summonerName !== '',
    select: useCallback((data) => {
      return data;
    }, [])
  });
};

export default useQuerySummonerMatchDetail;
export { getSummonerMatchDetail };
