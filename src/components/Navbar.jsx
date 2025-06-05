import React from "react";
import { FaUser, FaBook, FaUsers, FaShareAlt, FaTimes } from "react-icons/fa";

const Navbar = ({ isMenuOpen, setIsMenuOpen, toggleMenu }) => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-70 backdrop-blur-lg shadow-md border-b border-white/10">
            <div className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <img
                        className="w-10 h-10 rounded-full shadow-md"
                        src="img/MbLogo.jpeg"
                        alt="MbFitness Logo"
                    />
                    <a href="#home" className="text-[#ffae01] text-xl font-extrabold tracking-wide">
                        MbFitness
                    </a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 text-white text-base font-medium tracking-wide">
                    <a href="#coach" className="hover:text-[#ffae01] transition flex items-center gap-1">
                        <FaUser /> Coach
                    </a>
                    <a href="#program" className="hover:text-[#ffae01] transition flex items-center gap-1">
                        <FaBook /> Programas
                    </a>
                    <a href="#transformation" className="hover:text-[#ffae01] transition flex items-center gap-1">
                        <FaUsers /> Clientes
                    </a>
                    <a href="#comunicate" className="hover:text-[#ffae01] transition flex items-center gap-1">
                        <FaShareAlt /> Síguenos
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div
                    className="md:hidden flex flex-col justify-center items-center space-y-1 cursor-pointer"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    <span className="block w-7 h-0.5 bg-white rounded-sm"></span>
                    <span className="block w-7 h-0.5 bg-white rounded-sm"></span>
                    <span className="block w-7 h-0.5 bg-white rounded-sm"></span>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed top-[64px] left-0 w-full h-[calc(100vh-64px)] z-40 bg-black bg-opacity-90 backdrop-blur-xl transition-all duration-500 ease-in-out ${isMenuOpen
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 -translate-y-6 pointer-events-none'
                    }`}
            >

                <div className="relative w-full h-full flex flex-col items-center justify-center space-y-10 px-6">
                    {/* Botón cerrar */}
                    <button
                        className="absolute top-6 right-6 text-white text-3xl hover:text-[#ffae01] transition"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Cerrar menú"
                    >
                        <FaTimes />
                    </button>

                    {/* Enlaces del menú */}
                    {[
                        { href: "#coach", icon: <FaUser />, label: "Coach" },
                        { href: "#program", icon: <FaBook />, label: "Programas" },
                        { href: "#transformation", icon: <FaUsers />, label: "Clientes" },
                        { href: "#comunicate", icon: <FaShareAlt />, label: "Síguenos" },
                    ].map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-white text-2xl font-bold hover:text-[#ffae01] transition flex items-center gap-3"
                        >
                            {item.icon} {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
