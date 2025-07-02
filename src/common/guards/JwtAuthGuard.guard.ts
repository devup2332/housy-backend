import environments from '@/shared/config/environments';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor() {}

  canActivate(context: ExecutionContext): boolean {
    try {
      const req = context.switchToHttp().getRequest<Request>();
      const token = this.extractTokenFromHeader(req);

      if (!token) throw new UnauthorizedException('Missing token');
      const payload = this.decodeToken(token);
      const user = {
        email: payload['email'],
        id: payload['sub'],
      };
      req['user'] = user;
      return true;
    } catch {
      throw new UnauthorizedException('Invalid token');
    }
  }

  private extractTokenFromHeader(request: Request) {
    const authHeader = request.headers['authorization'] as string;
    if (!authHeader) return null;
    const [type, token] = authHeader.split(' ');
    if (type !== 'Bearer') return null;
    return token;
  }

  private decodeToken(token: string) {
    return jwt.verify(token, environments.SUPABASE_JWT_SECRET);
  }
}
