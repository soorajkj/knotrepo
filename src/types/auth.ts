interface AuthSuccessResponse {
  success: true;
  message: string;
}

interface AuthErrorResponse {
  success: false;
  message: string;
}

export type AuthResponse = AuthSuccessResponse | AuthErrorResponse;
