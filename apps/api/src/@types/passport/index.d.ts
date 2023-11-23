import { AuthenticationData } from '../../types/authentication';

declare global {
  namespace Express {
    interface User extends AuthenticationData {}
  }
}
