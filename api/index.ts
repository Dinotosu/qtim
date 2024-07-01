import BaseAPI from '@/api/BaseApi';
import CardAPI from '@/api/CardApi';

export default function Repository () {
  return {
    cardApi: new CardAPI(),
    baseAPI: new BaseAPI()
  }
}