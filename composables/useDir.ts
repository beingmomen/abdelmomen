export const useDir = () => {
  const { locale } = useI18n();
  const dir = locale.value === 'ar' ? 'rtl' : 'ltr'
  return dir
}
