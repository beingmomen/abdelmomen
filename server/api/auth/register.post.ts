import { createUser } from "../../db/users.js"
import { userTransformer } from "../../transformers/user.js";
import { slug } from "../../utils/slug.js";
import { sendMail } from "../../utils/sendMail.js";


export default defineEventHandler(async (event) => {


  try {
    const body = await readBody(event)

    const requiredFields = ["name", "email", "password", "passwordConfirm"];

    requiredFields.forEach(f => {
      if (!body[f]) {
        throw new Error(`The ${f} field is required`)
      }
    })

    if (body.password !== body.passwordConfirm) {
      throw new Error('Password doesn\'t match passwordConfirm')
    }

    const textSlug = slug(body.name)

    const user = await createUser({
      name: body.name,
      email: body.email,
      password: body.password,
      passwordConfirm: body.passwordConfirm,
      image: body.image || '/images/user.png',
      country: body.country,
      phone: body.phone,
      slug: textSlug
    })

    const profileUrl = "http://localhost:3000/profile"
    const website = process.env.SITE_TITLE
    const manager = process.env.MANAGER

    const html =
      `
        <h3>مرحبا بك ${user.name}</h3>
        <p>مرحبا بك فى ${website} يسعدنا وجودك معنا</p>
        <p>نحن جميعًا عائلة معا هنا ، لذا تأكد من تحميل صورة المستخدم الخاصة بك حتى نتعرف عليك بشكل أفضل قليلاً!</p>
        <a href="${profileUrl}" target="_blank">قم بتحميل صورتك</a>
        <p>إذا كنت بحاجة إلى أي مساعدة بخصوص اى معلومات ، فلا تتردد في الاتصال بنا</p>
        <p> - ${manager}</p>
      `;

    const obj = {
      name: body.name,
      url: profileUrl,
      website,
      manager,
      template: "welcome",
      subject: `مرحبا بك فى عائلة ${website}`,
      from: `${website} <${process.env.EMAIL_FROM}>`,
      to: body.email,
      html
    };

    if (user) {
      await sendMail(obj)
    }

    return {
      status: "success",
      message: 'You have successfully signed up!',
      data: userTransformer(user)
    }
  } catch (error) {
    return appError(error);
  }


})