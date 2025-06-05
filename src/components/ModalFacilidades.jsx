import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const ModalFacilidades = ({ closeModal }) => {
    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center backdrop-blur-sm px-4">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#1b1d23] text-white p-8 shadow-2xl border border-white/10"
            >
                {/* Botón Cerrar */}
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-6 text-white text-2xl hover:text-[#ffae01] transition"
                >
                    <FaTimes />
                </button>

                <h1 className="text-3xl font-bold text-[#ffae01] mb-6 text-center">
                    Facilidades de MbFitness
                </h1>
                <p className="text-white/80 text-center mb-10">
                    Conoce nuestras facilidades, su ubicación, y cómo llegar fácilmente.
                </p>

                {/* Sección: Gimnasio */}
                <div className="mb-10 grid md:grid-cols-2 gap-6 items-center bg-white/10 p-6 rounded-xl shadow-md">
                    <img
                        src="img/gym.jpg"
                        alt="Gimnasio"
                        className="w-full rounded-xl object-cover h-60"
                    />
                    <div>
                        <h2 className="text-xl font-semibold text-[#ffc94b] mb-2">Nuestras Facilidades</h2>
                        <p className="mb-2 text-white/90">Contamos con equipos en excelentes condiciones.</p>
                        <a
                            href="https://www.instagram.com/reel/C7pvWCDu8EH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 underline hover:text-blue-300"
                        >
                            Ver video del gym
                        </a>
                    </div>
                </div>

                {/* Sección: Ubicación física */}
                <div className="mb-10 grid md:grid-cols-2 gap-6 items-center bg-white/10 p-6 rounded-xl shadow-md">
                    <img
                        src="img/cambiar.jpeg"
                        alt="Ubicación"
                        className="w-full rounded-xl object-cover h-60"
                    />
                    <div>
                        <h2 className="text-xl font-semibold text-[#ffc94b] mb-2">¿Dónde estamos ubicados?</h2>
                        <p className="mb-2 text-white/90">Estamos ubicados en Carolina, Puerto Rico.</p>
                        <a
                            href="https://www.instagram.com/reel/C7vL1iptYRZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 underline hover:text-blue-300"
                        >
                            Ver video explicativo
                        </a>
                    </div>
                </div>

                {/* Sección: Google Maps */}
                <div className="grid md:grid-cols-2 gap-6 items-center bg-white/10 p-6 rounded-xl shadow-md">
                    <img
                        src="img/fitzone.png"
                        alt="Mapa"
                        className="w-full rounded-xl object-cover h-60"
                    />
                    <div>
                        <h2 className="text-xl font-semibold text-[#ffc94b] mb-2">Ubicación en Google Maps</h2>
                        <a
                            href="https://maps.app.goo.gl/SbpV3mdog31JJjme6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 underline hover:text-blue-300"
                        >
                            Haz click para ver la ubicación
                        </a>
                        <p className="mt-2 text-white/90">¡Vive la experiencia completa! ¡Nuestro gimnasio te espera!</p>
                    </div>
                </div>

                {/* Botón final */}
                <div className="mt-10 text-center">
                    <button
                        onClick={closeModal}
                        className="px-8 py-3 bg-[#9a0021] hover:bg-[#ffae01] hover:text-[#1b1d23] text-white font-bold rounded-xl transition duration-300"
                    >
                        Cerrar
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default ModalFacilidades;
