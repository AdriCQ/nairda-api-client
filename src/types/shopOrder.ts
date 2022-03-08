import { IMapPosition } from './mapPosition';
import { IShopOfferMin } from './shopOffer';
/**
 * IShopOrderOffer
 */
export type IShopOrderOffer = {
  readonly qty: number;
  readonly shop_offer_id?: number;
  readonly offer?: IShopOfferMin
}
/**
 * IShopOrderStatus
 */
export type IShopOrderStatus = 'PROCESSING' | 'ACCEPTED' | 'COMPLETED' | 'CANCELED' | 'ABORTED';
/**
 * IShopOrder
 */
export type IShopOrder = {
  readonly id: number;
  readonly total_price: 100;
  readonly delivery_time: string;
  readonly map_position: IMapPosition;
  readonly status: IShopOrderStatus;
}

/**
 * -----------------------------------------
 *	HTTP
 * -----------------------------------------
 */
/**
 * IShopOrderCreateRequest
 */
export type IShopOrderCreateRequest = {
  readonly store_id: number,
  readonly delivery_time: string;
  readonly order_offers: Array<{ readonly offer_id: number; readonly qty: number; }>;
  readonly map_position: Omit<IMapPosition, 'id' | 'title'>;
}
/**
 * IShopOrderUpdateRequest
 */
export type IShopOrderUpdateRequest = {
  readonly delivery_time: string;
  readonly status: IShopOrderStatus;
}