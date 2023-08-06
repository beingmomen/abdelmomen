import jwt, { JwtPayload as JWTJwtPayload } from "jsonwebtoken"
export type JwtPayload = JWTJwtPayload;


export const useJwt = (token: any) => {

  const config = useRuntimeConfig();
  const isValid = jwt.verify(token, config.jwtAccessSecret) as JwtPayload;
  // return isValid;

  return isValid
}
