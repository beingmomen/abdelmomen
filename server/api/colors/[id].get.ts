import { getOne } from "../../db/colors.js";

export default defineEventHandler(async ({ context }) => {
  try {
    const id = context.params?.id as string

    const data = await getOne(id)


    return {
      data: data
    }
  } catch (error) {
    return appError(error);
  }

})  