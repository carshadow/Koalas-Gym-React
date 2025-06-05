import React from "react";

const programData = [
    {
        src: 'img/Entrenamiento Personal.JPG',
        label: 'Entrenamiento Personal',
        message: 'Explora los diferentes paquetes que ofrecemos.',
    },
    {
        src: 'img/br2.webp',
        label: 'Bootcamps',
        message: 'Entrena al aire libre.',
    },
    {
        src: 'img/EntrenaHogar.JPG',
        label: 'Entrena en tu hogar',
        message: 'Entrena en la comodidad de tu hogar.',
    },
    {
        src: 'img/Facilidades.JPG',
        label: 'Entrena en nuestras facilidades',
        message: 'Donde nos encontramos.',
    },
    {
        src: 'img/KoalaCoach1.JPG',
        label: 'Adquiere una rutina',
        message: 'Obtén tu rutina online',
    },
];

const Programs = ({ openModal }) => {
    return (
        <section id="program" className="w-full py-16 px-6 md:px-10 bg-[#1b1d23]">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#ffae01] mb-4">
                    Vence tus excusas
                </h2>
                <p className="text-white text-lg font-light md:text-xl mb-2">
                    Es hora de dar paso a la acción. Con mi guía y tu compromiso,
                </p>
                <p className="text-white text-lg font-light md:text-xl mb-8">
                    alcanzaremos tus metas juntos
                </p>
                <h3 className="text-xl md:text-2xl text-[#ffae01] font-semibold mb-10">
                    ¡Comienza ahora!
                </h3>

                <div className="flex gap-8 overflow-x-auto scroll-smooth px-2 py-4 scrollbar-hide">
                    {programData.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => openModal(index)}
                            className="relative w-80 min-w-[320px] h-[360px] rounded-xl overflow-hidden shadow-lg group cursor-pointer transform transition-transform duration-300 hover:scale-105 bg-[#0e0f12]"
                        >
                            <img
                                src={item.src}
                                alt={item.label}
                                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:brightness-50"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>

                            {/* Label */}
                            <div className="absolute top-4 left-4 z-20 bg-white/10 px-3 py-1 rounded-lg text-sm text-white font-semibold">
                                {item.label}
                            </div>

                            {/* Bottom Text */}
                            <div className="absolute bottom-4 w-full z-20 flex flex-col items-center px-4">
                                <p className="text-white text-sm text-center font-light">
                                    {item.message}
                                </p>
                                <button className="mt-3 bg-[#ffae01] text-black font-bold text-sm px-4 py-2 rounded-lg hover:bg-[#9a0021] hover:text-white transition">
                                    Me interesa
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;