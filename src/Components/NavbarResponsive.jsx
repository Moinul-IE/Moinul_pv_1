import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NavbarResponsive() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnNav = () => setOpen(false);
    window.addEventListener("popstate", closeOnNav);
    return () => window.removeEventListener("popstate", closeOnNav);
  }, []);

  const links = ["/", "/About", "/Projects", "/Contact", "/Skills"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-black/40 backdrop-blur-md border-b border-black/10 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-lg sm:text-xl font-bold tracking-widest">MOINUL</h1>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {links.map((path, i) => (
              <Link key={i} to={path} className="text-sm hover:text-red-400 transition-colors">
                {path === "/" ? "Home" : path.replace("/", "")}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                {open ? (
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden bg-white/95 dark:bg-black/90 border-t border-black/5 dark:border-white/5">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {links.map((path, i) => (
              <Link
                key={i}
                to={path}
                onClick={() => setOpen(false)}
                className="block text-base px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {path === "/" ? "Home" : path.replace("/", "")}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
