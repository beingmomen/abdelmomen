export const useToggleSidebar = (val = true) => {

  const sidebar = useState("sidebar", () => val);

  return sidebar
}
