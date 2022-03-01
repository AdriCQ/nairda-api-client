import { AxiosInstance } from 'axios';

import { IUserAuthLoginRequest, IUserAuthRegisterRequest, IUserAuthResponse, IUserProfile } from '../types/user';

import { csrfToken } from './csrf';
/**
 * @class UserServices
 */
export class UserServices {
  /**
   * constructor
   * @param api AxiosInstance
   */
  constructor(private readonly api: AxiosInstance) {}
  /**
   * login
   * @param credentials 
   */
  async login(credentials: IUserAuthLoginRequest) {
    await csrfToken(this.api);
    return this.api.post<IUserAuthResponse>('/api/users/login', credentials)
  }
  /**
   * profile
   * @returns AxiosPromise<IUserProfile>
   */
  async profile() {
    return this.api.get<IUserProfile>('/api/users/profile');
  }
  /**
   * register
   * @param profile IUserAuthRegisterRequest
   * @returns Promise
   */
  async register(profile: IUserAuthRegisterRequest) {
    await csrfToken(this.api);
    return await this.api.post<IUserAuthResponse>('/api/users/register', profile);
  }
}