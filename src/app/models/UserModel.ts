export interface IUserLogin {
    email: string,
    password: string
}

export interface IUserRegister{
    firstName:string,
    lastName:string,
    email:string,
    password:string,
    service:string
}

export interface IForgetPassword{
    email:string
}

export interface IAddNote{
    title:string,
    description:string
}