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
   * @returns AxiosPromise<string>
   */
  async onlySize(imageId: number, size: 'sm' | 'md' | 'lg'): Promise<AxiosResponse<string>> {
    return this.api.get<string>(`/api/images/${imageId}`, { params: { size } });
  }
  /**
   * paths
   * @param imageId number
   * @returns AxiosPromise<IImage>
   */
  async paths(imageId: number) {
    return this.api.get<IImage>(`/api/images/${imageId}`);
  }
}