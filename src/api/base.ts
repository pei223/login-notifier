import ky from 'https://esm.sh/ky';
import { KyInstance } from 'https://esm.sh/v130/ky@0.33.3/distribution/types/ky';



export const createApi = (url: string, fixedHeaders: Record<string, string>): KyInstance  => {
  return ky.create({
    prefixUrl: url,
    headers: fixedHeaders
  })
}
