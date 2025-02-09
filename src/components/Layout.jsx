// src/components/Layout.jsx

import { Outlet } from "react-router-dom";
import Header from './Header';
import Footer from "../pages/Footer/Footer";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
