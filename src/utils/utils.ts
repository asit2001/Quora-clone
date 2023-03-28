import { userInfoType, userType } from "../types";

export const  users = JSON.parse(localStorage.getItem("users") || '[]') as userType[]
export const user = JSON.parse(localStorage.getItem("users") || '{}') as userType
export const validateEmail = (email: string) =>{
 return  new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(email);
}


export const validateName = (name:string):string=>{
  if (name.length <3) {
    return "name must contain at least 3 characters"
  }
  return ""
}
export const validatePassword = (password:string):string=>{
  if (password.length <8) {
    return "password must contain at least 8 characters"
  }
  return ""
}
export const validateEmailForRegister = (email:string)=>{
  if (validateEmail(email)) {
    return "";
  }else if (users.filter((user)=>user.email === email.toLocaleLowerCase()).length>0) {
    return "Email address already registered"
  }else{
    return "invalid email address";
  }
}
export function validateUser(userInfo: userInfoType): userType | null {

  const users = JSON.parse(localStorage.getItem("users")!) as userType[];

  users?.forEach((user) => {
    if (user.email === userInfo.email && user.password === userInfo.password) {
      return user;
    }
  });
  return null;
}
export function disabledRegisterBtn(btnName:"Next"|"Finish",userInfo:userType) {
    if (btnName ==="Next") {
        return validateName(userInfo.name).length!==0 || !validateEmail(userInfo.email);
    }
    return validateName(userInfo.name).length!==0 || !validateEmail(userInfo.email) || validatePassword(userInfo.password).length !==0;
}
export const registerUser = (userInfo:userType)=>{
    userInfo.email = userInfo.email.toLowerCase();
    localStorage.setItem("user",JSON.stringify(userInfo));
    users.push(userInfo);
    localStorage.setItem("users",JSON.stringify(users));
}