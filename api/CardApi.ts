import type { AxiosPromise } from 'axios';
import BaseAPI from './BaseApi';

export default function CardAPI() {
  function receiveCards(): AxiosPromise {
    return BaseAPI.get('qtim-test-work/posts/');
  }

  function receiveCard(id: number): AxiosPromise {
    return BaseAPI.get(`qtim-test-work/posts/${id}`);
  }

  return { receiveCards, receiveCard };
}