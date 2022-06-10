export default async function ({ app, redirect, store, $auth }) {

    const token = await app.$cookies.get('auth._token.local')
    store.state.token = token


    if (!$auth.$state.loggedIn) {
        redirect("/login")
    }
}
