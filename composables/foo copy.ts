export const useFoo = (error: any) => {
  const toast = useToast();
  toast.add({
    title: error?.value?.data?.statusMessage,
    icon: 'i-heroicons-x-circle',
    color: 'red',
  });
}
