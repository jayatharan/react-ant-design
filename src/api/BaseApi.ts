import { HttpMethods } from './HttpMethods';
import axiosInstance from './AxiosInstance';
import { refreshAccessToken } from '../auth/AuthService';

export default class BaseApi {
  protected async getAsync<T>(
    endPoint: string,
    queryStringParameters?: { [key: string]: string | number },
  ): Promise<T> {
    return await this.executeAsync<T>(HttpMethods.Get, endPoint, queryStringParameters, undefined);
  }

  protected async postAsync<T>(
    endPoint: string,
    queryStringParameters?: { [key: string]: string | number },
    // eslint-disable-next-line @typescript-eslint/ban-types
    data?: {},
  ): Promise<T> {
    return await this.executeAsync<T>(HttpMethods.Post, endPoint, queryStringParameters, data);
  }

  protected async putAsync<T>(
    endPoint: string,
    queryStringParameters?: { [key: string]: string | number },
    // eslint-disable-next-line @typescript-eslint/ban-types
    data?: {},
  ): Promise<T> {
    return await this.executeAsync<T>(HttpMethods.Put, endPoint, queryStringParameters, data);
  }

  protected async patchAsync<T>(
    endPoint: string,
    queryStringParameters?: { [key: string]: string | number },
    // eslint-disable-next-line @typescript-eslint/ban-types
    data?: {},
  ): Promise<T> {
    return await this.executeAsync<T>(HttpMethods.Patch, endPoint, queryStringParameters, data)
  }

  protected async deleteAsync<T>(
    endPoint: string,
    queryStringParameters?: { [key: string]: string | number },
    // eslint-disable-next-line @typescript-eslint/ban-types
    data?: {},
  ): Promise<T> {
    return await this.executeAsync<T>(HttpMethods.Delete, endPoint, queryStringParameters, data);
  }

  protected async executeAsync<T>(
    method: HttpMethods,
    endPoint: string,
    queryStringParameters?: { [key: string]: string | number },
    // eslint-disable-next-line @typescript-eslint/ban-types
    data?: {},
  ): Promise<T> {
    let retry = false;
    let axiosPromise = await axiosInstance.request<T>({
      method: method,
      url: endPoint,
      params: queryStringParameters,
      data: data,
    });

    if(axiosPromise.status === 403 && !retry){
      retry = true;
      const result = await refreshAccessToken();
      if(result){
        axiosPromise = await axiosInstance.request<T>({
          method: method,
          url: endPoint,
          params: queryStringParameters,
          data: data,
        });
      }
    }

    return axiosPromise.data;
  }
}
