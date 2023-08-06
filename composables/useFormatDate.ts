import { useDateFormat } from "@vueuse/core";
export const useFormatDate = (text: any) => {
  const formatted = useDateFormat(text, "YYYY-MM-DD");
  return formatted.value;
}
