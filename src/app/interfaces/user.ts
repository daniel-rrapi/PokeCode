export interface User {
  name: string | null;
  lastName: string | null;
  email: string | null;
  password: string | null;
  passwordConfirm: string | null;
  terms: boolean;
}
