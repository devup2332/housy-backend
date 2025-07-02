import { HttpStatus } from '@nestjs/common';

export class HttpResponseDto {
  status: HttpStatus = 200;
  message: string;
  data: Record<string, any> | any[] | null;
  constructor({
    status = HttpStatus.OK,
    message = 'Success',
    data = null,
  }: {
    status?: HttpStatus;
    message?: string;
    data?: any;
  } = {}) {
    this.status = status;
    this.message = message;
    this.data = data;
  }
}
