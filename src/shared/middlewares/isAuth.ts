import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { apiError } from "../helpers/apiErrors";

const SECRET = "ryu888";
export function isAuth(req: Request, res: Response, next: NextFunction) {
  const token = req.headers["authorization"];

  if (!token) throw new apiError("token nao informado", 400);

  if (token) {
    verify(token, SECRET, (err, decode) => {
      if (err) throw new apiError("usuario nao autenticado", 401);
      if (decode) next();
    });
  }
}
