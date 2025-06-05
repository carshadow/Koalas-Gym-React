import React, { useState, useRef, useEffect } from 'react';

const CoachIntro = () => {
    const [expanded, setExpanded] = useState(false);
    const fullTextRef = useRef(null);

    useEffect(() => {
        if (expanded) {
            fullTextRef.current.style.maxHeight = fullTextRef.current.scrollHeight + "px";
        } else {
            fullTextRef.current.style.maxHeight = "0px";
        }
    }, [expanded]);

    return (
        <section id="coach" className="bg-[#1b1d23] py-20 px-6">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                {/* Coach Image */}
                <div className="w-full flex justify-center mb-8">
                    <img
                        src="img/KoalaCoach2.JPG"
                        alt="Coach Alexander"
                        className="rounded-xl shadow-2xl w-full max-w-md object-cover"
                    />
                </div>

                {/* Coach Info Card */}
                <div className="w-full bg-gradient-to-br from-[#ffae01] to-[#ffc94b] text-[#1b1d23] p-8 md:p-10 rounded-2xl shadow-2xl transition duration-500">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
                        Alexander Falero Prieto "Koala"
                    </h2>

                    <p className="text-base md:text-lg leading-relaxed">
                        <span>
                            Entrenador personal con un Bachillerato en Ciencias del Ejercicio. Licenciado por el Departamento de Recreación y Deportes...
                        </span>
                        <span
                            ref={fullTextRef}
                            className="block overflow-hidden transition-all duration-500 ease-in-out"
                            style={{ maxHeight: '0px' }}
                        >
                            Posee una especialización en balonmano respaldada por más de diez años de experiencia como jugador y la formación de alrededor de seis equipos. Además, posee una certificación en entrenamiento para niños, lo que asegura métodos seguros y efectivos para todas las edades. Su enfoque se centra en proporcionar rutinas personalizadas que desafíen a sus clientes a salir de su zona de confort. ¡Confía en su experiencia para guiarte hacia una vida más saludable y activa!
                        </span>
                    </p>

                    <div className="text-center">
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="mt-6 px-6 py-2 bg-[#1b1d23] text-white rounded-lg font-semibold hover:bg-white hover:text-[#1b1d23] transition-all duration-300"
                        >
                            {expanded ? "Leer menos" : "Leer más"}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoachIntro;