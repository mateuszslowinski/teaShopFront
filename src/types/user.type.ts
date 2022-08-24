//USER LOGIN
export type UserLoginDetails ={
    _id: string,
    isAdmin: boolean,
    token: string,
}

export type UserLoginResponse = {
    user: UserLoginDetails
    loading: boolean
    error:string,
}


//USER DETAILS
export type UserDetails  = {
    _id: string,
    username: string,
    email: string,
    createdAt: Date,
}
export type UserDetailsResponse ={
    user: UserDetails
    loading: boolean
    error:string,
}

//UPDATED PROFILE
export type UpdateProfile ={
    _id: string
    username:string,
    email: string,
    isAdmin: boolean,
    createdAt: Date,
    token: string,
}

export type UpdateProfileResponse = {
    userInfo: UpdateProfile,
    loading:boolean,
    error:string
}