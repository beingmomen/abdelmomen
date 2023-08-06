export const useArrowDir = (dir: any) => {
  let icon = "";
  if (dir === "rtl") {
    icon = "i-heroicons-arrow-left-20-solid";
  } else {
    icon = "i-heroicons-arrow-right-20-solid";
  }

  return icon;
}
