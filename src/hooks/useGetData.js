import { useSearchParams } from 'react-router-dom';
import { base64Decoder } from '../utils/crypto';

export const useGetData = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('datas');

  if (query === null || query === undefined) {
    return [];
  }

  return base64Decoder(query);
};
