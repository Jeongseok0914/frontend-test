import request from '~helper/request';
import { useQuery } from 'react-query';
import { useCallback, useMemo } from 'react';

const getSummonerMatches = (url: string) => {
  return request.get(url);
};

interface Params {
  summonerName: string;
}
const useQuerySummonerMatches = ({ summonerName }: Params) => {
  const url = useMemo(() => {
    return `summoner/${summonerName}/matches`;
  }, [summonerName]);

  return useQuery([url], async () => getSummonerMatches(url), {
    enabled: !!summonerName && summonerName !== '',
    select: useCallback((data) => {
      return data;
    }, [])
  });
};

export default useQuerySummonerMatches;
export { getSummonerMatches };
