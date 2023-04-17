export interface userType {
  name: string;
  password: string;
  email: string;
}
export interface userInfoType {
  email: string;
  password: string;
}
export interface QNAType{
  [key:string]:{
    answers:{[key:string]:ANSType},
    question:string,
    questionedBy:string,
    profilePicture:string
  }
}
export interface ANSType{
    imgUrl:string,
    answer:string,
    answeredBy:string,
    profilePicture:string
    voters:{
      [key:string]:string
    },
    downVoters:{
      [key:string]:string
    }
}
export interface User{
  displayName: string |null,
  photoURL:string|null,
  uid:string|null
}
export interface userAnswerType{
  [questionKey:string]:{
    [answerKey:string]:{
      answer:string,
      answeredBy:string,
      imgUrl:string,
      profilePicture:string
    }
  }
}