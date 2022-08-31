//SINGLE USER
export type UserType = {
    _id: string,
    email: string,
    isAdmin: boolean,
    username: string,
    password: string,
    updatedAt: Date,
    createdAt: Date
}

//USER LOGIN
export type UserLoginDetailsType = {
    _id: string,
    isAdmin: boolean,
    token: string,
}

export type UserLoginResponse = {
    userInfo: UserLoginDetailsType
    loading: boolean
    error: string,
}

//USER DETAILS
export type UserDetailsType = {
    _id: string,
    username: string,
    email: string,
    createdAt: Date,
}
export type UserDetailsResponse = {
    user: UserDetailsType
    loading: boolean
    error: string,
}

//UPDATED PROFILE
export type UpdateProfileType = {
    id: string
    username: string,
    email: string,
    isAdmin: boolean,
    createdAt: Date,
    token: string,
}

export type UpdateProfileResponse = {
    userInfo: UpdateProfileType,
    loading: boolean,
    error: string
}