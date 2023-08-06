import { resetPassword, updateOne } from "../../../db/users";
import crypto from "crypto";
import bcrypt from "bcrypt";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { token } = event.context?.params;
    const requiredFields = ["password", "passwordConfirm"];

    requiredFields.forEach((f) => {
      if (!body[f]) {
        throw new Error(`The ${f} field is required`);
      }
    });

    // 1) Get user based on the token
    const hashedToken = crypto
      .createHash("sha256")
      .update(`${token}`)
      .digest("hex");

    const user = await resetPassword(hashedToken);

    // 2) If token has not expired, and there is user, set the new password
    if (!user) {
      throw new Error(`Token is invalid or has expired`);
    }

    user.password = bcrypt.hashSync(body.password, 12);
    user.passwordConfirm = bcrypt.hashSync(body.passwordConfirm, 12);
    user.passwordResetToken = null;
    user.passwordResetExpires = null;

    const userId = user.id;
    delete user.id;

    await updateOne(user, userId);

    return {
      status: "success",
      message: "Changed successfully you can now login",
    };
  } catch (error) {
    return appError(error);
  }
});
