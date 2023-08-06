export const useAR = () => {
  const { locale } = useI18n();
  const isArabic = locale.value === 'en' ? 'ltr' : 'rtl'
  return isArabic
}
