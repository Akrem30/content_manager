
import ActiveResource from "./ActiveResource";
import NavbarOtherPages from "./NavbarOtherPages";
const LayoutOtherPages = ({children}) =>
  <>
    <NavbarOtherPages />
    <ActiveResource />
    { children }
  </>
export default LayoutOtherPages;