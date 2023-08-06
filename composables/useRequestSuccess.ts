export const useHandleRequestSuccess = async (data: any, redirect: any) => {
  const toast = useToast();

  // console.warn('data', data.value);
  toast.add({
    title: data?.value?.message,
    icon: "i-heroicons-check-circle",
    color: 'green',
    timeout: 4000,
    ui: {
      progress: {
        background: 'bg-primary-500 dark:bg-primary-400',
      },
    }
  });

  if (redirect) {
    await navigateTo(localePath(redirect));

  }
}
