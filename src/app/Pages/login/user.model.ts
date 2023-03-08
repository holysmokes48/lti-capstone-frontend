export class User{
  public id: number;
  public email: string;
  public userName: string;
  public password: string;
  public securityQuestion: string;
  public answer: string;
  
  constructor(id: number, email: string, userName: string, password: string, 
  securityQuestion: string, answer: string) {
    this.id = id;
    this.email = email;
    this.userName = userName;
    this.password = password;
    this.securityQuestion = securityQuestion;
    this.answer = answer;
  }
}