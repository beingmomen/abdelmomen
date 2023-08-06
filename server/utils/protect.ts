import { getByUniqueKey } from "../db/users.js";
import { validateToken } from "../utils/jwt.js";

export const isProtect = async (event: any, restrictTo: any) => {

  try {
    const { jwt } = parseCookies(event)

    if (!jwt) {
      throw new Error(`Token is invalid`);
    }

    const isValid = await validateToken(jwt)
    const isExist = await getByUniqueKey({ id: isValid.userId })

    if (!isExist) {
      throw new Error(`Token is invalid`);
    }

    if (!restrictTo.includes(isExist.role)) {
      throw new Error(`You don't have permission to perform this action`);
    } else {

      return true
    }

  } catch (error) {
    return appError(error);
  }
}