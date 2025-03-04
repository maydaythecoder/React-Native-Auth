import { User } from "firebase/auth";

export interface AuthenticatedScreenProps {
  user: User;
  handleAuthentication: () => Promise<void>;
}