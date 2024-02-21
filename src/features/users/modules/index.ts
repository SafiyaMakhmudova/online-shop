export interface UserOtp {
  phone: string;
}

export interface UserVerify{
  phone:string;
  verification_key:any
  otp: string
}
