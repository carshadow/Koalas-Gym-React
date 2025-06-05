import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Comunicate = () => {
    return (
        <section id="comunicate" className="bg-[#1b1d23] w-full py-20 px-6 md:px-10">
            <div className="max-w-6xl mx-auto bg-white/5 border border-white/10 rounded-2xl shadow-xl p-10 flex flex-col md:flex-row items-start gap-10">

                {/* Texto de la izquierda */}
                <div className="flex-1 text-white">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#ffae01] mb-4">¡Subscríbete y mantente conectado!</h2>
                    <p className="text-white/90 mb-4 text-base leading-relaxed">
                        Recibe nuestras ofertas exclusivas, tips de entrenamiento, y mantente al tanto de todo lo nuevo en Mbfitness.
                    </p>
                    <p className="text-white/90 mb-6">
                        Reserva tu espacio con solo un clic. Estamos aquí para ayudarte a alcanzar tus metas.
                    </p>
                    <h3 className="text-lg font-semibold text-[#ffae01]">(787) 423-1472</h3>
                </div>

                {/* Iconos sociales */}
                <div className="flex flex-col items-center justify-center">
                    <h4 className="text-white text-lg font-semibold mb-4">Síguenos:</h4>
                    <div className="flex gap-6">
                        <a
                            href="https://www.instagram.com/mbfitnesspr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-3xl hover:text-[#E1306C] transition"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a
                            href="https://www.tiktok.com/@alexanderfaleropr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-3xl hover:text-[#69C9D0] transition"
                        >
                            <FontAwesomeIcon icon={faTiktok} />
                        </a>
                        <a
                            href="https://www.facebook.com/share/mBChHfVZM39wpGre/?mibextid=LQQJ4d"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-3xl hover:text-[#1877F2] transition"
                        >
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </div>

                    {/* Botón WhatsApp opcional */}
                    <a
                        href="https://wa.me/17874231472?text=Hola%20Mbfitness!%20Quiero%20m%C3%A1s%20informaci%C3%B3n"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-block bg-[#ffae01] text-black font-bold px-6 py-2 rounded-lg hover:bg-[#9a0021] hover:text-white transition"
                    >
                        Escríbenos por WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Comunicate;
