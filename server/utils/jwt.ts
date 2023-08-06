import jwt, { JwtPayload as JWTJwtPayload } from "jsonwebtoken"

export type JwtPayload = JWTJwtPayload;

const generateAccessToken = (user: any) => {
  const config = useRuntimeConfig()

  return jwt.sign({ userId: user.id }, config.jwtAccessSecret, {
    expiresIn: config.jwtExpiresIn
  })
}


export const generateTokens = (user: any) => {
  const accessToken = generateAccessToken(user)

  return {
    accessToken: accessToken,
  }
}

export const sendToken = (event: any, token: any) => {
  setCookie(event, "jwt", token, {
    httpOnly: true,
    sameSite: true
  })
}

export const validateToken = (token: any): JwtPayload => {
  const config = useRuntimeConfig();
  const isValid = jwt.verify(token, config.jwtAccessSecret) as JwtPayload;
  return isValid;
  // try {
  // } catch (error) {
  //   throw new Error("Invalid token");
  // }
}

