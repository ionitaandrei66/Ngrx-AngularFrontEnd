export interface AuthState {
    auth: AuthModel | null;
    error: string | null;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export interface AuthModel {
    username: string;
    password: string;
    role?: string;
    uuid?: string;
}

export interface AppState {
    auth: AuthState;
}