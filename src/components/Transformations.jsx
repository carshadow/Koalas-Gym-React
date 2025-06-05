import React, { useEffect, useState } from 'react';

const transformations = [
    { before: "img/NelsonBefore.jpg", after: "img/NelsonAfter.jpg" },
    { before: "img/clienteAntes.jpg", after: "img/ClienteDespues.jpg" },
    { before: "img/EduardBefore.jpg", after: "img/EduardoAfter.jpg" },
    { before: "img/Natalia Before.jpg", after: "img/said2.png" },
];

const Transformations = () => {
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
        <section id="transformation" className="bg-[#1b1d23] py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#ffae01] mb-4">
                    Transformaciones en el programa
                </h2>
                <div className="w-24 h-1 bg-[#ffae01] mx-auto rounded-full mb-4 animate-pulse"></div>
                <p className="text-white text-lg">Resultados reales de nuestros clientes </p>
            </div>

            <div className="w-full overflow-x-auto scrollbar-hide scroll-smooth">
                <div className="flex gap-6 justify-center px-4 md:px-0 min-w-fit">
                    {transformations.map((image, index) => (
                        <div
                            key={index}
                            className="relative w-72 min-w-[288px] h-80 rounded-xl overflow-hidden shadow-xl bg-black group transform transition-transform hover:scale-105 flex-shrink-0"
                        >
                            <img
                                src={visibleSides[index] === 'before' ? image.before : image.after}
                                alt={`Transformación ${index + 1}`}
                                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                            />

                            <div className="absolute top-2 left-2 z-10 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                                {visibleSides[index] === 'before' ? 'Antes' : 'Después'}
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />

                            <div className="absolute bottom-2 right-2 z-20 text-white text-xs opacity-60">
                                Auto-cambio cada 3s
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Transformations;
