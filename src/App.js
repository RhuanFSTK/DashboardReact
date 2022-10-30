import {useState} from 'react';

import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import Main from './components/main/main';

import './App.css';

const App = () => {
  
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="App">
      <Navbar sidebarOpen = {sidebarOpen} openSidebar = {openSidebar}/>
      <Sidebar sidebarOpen = {sidebarOpen} closeSidebar = {closeSidebar}/>
      <Main/>
    </div>
  );
  
};

export default App;
