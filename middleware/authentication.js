export default async function({ app, redirect, store, $auth }) {

    if (!$auth.$state.loggedIn) {
        redirect("/login")
    }
}
