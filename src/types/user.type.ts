//USER LOGIN
export type UserLoginDetails ={
    _id: string,
    isAdmin: boolean,
    token: string,
}

export type UserLoginResponse = {
    error:string,
    loading: boolean
    user: UserLoginDetails
}


//USER DETAILS
export type UserDetails  = {
    _id: string,
    username: string,
    email: string,
    createdAt: Date,
}
export type UserDetailsResponse ={
    error:string,
    loading: boolean
    user: UserDetails
}