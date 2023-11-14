import Product from '../models/Product';
import AbstractService from './AbstractService';

export default class ProductService extends AbstractService<Product> {
  public static instance: ProductService = new ProductService();

  getBaseUrl(): string {
    return 'products';
  }
}
