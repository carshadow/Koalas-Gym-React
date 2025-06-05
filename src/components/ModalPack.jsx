import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const ModalPack = ({ closeModal }) => {
    const packages = [
        {
            title: "1 PERSONA",
            price: "$35 Por Sesión",
            whatsapp: "https://wa.me/17874231472?text=Me%20interesa%20el%20plan%20de%201%20persona"
        },
        {
            title: "2 PERSONAS",
            price: "$50 Por Sesión",
            whatsapp: "https://wa.me/17874231472?text=Me%20interesa%20el%20plan%20de%202%20personas"
        },
        {
            title: "3 PERSONAS",
            price: "$60 Por Sesión",
            whatsapp: "https://wa.me/17874231472?text=Me%20interesa%20el%20plan%20de%203%20personas"
        },
    ];

    const features = [
        "Entrenamiento Personal",
        "Monitoreo Continuo",
        "Acceso a rutinas extras",
        "Evaluación Física",
        "Prueba Física Inicial",
        "Prueba Trimestral"
    ];

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    className="relative bg-[#1b1d23] p-8 rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-white/10 text-white"
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

                    <h3 className="text-3xl font-bold mb-10 text-center text-[#ffae01]">Nuestros Paquetes</h3>

                    <div className="flex flex-wrap justify-center gap-8">
                        {packages.map((pack, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.05 }}
                                className="p-8 bg-white text-black rounded-2xl shadow-lg w-full sm:w-full md:w-[45%] lg:w-[30%] transition duration-300"
                            >
                                <h1 className="text-2xl font-bold mb-2 text-center">{pack.title}</h1>
                                <h2 className="text-lg font-semibold text-[#9a0021] mb-4 text-center">{pack.price}</h2>

                                <div className="text-sm text-black space-y-3">
                                    {features.map((feature, index) => (
                                        <p key={index} className="flex items-center">
                                            <i className="fas fa-check-square mr-2 text-green-600"></i> {feature}
                                        </p>
                                    ))}

                                    <div className="mt-4">
                                        <h3 className="font-semibold text-[#ffae01] text-lg mb-2">GRATIS</h3>
                                        <p className="flex items-center">
                                            <i className="fas fa-check-square mr-2 text-green-600"></i> Evaluación Física
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => window.open(pack.whatsapp, '_blank')}
                                    className="w-full mt-6 px-6 py-3 bg-[#ffae01] text-[#1b1d23] rounded-xl text-lg font-bold shadow hover:bg-[#9a0021] hover:text-white transition duration-300"
                                >
                                    <i className="fa-brands fa-whatsapp mr-2"></i> Me interesa
                                </button>
                            </motion.div>
                        ))}
                    </div>

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

export default ModalPack;
