import React from 'react';

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

const Testimonials = () => {
    return (
        <div className="py-20 px-6 md:px-10 bg-[#1b1d23]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#ffae01]">
                        Mira lo que dicen nuestros Clientes
                    </h2>
                    <p className="text-white mt-2 text-lg">
                        Historias reales de transformación y superación
                    </p>
                </div>

                <div
                    className={`grid gap-8 ${clients.length === 3
                        ? 'md:grid-cols-3'
                        : 'md:grid-cols-2'
                        } grid-cols-1`}
                >
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl p-6 flex items-start gap-4 hover:scale-[1.02] transition-transform duration-300"
                        >
                            <img
                                src={client.img}
                                alt={client.name}
                                className="w-20 h-20 rounded-full object-cover border-4 border-[#ffae01] shadow-lg"
                            />
                            <div>
                                <h3 className="text-xl font-bold text-[#ffae01] mb-1">
                                    {client.name}
                                </h3>
                                <p className="text-white text-sm leading-relaxed">
                                    {client.feedback}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
