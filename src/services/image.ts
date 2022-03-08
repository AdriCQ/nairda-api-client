import { AxiosInstance, AxiosResponse } from 'axios';

import { IImage } from '../types/image';
/**
 * ImageService
 */
export class ImageService {
  /**
   * ImageService Constructor
   * @param api AxiosInstance
   */
  constructor(private readonly api: AxiosInstance) {}
  /**
   * onlySize
   * @param imageId 
   * @param size 
   */
  onlySize(imageId: number, size: 'sm' | 'md' | 'lg') {
    const baseUrl = this.api.defaults.baseURL;
    return `${baseUrl}/api/images/${imageId}?size=${size}`;
  }
  /**
   * paths
   * @param imageId number
   */
  paths(imageId: number) {
    const baseUrl = this.api.defaults.baseURL;
    return `${baseUrl}/api/images/${imageId}`;

  }
}