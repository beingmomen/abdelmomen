export default async function({ app, redirect, store }) {
    const cookieRes = await app.$cookies.get('dashboard-mode')
    if (cookieRes == "dark") {
        app.head.bodyAttrs.class = 'dark-layout'
        store.dispatch("layoutMode", 'dark');
    } else {
        app.head.bodyAttrs.class = 'light-layout'
        store.dispatch("layoutMode", 'light');
    }
}