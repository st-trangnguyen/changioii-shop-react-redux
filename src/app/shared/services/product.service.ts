import { APIService, ENDPOINT} from '../helpers/api/api.helper';

export class ProductServive {
  http: APIService;

  constructor() {
    this.http = new APIService();
  }

  getProductList() {
    return new Promise((resolve, reject) => {
      this.http.get([ENDPOINT.products.index])
        .then(res => resolve(res))
        .catch(err => reject(err))
    });
  }
}
