export const $t = (text: any) => {
  const { t } = useI18n();
  return t(text)
}
