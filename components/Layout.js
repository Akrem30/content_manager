import Navbar from "components/Navbar";
import ActiveResource from "./ActiveResource";
const Layout = ({children, filterText, onFilterTextChange}) =>
  <>
    <Navbar filterText={filterText}  onFilterTextChange = {onFilterTextChange} />
    <ActiveResource />
    { children }
  </>
export default Layout;