import { AxiosInstance } from 'axios';

import { Paginated } from '..';
import { IShopOrder, IShopOrderCreateRequest } from '../types/shopOrder';
/**
 * ShopOrderService
 */
export class ShopOrderService {
  /**
   * ShopOrderService Constructor
   * @param api AxiosInstance
   */
  constructor(private readonly api: AxiosInstance) {}
  /**
   * create
   * @param create IShopOrderCreateRequest
   * @returns 
   */
  async create(create: IShopOrderCreateRequest) {
    return this.api.post<IShopOrder>('/api/shop/orders', create);
  }
  /**
  * destroy
  * @param orderId number
  * @returns 
  */
  async destroy(orderId: number) {
    return this.api.delete<boolean>(`/api/shop/orders/${orderId}`);
  }
  /**
   * find
   * @param orderId number
   * @returns AxiosPromise<IShopOffer>
   */
  async find(orderId: number) {
    return this.api.get<IShopOrder>(`/api/shop/orders/${orderId}`);
  }
  /**
   * list
   * @returns AxiosPromise<Paginated<IShopOffer>>
   */
  async list() {
    return this.api.get<Paginated<IShopOrder>>('/api/shop/orders');
  }
  /**
   * listByStore
   * @param storeId number
   * @returns 
   */
  async listByStore(storeId: number) {
    return this.api.get<Paginated<IShopOrder>>(`/api/shop/orders/store/${storeId}`);
  }
  /**
   * update
   * @param offerId number
   * @param update Partial<IShopOrder>
   * @returns 
   */
  async updateStatus(offerId: number, update: Partial<IShopOrder>) {
    return this.api.patch<IShopOrder>(`/api/shop/offers/${offerId}`, update);
  }
}