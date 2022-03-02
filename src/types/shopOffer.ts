import { IImage } from './image';

export type IShopOfferType = 'PRODUCT' | 'SERVICE';
export type IShopOfferStockType = 'INFINITY' | 'LIMITED' | 'SOLD_OUT';
/**
 * @type IShopOffer
 */
export type IShopOffer = {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly type: IShopOfferType;
  readonly stock_type: IShopOfferStockType;
  readonly stock_qty: number;
  readonly sell_price: number;
  readonly vendor_price?: number;
  readonly rating: number;
  readonly image: IImage;
}
/**
 * IShopOfferMin
 */
export type IShopOfferMin = {
  readonly id: number;
  readonly title: string;
  readonly type: IShopOfferType;
  readonly sell_price: number;
  readonly rating: number;
  readonly image: IImage;
}

/**
 * -----------------------------------------
 *	HTTTP
 * -----------------------------------------
 */
/**
 * IShopOfferCreateRequest
 */
export type IShopOfferCreateRequest = {
  readonly title: string;
  readonly description: string;
  readonly type: IShopOfferType;
  readonly stock_type: IShopOfferStockType;
  readonly stock_qty: number;
  readonly sell_price: number;
  readonly vendor_price: number;
  readonly store_id: number;
}
/**
 * IShopOfferUpdateRequest
 */
export type IShopOfferUpdateRequest = Omit<Partial<IShopOffer>, 'id' | 'rating'> & { onsale: boolean };