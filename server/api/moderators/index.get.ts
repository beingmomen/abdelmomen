import { getAll } from "../../db/moderators.js";

export default defineEventHandler(async (event) => {

  try {

    const query = getQuery(event)


    const { data, count } = await getAll(query)


    return {
      state: 'success',
      total: count,
      results: data.length,
      page: query.page || 1,
      data
    }

  } catch (error) {
    return appError(error);
  }


}) 