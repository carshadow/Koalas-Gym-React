import React from "react";

const Hero = () => {
    return (
        <div
            className="h-screen bg-cover bg-center flex items-center justify-center relative"
            style={{ backgroundImage: 'url("img/pexels-photo-841130.jpeg")' }}
        >
            {/* Overlay for contrast */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

            {/* Text Content */}
            <div className="relative z-10 text-center text-white flex flex-col items-center">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-md">
                    Entrena Inteligente
                </h1>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-md">
                    Vive Mejor
                </h1>
            </div>
        </div>
    );
};

export default Hero;
