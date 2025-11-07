import jwt from "jsonwebtoken";
import authConfig from "../config/auth.config";

export interface TokenPayload {
  id: string;
  email: string;
}

export const generateAccessToken = (payload: TokenPayload): string => {
  return jwt.sign(payload,authConfig.secret,{
    expiresIn:'15m', 
    algorithm:'HS256'
  }); 
};


export const refreshToken = (payload: TokenPayload): string => {
  return jwt.sign(payload, authConfig.refresh_secret, {
    expiresIn: '24h',
    algorithm: 'HS256'
  });
}

export const verifyAccessToken = (token: string): TokenPayload => {
  return jwt.verify(token, authConfig.secret) as TokenPayload
}

export const verifyRefreshAccessToken = (token: string): TokenPayload => {
  return jwt.verify(token, authConfig.refresh_secret) as TokenPayload
}