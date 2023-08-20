

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { token, setUser } = useAuthStore()

  const body = { token }



  if (process.server) {



    const { data, error } = await useFetch("/api/auth/loggedIn", {
      method: "POST",
      body: body,
    });

    const user = data.value?.user


    await setUser(user)


    if (to.meta.layout === 'landing') {
      return
    }

    if (to.meta.layout === 'auth') {
      if (user) {
        return navigateTo('/')
      }
    } else {
      if (!user) {
        return navigateTo('/login')
      }
    }


  }
})
