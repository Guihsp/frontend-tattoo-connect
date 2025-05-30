export type UserRole = 'CLIENT' | 'TATTOO_ARTIST';

export interface User {
    id: string;
    name: string;
    phone: string;
    email: string;
    role: UserRole;
    token: string;
}
