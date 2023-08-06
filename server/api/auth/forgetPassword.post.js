import { getByUniqueKey, updateOne } from "../../db/users.js";
import crypto from "crypto";
import { sendMail } from "../../utils/sendMail.js";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const requiredFields = ["email"];

    requiredFields.forEach((f) => {
      if (!body[f]) {
        throw new Error(`The ${f} field is required`);
      }
    });

    // Is user exist
    const user = await getByUniqueKey({ email: body.email });

    if (!user) {
      throw new Error(`There is no user with email address`);
    }

    const resetToken = crypto.randomBytes(32).toString("hex");

    user.passwordResetToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    user.passwordResetExpires = Date.now() + 10 * 60 * 1000;

    const profileUrl = `http://localhost:3000/auth/reset-password/${resetToken}`;
    const website = process.env.SITE_TITLE;
    const manager = process.env.MANAGER;

    const html = `
        <h3>مرحبا بك ${user.name}</h3>
        <p>هل نسيت كلمة المرور الخاصه بك ؟ </p>
        <p>يمكنك إعادة تعيين كلمة مرورك من هنا</p>
        <a href="${profileUrl}" target="_blank">إعادة تعيين كلمة المرور</a>
        <p>إذا كنت تتذكر كلمة مرورك فتجاهل هذا البريد الإلكترونى</p>
      `;

    const obj = {
      name: user.name,
      url: profileUrl,
      website,
      manager,
      template: "passwordReset",
      subject: `Your password reset token (valid for only 10 minutes)`,
      from: `${website} <${process.env.EMAIL_FROM}>`,
      to: user.email,
      html,
    };

    if (user) {
      await sendMail(obj);
    }

    const userId = user.id;

    delete user.id;

    await updateOne(user, userId);

    return {
      status: "success",
      message: "Token sent to email",
      resetToken,
    };
  } catch (error) {
    return appError(error);
  }
});
