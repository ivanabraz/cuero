    import React from "react";
    import { Swiper, SwiperSlide } from "swiper/react";
    import "swiper/css";
    import { useMediaQuery } from "react-responsive";
    import { motion } from "framer-motion";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import { faDownload } from "@fortawesome/free-solid-svg-icons";

    const Images = ({ t }) => {
        const isSmallScreen = useMediaQuery({ maxWidth: 1024 });

        const photos = [
            { id: "img-8"},
            { id: "img-1"},
            { id: "img-2", year:'2025' , place:'CCW', credit:'Hans Johann' },
            { id: "img-3", year:'2025' , place:'CCW', credit:'Hans Johann' },
            { id: "img-4", year:'2025' , place:'CCW', credit:'Hans Johann' },
            { id: "img-5", year:'2025' , place:'CCW', credit:'Hans Johann' },
            { id: "img-6", year:'2025' , place:'CCW', credit:'Hans Johann' },
            { id: "img-7"},
        ];

        const handleDownload = (photo) => {
            const { id, year, place, credit } = photo;

            const fileNameHigh = `${id}_high.jpg`;

            let finalName = "Cuero Tango";

            if (year && place && credit) {
                finalName = `Cuero Tango (${year}) ${place} - © ${credit}`;
            }

            const link = document.createElement("a");
            link.href = `${process.env.PUBLIC_URL}/images/images/${fileNameHigh}`;
            link.download = `${finalName}.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };

        return (
            <div
                id="images"
                className="w-full bg-black text-center py-16 condensed uppercase text-white"
            >
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="text-4xl pb-14"
                >
                    {t('global.images')}
                </motion.p>

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
                            320: { slidesPerView: 1.3 },
                            768: { slidesPerView: 2.1 },
                            1024: { slidesPerView: 3.1 },
                        }}
                        className="overflow-visible w-full px-4"
                    >
                        {photos.map((photo) => {
                            const lowSrc = `${process.env.PUBLIC_URL}/images/images/${photo.id}_low.jpg`;

                            return (
                                <SwiperSlide
                                    key={photo.id}
                                    className="flex flex-col items-center"
                                >
                                    <div className="relative w-full group rounded-xl overflow-hidden shadow-lg">
                                        
                                        <img
                                            src={lowSrc}
                                            alt="Cuero Tango"
                                            className="w-full h-auto object-cover
                                                    transition-transform duration-700 
                                                    group-hover:scale-[1.05]"
                                        />

                                        <button
                                            type="button"
                                            onClick={() => handleDownload(photo)}
                                            className="absolute top-3 right-3 
                                                    bg-white/50 hover:bg-white/80 text-black
                                                    w-8 h-8 md:w-9 md:h-9 
                                                    rounded-full shadow-md 
                                                    flex items-center justify-center 
                                                    transition-colors duration-700"
                                            aria-label={t("global.downloadPhoto") || "Descargar foto"}
                                        >
                                            <FontAwesomeIcon icon={faDownload} className="text-sm md:text-base" />
                                        </button>

                                        {photo.year && photo.place && photo.credit && (
                                            <div
                                                className="absolute bottom-3 left-3 
                                                        bg-black/70 
                                                        text-[10px] md:text-xs 
                                                        px-3 py-1 rounded-md 
                                                        tracking-wide 
                                                        opacity-0 group-hover:opacity-100 
                                                        transition-opacity duration-700"
                                            >
                                                {photo.year} • {photo.place} — Foto {photo.credit}
                                            </div>
                                        )}
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </motion.div>
            </div>
        );
    };

    export default Images;
