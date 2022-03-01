import { AxiosInstance } from 'axios';

import { csrfToken } from './services/csrf';
import { ImageService } from './services/image';
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
   * UserServices Instance
   */
  const User = new UserServices(api);
  /** 
   * Shop Store Service
   */
  const ShopStore = new ShopStoreService(api);

  return {
    CsrfToken, Image, ShopStore, User
  }
}
/**
 * -----------------------------------------
 *	Export individual services
 * -----------------------------------------
 */
export * from './services/csrf';
export * from './services/image';
export * from './services/shopStore';

/**
 * -----------------------------------------
 *	Export Types
 * -----------------------------------------
 */

export * from './types/image';
export * from './types/mapPosition';
export * from './types/responses';
export * from './types/shopStore';
export * from './types/user';