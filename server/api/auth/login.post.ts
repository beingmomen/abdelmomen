import { compare } from "bcrypt";
import { getByUniqueKey } from "../../db/users.js";
import { userTransformer } from "../../transformers/user.js";
import { generateTokens, sendToken } from "../../utils/jwt.js";


export default defineEventHandler(async (event) => {


  try {
    const body = await readBody(event)

    // 1) Check if email and password exist
    const requiredFields = ["email", "password"];
    requiredFields.forEach(f => {
      if (!body[f]) {
        throw new Error(`Please provide email and password!`)
      }
    })

    // 2) Check if user exists && password is correct
    const user = await getByUniqueKey({ email: body.email });
    const doesThePasswordMatch = await compare(body.password, user?.password || '');

    if (!user || !doesThePasswordMatch) {
      throw new Error("Username or password is invalid");
    }

    const { accessToken } = generateTokens(user);
    sendToken(event, accessToken);


    return {
      token: accessToken,
      status: "success",
      data: userTransformer(user),
    }
  } catch (error) {
    return appError(error);
  }
}) 