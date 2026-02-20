import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  

  // Check localStorage on mount
   



  return (
    <nav className="fixed top-0 left-0 w-full z-50
      bg-white/70 dark:bg-black/40 backdrop-blur-md
      border-b border-black/10 dark:border-white/10
      px-8 py-4 flex justify-between items-center
      transition-colors duration-300"
    >
      <h1 className="text-xl font-bold tracking-widest">MOINUL</h1>

      <ul className="flex gap-8 mx-auto">
        {["/", "/About", "/Projects", "/Contact", "/Skills"].map((path, i) => (
          <li key={i}>
            <Link
              to={path}
              className="hover:text-red-400 transition-colors"
            >
              {path === "/" ? "Home" : path.replace("/", "")}
            </Link>
          </li>
        ))}
      </ul>

     
    </nav>
  );
}
