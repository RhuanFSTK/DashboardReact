import './sidebar.css';
import logo from './logo192.png';

const Sidebar = ({sidebarOpen, closeSidebar}) => {
  return (
    <div className={ sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className='sidebar__tittle'>
        <div className='sidebar__img'>
          <img src={logo} alt="logo"/>
          {/* <h1>Rhuan</h1> */}
        </div>
        <i onClick={ () => closeSidebar()}
          className='fa fa-times'
          id='sidebarIcon'
          aria-hidden='true'>
        </i>
      </div>
      <div className='sidebar__menu'>
        <div className='sidebar__link active_menu_link'>
          <i class="fa-solid fa-house"></i>
          <a id="home" href="#">Home</a>
        </div>
        <h2>PAINEIS</h2>
        <div className='sidebar__link'>  
          <i class="fa-solid fa-chart-simple"></i>
          <a href="#">Faturamento</a>
        </div>
        <div className='sidebar__link'>  
          <i class="fa-solid fa-scroll"></i>
          <a href="#">Guias</a>
        </div>
        <div className='sidebar__link'>  
          <i class="fa-solid fa-user"></i>
          <a href="#">Membros</a>
        </div>
        <div className='sidebar__link'>  
        <i class="fa-solid fa-road"></i>
          <a href="#">Tráfego</a>
        </div>
        <div className='sidebar__link'>  
          <i class="fa-solid fa-dollar-sign"></i>
          <a href="#">Rendimento</a>
        </div>
        <div className='sidebar__link'>  
          {/* <i class="fa-solid fa-dollar-sign"></i> */}
          <a href="#">Padrão</a>
        </div>
        <div className='sidebar__link'>  
          {/* <i class="fa-solid fa-dollar-sign"></i> */}
          <a href="#">Padrão</a>
        </div>
        <div className='sidebar__link'>  
          {/* <i class="fa-solid fa-dollar-sign"></i> */}
          <a href="#">Padrão</a>
        </div>   
      </div>
    </div>
  );
};

export default Sidebar;
