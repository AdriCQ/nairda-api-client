import { IMapPosition } from './mapPosition';
import { IShopOfferMin } from './shopOffer';
/**
 * IShopOrderOffer
 */
export type IShopOrderOffer = {
  readonly qty: number;
  readonly shop_offer_id?: number;
  readonly offer: IShopOfferMin
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
  readonly shop_store_id: number,
  readonly delivery_time: string;
  readonly order_offers: IShopOrderOffer[];
  readonly map_position: Exclude<IMapPosition, 'id'>;
}