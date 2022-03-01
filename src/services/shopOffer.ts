import { AxiosInstance } from 'axios';

import { Paginated } from '..';
import { IShopOffer, IShopOfferCreateRequest } from '../types/shopOffer';

/**
 * ShopOfferService
 */
export class ShopOfferService {
  /**
   * ShopOfferService Constructor
   * @param api AxiosInstance
   */
  constructor(private readonly api: AxiosInstance) {}
  /**
   * create
   * @param createRequest IShopOfferCreateRequest
   * @returns 
   */
  async create(createRequest: IShopOfferCreateRequest) {
    return this.api.post<IShopOffer>('/api/shop/offers', createRequest);
  }
  /**
   * destroy
   * @param offerId number
   * @returns 
   */
  async destroy(offerId: number) {
    return this.api.delete<boolean>(`/api/shop/offers/${offerId}`);
  }
  /**
   * find
   * @param offerId number
   * @returns AxiosPromise<IShopOffer>
   */
  async find(offerId: number) {
    return await this.api.get<IShopOffer>(`/api/shop/offers/${offerId}`);
  }
  /**
   * list
   * @returns AxiosPromise<Paginated<IShopOffer>>
   */
  async list() {
    return this.api.get<Paginated<IShopOffer>>('/api/shop/offers');
  }
  /**
   * update
   * @param offerId number
   * @param update Partial<IShopOffer>
   * @returns 
   */
  async update(offerId: number, update: Partial<IShopOffer>) {
    return this.api.patch<IShopOffer>(`/api/shop/offers/${offerId}`, update);
  }
}