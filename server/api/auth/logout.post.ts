
export default defineEventHandler(async (event) => {

  setCookie(event, 'jwt', '')

  return {
    statusMessage: 'success',
    statusCode: 200,
    status: true
  }
}) 