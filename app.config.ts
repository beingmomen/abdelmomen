export default defineAppConfig({
  ui: {
    primary: 'red',
    gray: 'slate',
    notifications: {
      // Show toasts at the top right of the screen
      position: 'top-0 right-0',
      ui: {
        progress: {
          background: 'zzzzzzz bg-primary-500 dark:bg-primary-400',
        },
      },
      default: {
        color: 'red'
      }
    }
  }
})
