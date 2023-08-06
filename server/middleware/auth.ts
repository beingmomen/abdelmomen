import { getByUniqueKey } from "../db/users.js";
import { validateToken } from "../utils/jwt.js";

export default defineEventHandler(async (event) => {
  try {
    const allowedEndpoints = [
      '/api/auth/login',
      '/api/auth/logout',
      '/api/auth/loggedIn',
      "/api/auth/register",
      "/api/auth/forgetPassword",
      "/api/auth/resetPassword/:token"
    ];

    const { method, url } = event.node.req;

    if (allowedEndpoints.includes(url)) {
      return; // Exit the function without executing any further code
    }

    if (method === 'POST') {
      const { jwt } = parseCookies(event);

      if (typeof jwt !== 'string') {
        throw new Error(`Token is invalid`);
      }

      const isValidToken = await validateToken(jwt);
      const userExists = await getByUniqueKey({ id: isValidToken.userId });

      if (!userExists) {
        throw new Error(`Token is invalid`);
      }
    }
  } catch (error) {
    return appError(error);
  }
});
