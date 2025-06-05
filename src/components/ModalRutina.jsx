import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const ModalRutina = ({ closeModal }) => {
    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#1b1d23] text-white p-8 rounded-3xl shadow-2xl border border-white/10"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Botón de cerrar */}
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-6 text-white text-2xl hover:text-[#ffae01] transition"
                    >
                        <FaTimes />
                    </button>

                    <h1 className="text-3xl font-bold text-[#ffae01] mb-4 text-center">
                        Rutina Online
                    </h1>

                    <p className="text-white/80 text-center mb-6">
                        Recibe una rutina diseñada exclusivamente para ti, sin importar dónde estés.
                    </p>

                    {/* Video */}
                    <div className="mb-8">
                        <video controls className="w-full rounded-xl shadow-lg border border-white/10">
                            <source src="/Videos/Rutinas.MP4" type="video/mp4" />
                            Tu navegador no soporta el video.
                        </video>
                    </div>

                    {/* Botón de contacto */}
                    <div className="text-center">
                        <a
                            href="https://wa.me/17874231472?text=Hola%2C%20quiero%20mi%20rutina%20online%20personalizada!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#ffae01] text-[#1b1d23] font-bold px-8 py-3 rounded-xl hover:bg-[#9a0021] hover:text-white transition duration-300"
                        >
                            Me interesa
                        </a>
                    </div>

                    {/* Botón de cerrar */}
                    <div className="mt-10 text-center">
                        <button
                            onClick={closeModal}
                            className="px-8 py-3 bg-[#9a0021] hover:bg-[#ffae01] hover:text-[#1b1d23] text-white font-bold rounded-xl transition duration-300"
                        >
                            Cerrar
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ModalRutina;
