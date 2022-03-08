import { AxiosInstance } from 'axios';

import { Paginated } from '..';
import { IShopOrder, IShopOrderCreateRequest, IShopOrderUpdateRequest } from '../types/shopOrder';
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
   */
  async create(create: IShopOrderCreateRequest) {
    return this.api.post<IShopOrder>('/api/shop/orders', create);
  }
  /**
  * destroy
  * @param orderId number
  */
  async destroy(orderId: number) {
    return this.api.delete<boolean>(`/api/shop/orders/${orderId}`);
  }
  /**
   * find
   * @param orderId number
   */
  async find(orderId: number) {
    return this.api.get<IShopOrder>(`/api/shop/orders/${orderId}`);
  }
  /**
   * list
   */
  async list() {
    return this.api.get<Paginated<IShopOrder>>('/api/shop/orders');
  }
  /**
   * listByStore
   * @param storeId number
   */
  async listByStore(storeId: number) {
    return this.api.get<Paginated<IShopOrder>>(`/api/shop/orders/store/${storeId}`);
  }
  /**
   * update
   * @param offerId number
   * @param update Partial<IShopOrder>
   */
  async updateStatus(offerId: number, update: IShopOrderUpdateRequest) {
    return this.api.patch<IShopOrder>(`/api/shop/offers/${offerId}`, update);
  }
}