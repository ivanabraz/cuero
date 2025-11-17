import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useMediaQuery } from 'react-responsive';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

const Songs = ({ t }) => {
    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio, setAudio] = useState(null);
    const [swiperInstance, setSwiperInstance] = useState(null);

    const isSmallScreen = useMediaQuery({ maxWidth: 1024 });

    const tapIcon = `${process.env.PUBLIC_URL}/images/icons/tap.svg`;
    const swipeIcon = `${process.env.PUBLIC_URL}/images/icons/swipe.svg`;

    const music = [
        { name: 'ATR', id: 'atr' },
        // { name: 'Toro', id: 'toro' },
        { name: 'La baratija', id: 'la-baratija' },
        { name: 'Prima Facie', id: 'prima-facie' },
        { name: 'Paladar Negro', id: 'paladar-negro' },
        // { name: 'Chino', id: 'chino' },
        // { name: 'La oriental', id: 'la-oriental' },
        { name: 'Gordito', id: 'gordito' },
    ];

    useEffect(() => {
        return () => {
            if (audio) audio.pause();
        };
    }, [audio]);

    const handlePlayPause = (song) => {
        const isCurrent = currentSong?.id === song.id;

        if (isCurrent && isPlaying) {
            // Pausar canción actual
            audio.pause();
            setIsPlaying(false);
        } else {
            // Cambiar de canción o reproducir de nuevo
            if (audio) audio.pause();

            const newAudio = new Audio(`${process.env.PUBLIC_URL}/images/songs/${song.id}.mp3`);
            newAudio.play();

            setAudio(newAudio);
            setCurrentSong(song);
            setIsPlaying(true);

            newAudio.onended = () => setIsPlaying(false);
        }
    };

    const handleSlideClick = (song, index) => {
        if (isSmallScreen && swiperInstance) {
            const isActive = swiperInstance.realIndex === index;

            if (!isActive) {
                // 1) En mobile: si la tapa está al costado, primero la centramos
                swiperInstance.slideToLoop(index);

                // 2) Después de un instante (cuando ya está centrada), reproducimos
                setTimeout(() => {
                    handlePlayPause(song);
                }, 300); // podés ajustar este delay si lo ves muy rápido/lento

                return;
            }
        }

        // Si ya está centrada (o estamos en desktop), reproducimos/pausamos normalmente
        handlePlayPause(song);
    };

    return (
        <div id="songs" className="w-full bg-black text-center py-16 condensed uppercase text-white">
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-4xl pb-3"
            >
                {t('global.songs')}
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="flex items-center justify-center text-xs pb-14 text-neutral-400"
            >
                <img src={tapIcon} alt="Tap to listen" className="mr-1 w-4 h-4 inline-block" />
                {t('global.tapSong')}
                <img src={swipeIcon} alt="Swipe for more" className="ml-5 mr-1 w-4 h-4 inline-block" />
                {t('global.swipeSong')}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 3, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="w-full"
            >
                <Swiper
                    loop={true}
                    centeredSlides={isSmallScreen}
                    spaceBetween={20}
                    grabCursor={true}
                    breakpoints={{
                        320: { slidesPerView: 1.5 },
                        768: { slidesPerView: 2.5 },
                        1024: { slidesPerView: 3.5 },
                    }}
                    className="overflow-visible w-full"
                    onSwiper={setSwiperInstance}
                >
                    {music.map((song, index) => {
                        const isCurrent = currentSong?.id === song.id;
                        const isSpinning = isCurrent && isPlaying;
                        const canHover = !isSpinning;

                        return (
                            <SwiperSlide
                                key={song.id}
                                className="flex flex-col items-center pt-3"
                                onClick={() => handleSlideClick(song, index)}
                            >
                                <div
                                    className={`w-full lg:px-10 cursor-pointer transition-transform duration-[700ms] ${
                                        canHover ? "hover:scale-[1.05]" : ""
                                    }`}
                                >
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/songs/${song.id}.png`}
                                        alt={song.name}
                                        className="w-full h-auto animate-spin-slow"
                                        style={{
                                            animationPlayState: isCurrent && isPlaying ? "running" : "paused",
                                        }}
                                    />
                                </div>

                                <FontAwesomeIcon
                                    icon={isCurrent && isPlaying ? faPause : faPlay}
                                    size="lg"
                                    className={`mt-5 text-white transition-opacity cursor-pointer ${
                                        isCurrent ? "opacity-100" : "opacity-0"
                                    }`}
                                />
                                <p
                                    className="text-lg text-white cursor-pointer"
                                    onClick={() => handleSlideClick(song, index)}
                                >
                                    {song.name}
                                </p>
                                <p
                                    className="text-xs text-white"
                                    onClick={() => handleSlideClick(song, index)}
                                >
                                    Cuero
                                </p>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </motion.div>
        </div>
    );
};

export default Songs;
