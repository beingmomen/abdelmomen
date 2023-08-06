export const useFixedSidebar = (val = true) => {

  const sidebar = useState("fixedSidebar", () => val);

  return sidebar
}
