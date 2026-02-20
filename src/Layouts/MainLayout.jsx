import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function MainLayout() {
  // Admin functionality removed (frontend-only project)
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      
  {/* Navbar */}
  <Navbar />

      {/* Page Content */}
      <main className="pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* Admin/Login modal removed — project is frontend-only now. */}
    </div>
  );
}
