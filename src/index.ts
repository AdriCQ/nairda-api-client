import { AxiosInstance } from 'axios';

import { csrfToken } from './services/csrf';
import { ImageService } from './services/image';
import { ShopOfferService } from './services/shopOffer';
import { ShopOrderService } from './services/shopOrder';
import { ShopStoreService } from './services/shopStore';
import { UserServices } from './services/user';
/**
 * NairdaApi
 * @param api AxiosInstance
 * @param apiDomain string
 */
export default function NairdaApi(api: AxiosInstance) {
  /**
   * CsrfToken
   */
  const CsrfToken = csrfToken(api);
  /**
   * Image Services
   */
  const Image = new ImageService(api);
  /**
   * ShopOrder
   */
  const ShopOrder = new ShopOrderService(api);
  /**
   * ShopOffer
   */
  const ShopOffer = new ShopOfferService(api);
  /** 
   * Shop Store Service
   */
  const ShopStore = new ShopStoreService(api);
  /**
   * UserServices Instance
   */
  const User = new UserServices(api);

  return {
    CsrfToken, Image, ShopOffer, ShopOrder, ShopStore, User
  }
}
/**
 * -----------------------------------------
 *	Export individual services
 * -----------------------------------------
 */
export * from './services/csrf';
export * from './services/image';
export * from './services/shopOrder';
export * from './services/shopOffer';
export * from './services/shopStore';
export * from './services/user';

/**
 * -----------------------------------------
 *	Export Types
 * -----------------------------------------
 */

export * from './types/image';
export * from './types/mapPosition';
export * from './types/responses';
export * from './types/shopOffer';
export * from './types/shopOrder';
export * from './types/shopStore';
export * from './types/user';