import { useDateFormat } from "@vueuse/core";
export const useFormatDate = (text: any, format = "YYYY-MM-DD", local = 'en-US') => {
  const formatted = useDateFormat(text, format, { locales: local });
  return formatted.value;
}
