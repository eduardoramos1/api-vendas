//  Isso faz com que o objeto Request do express agora tenha dentro dele o objeto user

declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}
