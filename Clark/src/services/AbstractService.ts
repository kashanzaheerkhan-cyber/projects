import {AxiosError, AxiosResponse} from 'axios';
import Client from '../client/Client';

const client = Client.getInstance();

export default abstract class AbstractService<T> {
  abstract getBaseUrl(): string;

  async get(id: string): Promise<AxiosResponse<T>> {
    try {
      return await client.get<T>(`${this.getBaseUrl()}/${id}`);
    } catch (e: any) {
      const error = 'error' in e ? e.error : e;
      if (this.isAxiosError(error)) {
        return (error as AxiosError).response || error;
      }
      throw e;
    }
  }

  private toQuery(params: URLSearchParams): string {
    return `?${params.toString()}`;
  }

  async list(params: any | null): Promise<AxiosResponse<Array<T>>> {
    try {
      return await client.get<Array<T>>(
        `${this.getBaseUrl()}${params ? this.toQuery(params) : ''}`,
      );
    } catch (e: any) {
      const error = 'error' in e ? e.error : e;
      if (this.isAxiosError(error)) {
        return (error as AxiosError).response || error;
      }
      throw e;
    }
  }

  protected isAxiosError(e: unknown): boolean {
    return (e as AxiosError).isAxiosError !== undefined;
  }
}
