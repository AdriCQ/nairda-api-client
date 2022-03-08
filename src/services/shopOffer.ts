import { AxiosInstance, AxiosResponse } from 'axios';

import { Paginated } from '..';
import { IShopOffer, IShopOfferCreateRequest, IShopOfferUpdateRequest } from '../types/shopOffer';

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
   */
  async create(createRequest: IShopOfferCreateRequest) {
    return this.api.post<IShopOffer>('/api/shop/offers', createRequest);
  }
  /**
   * destroy
   * @param offerId number
   */
  async destroy(offerId: number) {
    return this.api.delete<boolean>(`/api/shop/offers/${offerId}`);
  }
  /**
   * find
   * @param offerId number
   */
  async find(offerId: number) {
    return this.api.get<IShopOffer>(`/api/shop/offers/${offerId}`);
  }
  /**
   * list
   */
  async list() {
    return this.api.get<Paginated<IShopOffer>>('/api/shop/offers');
  }
  /**
   * update
   * @param offerId number
   * @param update Partial<IShopOffer>
   */
  async update(offerId: number, update: IShopOfferUpdateRequest) {
    return this.api.patch<IShopOffer, AxiosResponse<IShopOffer>>(`/api/shop/offers/${offerId}`, update);
  }
}