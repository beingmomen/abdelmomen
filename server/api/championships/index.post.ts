import { createOne } from "../../db/championships.js";
import { slug } from "../../utils/slug.js";
import { isProtect } from "../../utils/protect.js";

export default defineEventHandler(async (event) => {


  try {
    await isProtect(event, ['ADMIN', 'DEV'])
    const body = await readBody(event)

    // 1) Check if keys are exist
    const requiredFields = ["name", "date", 'activityId'];

    requiredFields.forEach(field => {
      if (!body[field] || (Array.isArray(body[field]) && body[field].length === 0)) {
        throw new Error(`The ${field} is required`);
      }
    });


    const textSlug = slug(body.name)

    const data = await createOne({
      ...body,
      slug: textSlug
    })

    return {
      status: "success",
      message: 'Added Successfully',
      data: data
    }

  } catch (error) {
    return appError(error);
  }


}) 