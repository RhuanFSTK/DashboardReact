import './navbar.css';

const Navbar = ({sidebarOpen, openSidebar}) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
        <a href="#" className="active__link" >Diário</a>
        <a href="#">Semanal</a>
        <a href="#">Mensal</a>
        <a href="#">Anual</a>
      </div>
      <div className="navbar__right">
        <a href="#">
          <i className="fa fa-search"></i>
        </a>
        {/* <a href="#">
          <i className="fa fa-clock-o"></i>
        </a> */}
      </div>
    </nav>
  )
}



export default Navbar;