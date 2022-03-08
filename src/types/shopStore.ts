import { IImage } from './image';
import { IMapPosition } from './mapPosition';

/**
 * @type IShopStore
 */
export type IShopStore = {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly image: IImage;
  readonly map_position: IMapPosition;
  readonly rating: number;
}

/**
 * -----------------------------------------
 *	HTTP
 * -----------------------------------------
 */

/**
 * @type IShopStoreCreateRequest
 */
export type IShopStoreCreateRequest = {
  readonly title: string;
  readonly description: string;
  readonly map_position: Omit<IMapPosition, 'id'>;
  readonly open?: boolean;
}
/**
 * @type IShopStoreUpdateRequest
 */
export type IShopStoreUpdateRequest = Partial<IShopStoreCreateRequest>;