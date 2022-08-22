export type UserLoginResponse = {
    _id: string,
    username: string,
    email: string,
    isAdmin: boolean,
    token: string,
    createdAt: Date,
}