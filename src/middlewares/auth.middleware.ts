import { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "../utils/jwt.utils";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    //Valida que se haya enviado el token en los headers de la peticion
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res.status(401).json({
        success: false,
        message: "No fue proporcionado token de autorizacion",
      });
      return;
    }

    //Recupera solo la parte del token de todo el texto
    const token = authHeader.substring(7);

    //verifica el token
    const verifiedToken = verifyAccessToken(token);

    // req.user = {
    //     id: verifiedToken.id,
    //     email: verifiedToken.email
    // }

    next();
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === "TokenExpiredError") {
        res.status(401).json({
          success: false,
          message: "Token ha expirado",
        });
        return;
      }

      if (error.name === "JsonWebTokenError") {
        res.status(401).json({
          success: false,
          message: "Token Invalido",
        });
        return;
      }
    }

    res.status(500).json({
        success: false,
        message: 'Error en la autenticacion'
    })
  }
};
