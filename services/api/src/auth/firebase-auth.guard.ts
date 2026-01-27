import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import admin from "../firebase/firebase-admin";

@Injectable()
export class FirebaseAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
      throw new UnauthorizedException("Missing Authorization header");
    }

    const token = authHeader.split(" ")[1];

    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      request.user = decodedToken; // ✅ available in controllers
      return true;
    } catch {
      throw new UnauthorizedException("Invalid Firebase token");
    }
  }
}
