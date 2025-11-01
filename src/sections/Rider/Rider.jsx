import React from "react";
import { motion } from "framer-motion";

const Rider = ({ t }) => {
    const instruments = [
        {
            nameKey: "global.piano",
            img: "/images/rider/piano.png",
            techKeys: ["global.pianoTech1", "global.pianoTech2"],
        },
        {
            nameKey: "global.cello",
            img: "/images/rider/cello.png",
            techKeys: ["global.celloTech1", "global.celloTech2"],
        },
        {
            nameKey: "global.bandoneon",
            img: "/images/rider/bandoneon.png",
            techKeys: ["global.bandoneonTech1", "global.bandoneonTech2"],
        },
        {
            nameKey: "global.guitar",
            img: "/images/rider/guitar.png",
            techKeys: ["global.guitarTech1", "global.guitarTech2"],
        },
    ];

    const monitors = {
        img: "/images/rider/monitors.png",
        captionKey: "global.monitorsCaption",
    };

    return (
        <div
            id="rider"
            className="w-full bg-neutral-100 text-center py-10 xs:py-14 sm:py-16 condensed text-black"
        >
            {/* Título */}
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-2xl xs:text-3xl sm:text-4xl pb-8 xs:pb-10 sm:pb-14 uppercase"
            >
                {t("global.rider")}
            </motion.p>

            {/* Contenido */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 3, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-[11px] leading-tight xs:text-xs xs:leading-snug sm:text-sm sm:leading-snug text-black w-full"
            >
                <div className="relative w-full max-w-3xl sm:max-w-4xl lg:max-w-4xl xl:max-w-4xl mx-auto px-3 xs:px-5 lg:px-8">
                    
                    {/* fila textos instrumentos */}
                    <div className="flex justify-around items-start flex-wrap">
                        {instruments.map((inst) => (
                            <div
                                key={inst.nameKey + "-text"}
                                className="flex flex-col items-center text-center w-[24%] mb-2"
                            >
                                <div className="mb-2 px-1">
                                    <div className="text-neutral-600 uppercase text-[11px] xs:text-sm sm:text-sm">
                                        {t(inst.nameKey)}
                                    </div>
                                    <div className="text-neutral-400 text-[10px] xs:text-[11px] sm:text-sm leading-tight xs:leading-snug break-words whitespace-normal">
                                        {inst.techKeys.map((key, i) => (
                                            <div key={i}>{t(key)}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* fila imágenes instrumentos */}
                    <div className="flex justify-around items-start flex-wrap">
                        {instruments.map((inst) => (
                            <div
                                key={inst.nameKey + "-img"}
                                className="flex flex-col items-center text-center w-[24%] mb-6"
                            >
                                <img
                                    src={inst.img}
                                    alt={t(inst.nameKey)}
                                    className="mix-blend-multiply w-20 xs:w-24 sm:w-28 md:w-32 lg:w-36 h-auto"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Monitors */}
                    <div className="flex flex-col items-center justify-center max-w-sm mx-auto text-center mt-4">
                        <img
                            src={monitors.img}
                            alt="Monitors"
                            className="mix-blend-multiply w-20 xs:w-24 sm:w-28 md:w-32 lg:w-36 h-auto mb-1"
                        />
                        <div className="text-neutral-400 text-[10px] xs:text-[11px] sm:text-sm mt-1 leading-tight xs:leading-snug break-words whitespace-normal">
                            {t(monitors.captionKey)}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Rider;
