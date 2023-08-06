import { getAll } from "../../db/dashboard.js";


export default defineEventHandler(async (event) => {

  try {
    const data = await getAll()
    return {
      data
    }
  } catch (error) {
    return appError(error);
  }

}) 