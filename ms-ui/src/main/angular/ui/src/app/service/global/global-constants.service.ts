import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalConstantsService {

  private GATEWAY_URL: string = 'http://localhost:8084';
  private IMG_URL: string = this.GATEWAY_URL + '/recipe-ui/assets/images';

  constructor() { }

  getImageUrl(): string {
    return this.IMG_URL;
  }

  getGatewayUrl(): string {
    return this.GATEWAY_URL;
  }
}
