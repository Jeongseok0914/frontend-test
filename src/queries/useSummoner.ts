import request from '~helper/request';
import { useQuery } from 'react-query';
import { useCallback, useMemo } from 'react';

const getSummoner = (url: string) => {
  return request.get(url);
};

interface Params {
  summonerName: string;
}
const useQuerySummoner = ({ summonerName }: Params) => {
  const url = useMemo(() => {
    return `summoner/${summonerName}`;
  }, [summonerName]);

  return useQuery([url], async () => getSummoner(url), {
    enabled: !!summonerName && summonerName !== '',
    select: useCallback((data) => {
      return data;
    }, [])
  });
};

export default useQuerySummoner;
export { getSummoner };
