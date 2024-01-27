import Link from "next/link";
export function ResourcesFiltrees({resources,filterText}){
  
  if (filterText) {
    return resources.filter((resource) =>
      resource.title.toLowerCase().includes(filterText.toLowerCase())
    );
  } else {
    return resources;
  }
}
const Navbar = ({filterText, onFilterTextChange}) => {
    return (
      <nav className="navbar is-dark ">
        <div className="container">
          <div className="navbar-brand">
          <Link legacyBehavior href="/">
            <a className="navbar-item">
              <h1>Content Manager</h1>
            </a>
          </Link>
          
          </div>
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
              <div className=" navbar-item">
                <div className="control has-icons-left">
                  <form>
                  <input 
                    className="input is-rounded" type="text" placeholder="Search" 
                    value={filterText}   
                    onChange={(e) => onFilterTextChange(e.target.value)} 
                  />
                  <span className="icon is-left">
                    <i className="fa fa-search"></i>
                  </span>
                  </form>
                </div>
              </div>
              <Link legacyBehavior href="/">
              <a className="navbar-item  is-size-5 has-text-weight-semibold">
                Home
              </a>
            </Link>
            <Link legacyBehavior href="/resources/new">
              <a className="navbar-item is-size-5 has-text-weight-semibold">
                Add
              </a>
            </Link>
              <a className="navbar-item is-size-5 has-text-weight-semibold">
                Features
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
  
  export default Navbar;