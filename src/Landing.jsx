import React, { useState, useEffect } from 'react';
import { FaUser, FaBook, FaUsers, FaShareAlt, FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";



const Landing = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [activeImage, setActiveImage] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () =>
        setIsMenuOpen(!isMenuOpen);
    const [activeIndex, setActiveIndex] = useState(2); // Asumiendo que la tercera foto es la activa por defecto.

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % 5); // Cambia de foto y vuelve a la primera al llegar al final
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + 5) % 5); // Retrocede y vuelve a la última al llegar al inicio
    };




    const clients = [
        {
            img: "img/said1.png",
            name: "Eduardo",
            feedback:
                "Alcancé mi objetivo y estoy 100% satisfecho, las rutinas personalizadas del Coach y las facilidades de Mbfitness transformaron mi manera de vivir.",
        },
        {
            img: "img/said2.png",
            name: "Natalia Solis",
            feedback:
                "La transformación en mi estilo de vida fue posible gracias a las rutinas individualizadas del Coach y los recursos de Mbfitness, logrando mis metas y sintiéndome plenamente satisfecha.",
        },
        {
            img: "img/said3.png",
            name: "Jose Falero",
            feedback:
                "Gracias a las rutinas personalizadas del Coach y las facilidades de Mbfitness, mejoré significativamente mi rendimiento deportivo y alcancé mis metas con total satisfacción.",
        },
    ];

    const images = [
        '/images/Dori.png',
        '/images/oriela.png',
        '/images/jeanHoodie.png',
        '/images/gymWear.png',
        '/images/accesories.png',
    ];

    const openModal = (index) => {
        setActiveImage(index);
        setModalOpen(true);
    };



    const closeModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        // Image Slideshow interval
        const interval = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);
    const transformations = [
        { before: "img/NelsonBefore.jpg", after: "img/NelsonAfter.jpg" },
        { before: "img/clienteAntes.jpg", after: "img/ClienteDespues.jpg" },
        { before: "img/EduardBefore.jpg", after: "img/EduardoAfter.jpg" },
        { before: "img/Natalia Before.jpg", after: "img/said2.png" },
    ];


    const [visibleSides, setVisibleSides] = useState(
        new Array(transformations.length).fill("before")
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleSides((prevSides) =>
                prevSides.map((side) => (side === "before" ? "after" : "before"))
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='bg-[#2b2e35]'>
            <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md shadow-lg z-50">
                <div className="flex items-center justify-between px-6 py-4">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img
                            className="w-12 h-12 rounded-full mr-4"
                            src="img/MbLogo.jpeg"
                            alt="MbFitness Logo"
                        />
                        <a href="#home" className="text-[#ffae01] text-xl font-bold">
                            MbFitness
                        </a>
                    </div>

                    {/* Menu (Desktop) */}
                    <div className="hidden md:flex space-x-8 text-white text-lg font-medium">
                        <a href="#coach" className="hover:text-[#9a0021] transition-colors flex items-center gap-2">
                            <FaUser /> Coach
                        </a>
                        <a href="#program" className="hover:text-[#9a0021] transition-colors flex items-center gap-2">
                            <FaBook /> Programas
                        </a>
                        <a href="#transformation" className="hover:text-[#9a0021] transition-colors flex items-center gap-2">
                            <FaUsers /> Clientes
                        </a>
                        <a href="#comunicate" className="hover:text-[#9a0021] transition-colors flex items-center gap-2">
                            <FaShareAlt /> Siguenos
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div
                        className="md:hidden flex flex-col justify-center items-center cursor-pointer"
                        onClick={toggleMenu}
                    >
                        <span className="block w-8 h-1 bg-white mb-1"></span>
                        <span className="block w-8 h-1 bg-white mb-1"></span>
                        <span className="block w-8 h-1 bg-white"></span>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden ${isMenuOpen ? "block" : "hidden"
                        } absolute top-0 left-0 w-full h-screen bg-black bg-opacity-80 backdrop-blur-md shadow-lg z-50 flex flex-col items-center space-y-4 py-4`}
                >
                    {/* Botón para cerrar el menú */}
                    <button
                        className="absolute top-4 right-6 text-white text-2xl"
                        onClick={() => setIsMenuOpen(false)} // Cambia el estado para cerrar el menú
                    >
                        <FaTimes />
                    </button>


                    <a
                        href="#coach"
                        className="text-white text-lg font-medium hover:text-[#ffae01] transition-colors flex items-center gap-2"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <FaUser /> Coach
                    </a>
                    <a
                        href="#program"
                        className="text-white text-lg font-medium hover:text-[#ffae01] transition-colors flex items-center gap-2"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <FaBook /> Programas
                    </a>
                    <a
                        href="#transformation"
                        className="text-white text-lg font-medium hover:text-[#ffae01] transition-colors flex items-center gap-2"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <FaUsers /> Clientes
                    </a>
                    <a
                        href="#comunicate"
                        className="text-white text-lg font-medium hover:text-[#ffae01] transition-colors flex items-center gap-2"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <FaShareAlt /> Siguenos
                    </a>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="h-screen bg-cover bg-center flex items-center justify-center filter brightness-100" style={{ backgroundImage: 'url("img/pexels-photo-841130.jpeg")' }}>
                {/* Sticky Navbar */}


                {/* Overlay for contrast */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Text Content */}
                <div className="relative text-center text-white flex flex-col items-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white">
                        Entrena Inteligente
                    </h1>
                    <h1 className="text-4xl md:text-6xl font-bold text-white">
                        Vive Mejor
                    </h1>
                </div>
            </div>


            {/* About Us Section with Transition */}
            <section id="coach">


                <div
                    id="about-us"
                    className="flex flex-col items-center px-8 py-16 opacity-100 transform translate-y-0 transition-all duration-1000"
                >
                    {/* Centered Image */}
                    <div className="w-full flex justify-center mb-8">
                        <img
                            src="img/KoalaCoach2.JPG"
                            alt="Sobre nosotros"
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Text with Red Background */}
                    <div className="w-full max-w-2xl bg-[#ffae01] text-white p-4 md:p-6 rounded-md shadow-lg relative overflow-hidden rounded-lg">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-black">
                            Alexander Falero Prieto 'Koala'
                        </h2>
                        <p className="text-lg leading-relaxed">
                            {/* Hidden and Visible Text */}
                            <span id="short-text" className="block">
                                Entrenador personal con un Bachillerato en ciencias del ejercicio. Licenciado por el Departamento de Recreación y Deportes....
                            </span>
                            <span
                                id="full-text"
                                className="block transition-max-height duration-500 ease-in-out overflow-hidden max-h-0"
                                style={{ maxHeight: 0 }}
                            >
                                Posee una especialización en balonmano respaldada por más de diez años de experiencia como jugador y la formación de alrededor de seis equipos. Demuestra su profundo compromiso con este deporte. Además, posee una certificación en entrenamiento para niños lo que asegura que sus métodos sean seguros y efectivos para todas las edades. Su enfoque se centra en proporcionar rutinas personalizadas que desafíen a sus clientes a salir de su zona de confort y mejorar su bienestar general. Confía en su experiencia y preparación para guiarte hacia una vida más saludable y activa. ¡Comienza tu transformación hoy!
                            </span>
                        </p>
                        {/* Leer más Button */}
                        <button
                            className="mt-4 px-4 py-2 bg-white text-[#040507] rounded-lg font-semibold hover:bg-[#040507] hover:text-white transition"
                            id="read-more-btn"
                            onClick={() => {
                                const fullText = document.getElementById("full-text");
                                const button = document.getElementById("read-more-btn");

                                if (fullText.style.maxHeight === "0px" || !fullText.style.maxHeight) {
                                    fullText.style.maxHeight = fullText.scrollHeight + "px"; // Expand text
                                    button.textContent = "Leer menos";
                                } else {
                                    fullText.style.maxHeight = "0px"; // Collapse text
                                    button.textContent = "Leer más";
                                }
                            }}
                        >
                            Leer más
                        </button>
                    </div>

                </div>
            </section>

            <section id="program">
                {/* Rectangular Images Section */}
                <div className="w-full h-5/6">
                    <h2 className="text-4xl font-bold text-center text-[#ffae01] mb-8 pt-16">
                        Vence tus excusas
                    </h2>
                    <p className="font-bold text-center text-white mb-8 ">Es hora de dar paso a la acción. Con mi guía y tu compromiso, alcanzaremos tus metas
                        juntos</p>
                    <h3 className=" text-xl font-bold text-center text-[#ffae01] mb-8">¡Comienza ahora!</h3>
                    <div className="flex gap-10 px-8 overflow-x-auto scroll-smooth">
                        {[
                            { src: 'img/Entrenamiento Personal.JPG', label: 'Entrenamiento Personal', message: 'Explora los diferentes paquetes que ofrecemos.' },
                            { src: 'img/br2.webp', label: 'Bootcamps', message: 'Entrena al aire libre.' },
                            { src: 'img/EntrenaHogar.JPG', label: 'Entrena en tu hogar', message: 'Entrena en la comodidad de tu hogar.' },
                            { src: 'img/Facilidades.JPG', label: 'Entrena en nuestras facilidades', message: 'Donde nos encontramos.' },
                            { src: 'img/KoalaCoach1.JPG', label: 'Adquiere una rutina', message: 'Obtén tu rutina online' },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="relative flex-shrink-0 w-96 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500"
                                tabIndex="0"
                                onClick={() => openModal(index)}
                            >
                                <img
                                    src={item.src}
                                    alt={item.label}
                                    className="w-full h-96 object-cover transition-transform duration-500 filter brightness-75"
                                />
                                <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-md shadow-md opacity-100">
                                    <span className="text-lg font-semibold">{item.label}</span>
                                </div>

                                {/* Full-width shadow covering bottom */}
                                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white px-4 py-4 shadow-md opacity-100 text-center rounded-b-lg">
                                    <p className="text-sm">{item.message}</p>
                                    <button
                                        className="mt-4 px-4 py-2 bg-[#ffae01] text-[#040507] rounded-lg font-semibold hover:bg-[#9a0021] hover:text-white transition"
                                    >
                                        Me interesa
                                    </button>
                                </div>
                            </div>

                        ))}

                    </div>
                </div>


                {/* Modal Section */}
                {modalOpen && activeImage === 0 && (

                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <span className="close cursor-pointer text-3xl text-white absolute top-4 right-4" onClick={closeModal}>
                            &times;
                        </span>
                        <div className="bg-black p-8 rounded-lg shadow-lg max-w-4xl w-full overflow-y-auto max-h-[90vh]">
                            <h3 className="text-2xl font-bold mb-6 text-center">Nuestros Paquetes</h3>


                            {/* Package Information */}
                            <div className="flex flex-col flex justify-center items-center ">


                                {/* Package 1 */}
                                <div className="package-wrapper mt-12 flex flex-wrap gap-8 justify-center w-full sm:w-full md:w-1/2">
                                    <div className="package-card p-8 bg-white shadow-2xl rounded-3xl w-full sm:w-full md:w-1/2 lg:w-1/3 box-border flex-1 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                                        <h1 className="text-3xl font-extrabold text-black mb-4">1 PERSONA</h1>
                                        <h2 className="text-xl font-semibold text-red-500 mb-6">$35 Por Sesión</h2>
                                        <div className="package-p flex flex-col text-sm text-black">
                                            <p className="flex items-center mb-4">
                                                <i className="fas fa-check-square mr-2 text-green-500"></i> Entrenamiento Personal
                                            </p>
                                            <p className="flex items-center mb-4">
                                                <i className="fas fa-check-square mr-2 text-green-500"></i> Monitoreo Continuo
                                            </p>
                                            <p className="flex items-center mb-4">
                                                <i className="fas fa-check-square mr-2 text-green-500"></i> Acceso a rutinas extras
                                            </p>
                                            <h3 className="font-semibold text-red-500 mt-4 text-3xl mb-4">GRATIS</h3>
                                            <p className="flex items-center mb-4">
                                                <i className="fas fa-check-square mr-2 text-green-500"></i> Evaluación Física
                                            </p>
                                            <p className="flex items-center mb-4">
                                                <i className="fas fa-check-square mr-2 text-green-500"></i> Prueba Física Inicial
                                            </p>
                                            <p className="flex items-center mb-4">
                                                <i className="fas fa-check-square mr-2 text-green-500"></i> Prueba Trimestral
                                            </p>
                                        </div>
                                        <button
                                            className="package-btn w-full mt-6 px-6 py-3 bg-[#ffae01] text-white rounded-lg text-lg font-bold shadow-lg transform transition-transform duration-300 hover:bg-[#9a0021] hover:scale-105"
                                            onClick={() => window.open('https://wa.me/17874231472?text=Me%20interesa%20el%20plan%20de%201%20persona', '_blank')}
                                        >
                                            <i className="fa-brands fa-whatsapp mr-2"></i> Me interesa
                                        </button>
                                    </div>
                                </div>




                                {/* Package 2 */}
                                <div className="package-wrapper mt-12 flex flex-wrap gap-8 justify-center w-full sm:w-full md:w-1/2">
                                    <div className="package-card p-8 bg-white shadow-2xl rounded-3xl w-full sm:w-full md:w-1/2 lg:w-1/3 box-border flex-1 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                                        <h1 className="text-3xl font-bold text-black mb-4">2 PERSONAS</h1>
                                        <h2 className="text-lg font-semibold text-red-500 mb-6">$50 Por Sesión</h2>
                                        <div className="package-p flex flex-col text-sm text-black">
                                            <p className="flex items-center mb-4">
                                                <i className="fas fa-check-square mr-2 text-green-500"></i> Entrenamiento Personal
                                            </p>
                                            <p className="flex items-center mb-4">
                                                <i className="fas fa-check-square mr-2 text-green-500"></i> Monitoreo Continuo
                                            </p>
                                            <p className="flex items-center mb-4">
                                                <i className="fas fa-check-square mr-2 text-green-500"></i> Acceso a rutinas extras
                                            </p>
                                            <h3 className="font-semibold text-red-500 mt-4 text-3xl mb-4">GRATIS</h3>
                                            <p className="flex items-center mb-4">
                                                <i className="fas fa-check-square mr-2 text-green-500"></i> Evaluación Física
                                            </p>
                                            <p className="flex items-center mb-4">
                                                <i className="fas fa-check-square mr-2 text-green-500"></i> Prueba Física Inicial
                                            </p>
                                            <p className="flex items-center mb-4">
                                                <i className="fas fa-check-square mr-2 text-green-500"></i> Prueba Trimestral
                                            </p>
                                        </div>
                                        <button
                                            className="package-btn w-full mt-6 px-6 py-3 bg-[#ffae01] text-white rounded-lg text-lg font-semibold shadow-lg transform transition-transform duration-300 hover:bg-[#9a0021] hover:scale-105"
                                            onClick={() => window.open('https://wa.me/17874231472?text=Me%20interesa%20el%20plan%20de%202%20personas', '_blank')}
                                        >
                                            <i className="fa-brands fa-whatsapp mr-2"></i> Me interesa
                                        </button>
                                    </div>
                                </div>


                                {/* Package 3 */}
                                <div className="package-wrapper mt-12 flex flex-wrap gap-8 justify-center w-full sm:w-full md:w-1/2">
                                    <div className="package-card p-8 bg-white shadow-2xl rounded-3xl w-full sm:w-full md:w-1/2 lg:w-1/3 box-border flex-1 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                                        <h1 className="text-3xl font-bold text-black mb-4">3 PERSONAS</h1>
                                        <h2 className="text-lg font-semibold text-red-500 mb-6">$60 Por Sesión</h2>
                                        <div className="package-p flex flex-col text-sm text-black">
                                            <p className="flex items-center mb-4">
                                                <i className="fas fa-check-square mr-2 text-green-500"></i> Entrenamiento Personal
                                            </p>
                                            <p className="flex items-center mb-4">
                                                <i className="fas fa-check-square mr-2 text-green-500"></i> Monitoreo Continuo
                                            </p>
                                            <p className="flex items-center mb-4">
                                                <i className="fas fa-check-square mr-2 text-green-500"></i> Acceso a rutinas extras
                                            </p>
                                            <h3 className="font-semibold text-red-500 mt-4 text-3xl mb-4">GRATIS</h3>
                                            <p className="flex items-center mb-4">
                                                <i className="fas fa-check-square mr-2 text-green-500"></i> Evaluación Física
                                            </p>
                                            <p className="flex items-center mb-4">
                                                <i className="fas fa-check-square mr-2 text-green-500"></i> Prueba Física Inicial
                                            </p>
                                            <p className="flex items-center mb-4">
                                                <i className="fas fa-check-square mr-2 text-green-500"></i> Prueba Trimestral
                                            </p>
                                        </div>
                                        <button
                                            className="package-btn w-full mt-6 px-6 py-3 bg-[#ffae01] text-white rounded-lg text-lg font-semibold shadow-lg transform transition-transform duration-300 hover:bg-[#9a0021] hover:scale-105"
                                            onClick={() => window.open('https://wa.me/17874231472?text=Me%20interesa%20el%20plan%20de%203%20personas', '_blank')}
                                        >
                                            <i className="fa-brands fa-whatsapp mr-2"></i> Me interesa
                                        </button>
                                    </div>
                                </div>

                            </div>
                            <button
                                onClick={closeModal}
                                className="mt-8 px-4 py-2 bg-[#9a0021] text-white rounded-lg w-full"
                            >
                                Cerrar
                            </button>
                            {/* Close Button */}

                        </div>


                    </div>

                )}
                {modalOpen && activeImage === 1 && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-black p-8 rounded-lg shadow-lg w-96 overflow-y-auto max-h-[90vh] relative">
                            {/* Close Button */}
                            <span
                                className="cursor-pointer text-2xl text-white absolute top-2 right-4"
                                onClick={closeModal}
                            >
                                &times;
                            </span>

                            {/* Modal Content */}
                            <div className="bootcamp-desc">
                                <h1 className="text-xl font-bold mb-4 text-[#9a0021]">Beach Bootcamp</h1>
                                <h2 className="text-lg font-semibold mb-4 text-[#ffae01]">$50 Por Sesión</h2>
                                <p className="text-white mb-2">
                                    ¡Transforma tus sábados con nuestros Bootcamps!
                                </p>
                                <p className="text-white mb-2">
                                    Vive una experiencia cada sábado en la Playa Último Trolley. Sal de tu zona de
                                    comfort, ejercítate y conecta con personas increíbles.
                                </p>
                                <p className="text-white mb-4">¡No te lo pierdas!</p>

                                <button
                                    className="mt-4 px-4 py-2 bg-[#ffae01] text-[#040507] rounded-lg font-semibold hover:bg-[#9a0021] hover:text-white transition"
                                    onClick={() =>
                                        window.open(
                                            "https://wa.me/17874231472?text=Hola%2C%20me%20interesa%20el%20bootcamp%20playero!",
                                            "_blank"
                                        )
                                    }
                                >
                                    Me interesa
                                </button>

                                {/* Location Section */}
                                <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                                    <div className="flex items-center gap-4">
                                        <div className="text-[#ffae01] text-2xl">
                                            <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                                        </div>
                                        <img
                                            className="w-24 h-24 object-cover rounded-md border-2 border-[#ffae01]"
                                            src="img/ultimoT.jpeg"
                                            alt="Ubicación"
                                        />
                                        <div className="text-[#2b2e35]">
                                            <h3 className="font-bold">Ubicación Último Trolley</h3>
                                            <a
                                                href="https://maps.app.goo.gl/ytq4enfcB5p78TG89"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#9a0021] underline"
                                            >
                                                Haz click para la ubicación
                                            </a>
                                            <p className="text-sm">
                                                Aquí la ubicación en Google de donde estamos! ¡Para que no te pierdas de nada!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Close Modal Button */}
                            <button
                                onClick={closeModal}
                                className="mt-8 px-4 py-2 bg-[#9a0021] text-white rounded-lg w-full font-semibold hover:bg-[#ffae01] hover:text-[#040507] transition"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>

                )}
                {modalOpen && activeImage === 2 && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-black p-8 rounded-lg shadow-lg w-96 overflow-y-auto max-h-[90vh]">
                            <span className="close cursor-pointer text-xl absolute top-2 right-2" onClick={closeModal}>
                                &times;
                            </span>

                            <div className="program-detail">
                                <p>Obtén tu rutina online</p>

                                {/* Directly showing the video in the modal */}
                                <video controls className="w-full mt-4">
                                    <source src="/Videos/hogar.MP4" type="video/mp4" />
                                    Tu navegador no soporta el video.
                                </video>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="mt-8 px-4 py-2 bg-[#9a0021] text-white rounded-lg w-full"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>


                )}


                {modalOpen && activeImage === 3 && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-black p-8 rounded-lg shadow-lg w-96 overflow-y-auto max-h-[90vh]">
                            <span className="close cursor-pointer text-xl absolute top-2 right-2" onClick={closeModal}>
                                &times;
                            </span>

                            {/* Contenido del modal */}
                            <div className="program-detail">
                                <p>Donde nos encontramos</p>
                                {/* <button
                                onClick={() => window.open("https://www.instagram.com/reel/C7pvWCDu8EH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", "_blank")}
                                className="w-full py-2 mt-4 bg-blue-500 text-white rounded-lg"
                            >
                                Información
                            </button> */}

                                {/* Modal de detalles de las instalaciones */}
                                <div className="gym-wrapper mt-4">
                                    {/* Nuestras Facilidades */}
                                    <div className="gym-click mb-4 bg-[#ffae01]">
                                        <div className="gym-card border p-4 rounded-lg shadow-lg">
                                            <div className="gym-icons mb-2">
                                                <i className="fa fa-external-link" aria-hidden="true"></i>
                                            </div>
                                            <img
                                                className="gym-img w-full h-auto rounded-lg"
                                                src="img/gym.jpg"
                                                alt="Nuestras Facilidades"
                                            />
                                            <div className="gym-detail mt-2">
                                                <h3 className="text-xl font-bold">Nuestras Facilidades</h3>
                                                <a
                                                    href="https://www.instagram.com/reel/C7pvWCDu8EH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                                                    className="text-blue-500"
                                                >
                                                    Mbfitness Gym
                                                </a>
                                                <p>Contamos con equipos en excelentes condiciones.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ¿Dónde estamos ubicados? */}
                                    <div className="gym-click mb-4 bg-[#ffae01]">
                                        <div className="gym-card border p-4 rounded-lg shadow-lg">
                                            <div className="gym-icons mb-2">
                                                <i className="fa fa-external-link" aria-hidden="true"></i>
                                            </div>
                                            <img
                                                className="gym-img w-full h-auto rounded-lg"
                                                src="img/cambiar.jpeg"
                                                alt="Donde estamos Ubicados?"
                                            />
                                            <div className="gym-detail mt-2">
                                                <h3 className="text-xl font-bold">¿Dónde estamos ubicados?</h3>
                                                <a
                                                    href="https://www.instagram.com/reel/C7vL1iptYRZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                                                    className="text-blue-500"
                                                >
                                                    Haz click para el video
                                                </a>
                                                <p>
                                                    Estamos ubicados en Carolina. Haz clic para ver un video
                                                    explicándote dónde estamos y empieza a mejorar tu vida.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Ubicación en Google */}
                                    <div className="gym-click mb-4 bg-[#ffae01]">
                                        <div className="gym-card border p-4 rounded-lg shadow-lg">
                                            <div className="gym-icons mb-2">
                                                <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                                            </div>
                                            <img
                                                className="gym-img w-full h-auto rounded-lg"
                                                src="img/fitzone.png"
                                                alt="Ubicacion en Google"
                                            />
                                            <div className="gym-detail mt-2">
                                                <h3 className="text-xl font-bold">Ubicacion en Google</h3>
                                                <a
                                                    href="https://maps.app.goo.gl/SbpV3mdog31JJjme6"
                                                    className="text-blue-500"
                                                >
                                                    Haz click para la ubicación
                                                </a>
                                                <p>¡Vive la experiencia completa! ¡Nuestro gimnasio te espera!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Botón para cerrar el modal */}
                            <button
                                onClick={closeModal}
                                className="mt-8 px-4 py-2 bg-[#9a0021] text-white rounded-lg w-full"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>

                )}
                {modalOpen && activeImage === 4 && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-black p-8 rounded-lg shadow-lg w-96 overflow-y-auto max-h-[90vh]">
                            <span className="close cursor-pointer text-xl absolute top-2 right-2" onClick={closeModal}>
                                &times;
                            </span>

                            <div className="program-detail">
                                <p>Obtén tu rutina online</p>

                                {/* Directly showing the video in the modal */}
                                <video controls className="w-full mt-4">
                                    <source src="Videos/Rutinas.MP4" type="video/mp4" />
                                    Tu navegador no soporta el video.
                                </video>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="mt-8 px-4 py-2 bg-[#9a0021] text-white rounded-lg w-full"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>

                )}
                <div className="relative">
                    {/* Aquí estarían tus fotos, ahora solo agrego las flechas y bolitas */}
                    <div className="indicators flex items-center justify-center space-x-2 py-8">
                        {/* Flecha izquierda */}
                        <i
                            onClick={prevSlide}
                            className="fas fa-angle-double-left text-yellow-500 cursor-pointer"
                        ></i>

                        {/* Indicadores */}
                        <div
                            className={`scroll-indicator ${activeIndex === 0 ? "bg-gray-300" : "bg-gray-300"} w-3 h-3 rounded-full cursor-pointer`}
                            onClick={() => setActiveIndex(0)}
                        ></div>
                        <div
                            className={`scroll-indicator ${activeIndex === 1 ? "bg-gray-300" : "bg-gray-300"} w-3 h-3 rounded-full cursor-pointer`}
                            onClick={() => setActiveIndex(1)}
                        ></div>
                        <div
                            className={`scroll-indicator ${activeIndex === 2 ? "bg-gray-300" : "bg-gray-300"} w-3 h-3 rounded-full cursor-pointer`}
                            onClick={() => setActiveIndex(2)}
                        ></div>
                        <div
                            className={`scroll-indicator ${activeIndex === 3 ? "bg-gray-300" : "bg-gray-300"} w-3 h-3 rounded-full cursor-pointer`}
                            onClick={() => setActiveIndex(3)}
                        ></div>
                        <div
                            className={`scroll-indicator ${activeIndex === 4 ? "bg-gray-300" : "bg-gray-300"} w-3 h-3 rounded-full cursor-pointer`}
                            onClick={() => setActiveIndex(4)}
                        ></div>

                        {/* Flecha derecha */}
                        <i
                            onClick={nextSlide}
                            className="fas fa-angle-double-right text-yellow-500 cursor-pointer"
                        ></i>
                    </div>
                </div>
            </section>
            <section id="transformation">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold py-16 text-[#ffae01]">
                        Transformaciones en el programa
                    </h2>
                </div>
                {/* Wrapper for horizontal scroll */}
                <div className="flex overflow-x-auto space-x-8 pb-4 px-4">
                    {transformations.map((image, index) => (
                        <div
                            key={index}
                            className="relative w-80 h-80 overflow-hidden rounded-lg shadow-lg flex-shrink-0"
                        >
                            <img
                                src={
                                    visibleSides[index] === "before" ? image.before : image.after
                                }
                                alt={`Transformation ${index + 1}`}
                                className="w-full h-full object-cover transition-opacity duration-1000"
                            />
                        </div>
                    ))}
                </div>
            </section>

            <div className="py-16 px-8 flex flex-col md:flex-row items-center justify-center">
                {/* Título centrado al lado de los recuadros */}
                <div className="flex flex-col justify-center w-full md:w-1/3 md:pr-8 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#ffae01]">
                        Mira lo que dicen nuestros Clientes
                    </h2>
                </div>

                {/* Recuadros a la derecha */}
                <div className="w-full md:w-2/3 space-y-8 mt-8 md:mt-0">
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row bg-[#ffae01] shadow-lg rounded-lg p-6"
                        >
                            {/* Imagen en responsive */}
                            <div className="flex md:block items-start md:items-center w-full md:w-auto">
                                <img
                                    src={client.img}
                                    alt={client.name}
                                    className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover shadow-md mb-2 md:mb-0 md:mr-6"
                                />
                            </div>

                            {/* Información */}
                            <div className="flex flex-col text-left w-full">
                                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">
                                    {client.name}
                                </h3>
                                <p className="text-sm md:text-base text-white">{client.feedback}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <section className="bg-[#2b2e35] w-full min-h-[60vh] py-4 flex flex-wrap items-start" id="comunicate">
                <div className="subscribe flex-1 min-h-full px-4 text-white border-r border-white">
                    <div className="title text-3xl font-bold mb-4">Subscríbete</div>
                    <p className="tracking-wide mb-4">
                        Subcríbete para obtener acceso a todas nuestras ofertas y promociones especiales en Mbfitness.
                        ¡Somos la mejor opción para alcanzar tus metas!
                    </p>

                    <h4 className="mb-4">Reserva tu espacio. Puedes comunicarte con nosotros haciendo click en cualquiera.</h4>

                    <div className="social-media flex flex-wrap">
                        <a
                            className="instagram w-16 h-16 text-white text-2xl flex items-center justify-center mr-5 hover:text-[#E1306C] transition-colors"
                            href="https://www.instagram.com/mbfitnesspr"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a
                            className="tiktok w-16 h-16 text-white text-2xl flex items-center justify-center mb-5 mr-5 hover:text-[#69C9D0] transition-colors"
                            href="https://www.tiktok.com/@alexanderfaleropr"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faTiktok} />
                        </a>
                        <a
                            className="facebook w-16 h-16 text-white text-2xl flex items-center justify-center mb-5 mr-5 hover:text-[#1877F2] transition-colors"
                            href="https://www.facebook.com/share/mBChHfVZM39wpGre/?mibextid=LQQJ4d"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <h3 className="text-xl">(787) 423-1472</h3>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Landing;

