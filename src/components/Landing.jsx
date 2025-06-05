import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import CoachIntro from './CoachIntro';
import Programs from './Programs';
import ModalPack from './ModalPack';
import ModalBootcamp from './ModalBootcamp';
import ModalHogar from './ModalHogar';
import ModalFacilidades from './ModalFacilidades';
import ModalRutina from './ModalRutina';
import Transformations from './Transformations';
import Testimonials from './Testimonials';
import Comunicate from './Comunicate';

const Landing = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [activeImage, setActiveImage] = useState(null);

    // 🟡 Nuevo estado para controlar el menú móvil
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const openModal = (index) => {
        setActiveImage(index);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setActiveImage(null);
    };

    return (
        <>
            <Navbar
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                toggleMenu={toggleMenu}
            />

            <Hero />
            <CoachIntro />
            <Programs openModal={openModal} />
            <Transformations />
            <Testimonials />
            <Comunicate />

            {/* Modals */}
            {modalOpen && activeImage === 0 && <ModalPack closeModal={closeModal} />}
            {modalOpen && activeImage === 1 && <ModalBootcamp closeModal={closeModal} />}
            {modalOpen && activeImage === 2 && <ModalHogar closeModal={closeModal} />}
            {modalOpen && activeImage === 3 && <ModalFacilidades closeModal={closeModal} />}
            {modalOpen && activeImage === 4 && <ModalRutina closeModal={closeModal} />}
        </>
    );
};

export default Landing;
