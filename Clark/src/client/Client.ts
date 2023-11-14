import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

const BASEURL = 'https://api.escuelajs.co/api/v1/';

export default class Client {
  private client: AxiosInstance;
  static instance = new Client();

  private constructor() {
    this.client = axios.create({baseURL: BASEURL});
    this.client.interceptors.response.use(
      response => response,
      this.errorHandler.bind(this),
    );
  }

  errorHandler(
    error: AxiosError,
  ): Promise<AxiosError | AxiosResponse | undefined> {
    return Promise.reject(new Error(JSON.stringify(error)));
  }

  static getInstance(): Client {
    return Client.instance;
  }

  get<T>(path: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.get<T>(path, config);
  }
}
