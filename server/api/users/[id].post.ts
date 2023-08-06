import { deleteOne, updateOne } from "../../db/users.js";
import { isProtect } from "../../utils/protect.js";



export default defineEventHandler(async (event) => {

  try {
    await isProtect(event, ['ADMIN', 'DEV'])
    const body = await readBody(event)
    const id = event.context?.params?.id as string



    if (body) {

      // Update item if there is body
      const data = await updateOne({
        ...body
      }, id)

      return {
        status: "success",
        message: 'Updated Successfully',
        data: data
      }
    } else {
      // Delete item if not found body
      await deleteOne(id)
      return {
        message: 'Deleted successfully'
      }
    }
  } catch (error) {
    return appError(error);
  }
}) 