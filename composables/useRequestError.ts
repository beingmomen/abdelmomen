export const useHandleRequestError = (error: any) => {
  const toast = useToast();
  const { signOut } = useAuthStore();


  console.warn('useHandleRequestError: ', error.value.data.statusMessage);


  if (error.value.data.statusMessage === 'jwt expired') {
    signOut()
  }


  toast.add({
    title: error?.value?.data?.statusMessage,
    icon: 'i-heroicons-x-circle',
    color: 'red',
    timeout: 4000,
    ui: {
      progress: {
        background: 'bg-primary-500 dark:bg-primary-400',
      },
    }
  });
}
