import { AxiosInstance } from 'axios';

import { ShopStoreService } from '../services/shopStore';

/**
 * ShopStoreTests
 * @param api 
 */
export function ShopStoreTests(api: AxiosInstance) {
  /**
   * service
   */
  const $service = new ShopStoreService(api);
  /**
   * create
   */
  async function create() {
    try {
      console.log('Success ShopStore create', (await $service.create({
        title: 'TestTitle',
        description: 'TestDescription',
        map_position: {
          coords: {
            lat: 1,
            lng: 1
          },
          title: 'Map Title',
          public: false
        }
      })).data);
    } catch (error) {
      console.log('Error ShopStore create', error);
    }
  }
  /**
   * update
   */
  async function update() {
    try {
      console.log('Success ShopStore update', (await $service.update(1, {
        title: 'TestTitle',
        description: 'TestDescription',
        map_position: {
          coords: {
            lat: 1,
            lng: 1
          },
          title: 'Map Title',
          public: true
        },
        open: true
      })).data);
    } catch (error) {
      console.log('Error ShopStore update', error);
    }
  }

  return {
    create, update
  }
}