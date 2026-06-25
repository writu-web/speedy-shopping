export interface loginCredentials {
  email: string;
  password: string;
}
export interface registerCredentials {
  username: string;
  email: string;
  password: string;
}
export interface authState {
  isAuthenticated: boolean;
  token: string | null;
  authenticUser: {
    id: string;
    name: string;
    email: string;
    password: string;
  } | null;
}
