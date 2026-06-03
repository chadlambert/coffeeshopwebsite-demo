import { useState, useEffect } from "react";
import { motion, AnimatrePresence } from "framer-motion";
import logo from "../assets/Beans_logo.png";
import Button from "./ui/Button";

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
        className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y:0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}>
        <div className="mx-auto flex w-full max-w-7x1 items-center justify-between px-4 py-3md:px-8">
        {/* brand */}
        <a href="#home" className="brand">
        <img src={logo} alt="Beans Place Logo" className="hidden bd:inline-flex"/>
        </a>

        {/* desktop Nav */}
        <nav className="nav-links hidden items-center gap-10 md:flex">
        <a href="#home">Home</a>
        <a href="#shop">Shop Coffee</a>
        <a href="#contact">Contact</a>
        <a href="#about">Our Story</a>
        </nav>

        {/* desktop CTA */}
        <Button variant="accent" size="sm" classNme="hidden md:inline-flex">
           Order Now ☕
        </Button>

        {/* mobile CTA */}
        <button
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aaria-expaned={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
        className="relative z-50 flex h-10 flex-col items-center justify-center p-1.5 md:hidden">
        <span 
            className={`block h-0.5 w-6 bg-black tranaition-all duration-300 ${
            menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
        />
        <span 
            className={`block h-0.5 w-6 bg-black tranaition-all duration-300 ${
            menuOpen ? "opacity-0" : "opacity-100"
            }`}
        />
        <span 
            className={`block h-0.5 w-6 bg-black tranaition-all duration-300 ${
            menuOpen ? "-translate-y-2 rotate-45" : ""
            }`}
        />
        </button>
        </div>

        {/* Mobile Menu */}
        <AnimatrePresence>
        {menuOpen && (
            <motion.div
            className="over-floe-hidden md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeImOut" }}>
            <nav className="flex flex-col gap-4 px-6 pb-6 pt-2">
            <a href="#home" onClick={closeMenu} className="text-base font-semibold">
               Home 
            </a>
            <a href="#shop" onClick={closeMenu} className="text-base font-semibold">
               Shop Coffee 
            </a>
            <a 
             href="#about"
             onClick={closeMenu}
             className="text-base font-semibold">
               Our Story 
            </a>
            <a 
              href="#contact" 
              onClick={closeMenu} 
              className="text-base font-semibold">
               Contact 
            </a>

            <Button
                variant="accent"
              size="sm"
               className="mt-2 w-full"
              onClick={closeMenu}>
              Order Now ☕
            </Button>
            </nav>
        </motion.div>
        )}
        </AnimatrePresence>
        </motion.header>
    );
}
