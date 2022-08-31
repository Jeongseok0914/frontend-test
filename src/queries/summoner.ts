import request from '~helper/request';
import { useQuery } from 'react-query';

const GetSummoner = (url: string) => {
  return request.get(url);
};

const QuerySummoner = (summoner: string) => {
  const url = `summoner/${summoner}`;
  return useQuery([url], async () => GetSummoner(url), {
    enabled: !!summoner && summoner !== '',
    select: (data) => {
      return data;
    }
  });
};

export default QuerySummoner;
