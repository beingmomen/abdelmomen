import { createOne } from "../../db/players.js";
import { slug } from "../../utils/slug.js";
import { isProtect } from "../../utils/protect.js";

export default defineEventHandler(async (event) => {

  try {

    await isProtect(event, ['ADMIN', 'DEV'])


    const body = await readBody(event)

    // 1) Check if keys are exist
    const requiredFields = ["name", "nationalId", "image", "birthDate", 'activityId', "fileNumber", "belts", 'championshipId'];

    requiredFields.forEach(field => {
      if (!body[field] || (Array.isArray(body[field]) && body[field].length === 0)) {
        throw new Error(`The ${field} is required`);
      }
    });

    if (!body.belts.length || !body.belts[0].beltId || !body.belts[0].date) {
      throw new Error(`You should enter last belt at least`);
    }

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