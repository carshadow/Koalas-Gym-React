import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const ModalBootcamp = ({ closeModal }) => {
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
                    {/* Botón de cierre */}
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-6 text-white text-2xl hover:text-[#ffae01] transition"
                    >
                        <FaTimes />
                    </button>

                    {/* Contenido del modal */}
                    <div className="bootcamp-desc">
                        <h1 className="text-3xl font-bold mb-3 text-[#ffae01] text-center">
                            Beach Bootcamp
                        </h1>
                        <h2 className="text-xl font-semibold mb-5 text-center text-[#9a0021]">
                            $15 por sesión
                        </h2>
                        <p className="text-white text-center mb-4">
                            ¡Transforma tus sábados con nuestros Bootcamps!
                        </p>
                        <p className="text-white text-center mb-4">
                            Vive una experiencia cada sábado en la Playa Último Trolley. Sal de tu zona de
                            comfort, ejercítate y conecta con personas increíbles.
                        </p>
                        <p className="text-white text-center mb-6">¡No te lo pierdas!</p>

                        {/* Botón de WhatsApp */}
                        <div className="text-center">
                            <button
                                className="px-8 py-3 bg-[#ffae01] text-[#040507] rounded-xl font-bold hover:bg-[#9a0021] hover:text-white transition"
                                onClick={() =>
                                    window.open(
                                        "https://wa.me/17874231472?text=Hola%2C%20me%20interesa%20el%20bootcamp%20playero!",
                                        "_blank"
                                    )
                                }
                            >
                                Me interesa
                            </button>
                        </div>

                        {/* Ubicación */}
                        <div className="mt-10 p-6 bg-white/10 rounded-xl shadow-lg border border-white/10">
                            <div className="flex flex-col md:flex-row items-center gap-5">
                                <div className="text-[#ffae01] text-3xl">
                                    <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                                </div>

                                <img
                                    className="w-28 h-28 object-cover rounded-xl border-2 border-[#ffae01]"
                                    src="img/ultimoT.jpeg"
                                    alt="Ubicación"
                                />

                                <div className="text-white/90">
                                    <h3 className="font-bold mb-1">Ubicación Último Trolley</h3>
                                    <a
                                        href="https://maps.app.goo.gl/ytq4enfcB5p78TG89"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#9a0021] underline font-medium"
                                    >
                                        Haz click para la ubicación
                                    </a>
                                    <p className="text-sm mt-1">
                                        Aquí la ubicación en Google de donde estamos. ¡Para que no te pierdas de nada!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Botón para cerrar */}
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

export default ModalBootcamp;
