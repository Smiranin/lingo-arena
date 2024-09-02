export interface AppUser {
    username: string;
}

export interface UserAuth {
    user: AppUser | null;
    status: AuthStatus;
}

enum AuthStatus {
    pending,
    in,
    out,
}
