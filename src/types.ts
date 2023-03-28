export interface userType {
  name: string;
  password: string;
  email: string;
}
export interface userInfoType {
  email: string;
  password: string;
}
export interface answerType{
    vote: number;
    id: number;
    imgUrl: string;
    answer: string;
    answeredBy: string;
}