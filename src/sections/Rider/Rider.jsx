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
            className="w-full bg-neutral-100 text-center py-16 condensed uppercase text-black"
        >
            {/* Título */}
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-4xl pb-14"
            >
                {t("global.rider")}
            </motion.p>

            {/* Contenido */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 3, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-sm text-black w-full"
            >
                <div className="relative w-full max-w-3xl mx-auto px-5">
                    {/* fila textos instrumentos */}
                    <div className="flex justify-between items-start flex-wrap">
                        {instruments.map((inst) => (
                            <div
                                key={inst.nameKey + "-text"}
                                className="flex flex-col items-center text-center w-[24%]"
                            >
                                <div className="mb-3 px-1">
                                    <div className="text-neutral-600 text-sm uppercase">
                                        {t(inst.nameKey)}
                                    </div>
                                    <div className="text-xs text-neutral-400 leading-snug break-words whitespace-normal">
                                        {inst.techKeys.map((key, i) => (
                                            <div key={i}>{t(key)}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* fila imágenes instrumentos */}
                    <div className="flex justify-between items-start flex-wrap">
                        {instruments.map((inst) => (
                            <div
                                key={inst.nameKey + "-img"}
                                className="flex flex-col items-center text-center w-[24%] mb-6"
                            >
                                <img
                                    src={inst.img}
                                    alt={t(inst.nameKey)}
                                    className="mix-blend-multiply w-24 h-auto xs:w-28 sm:w-32 md:w-36 lg:w-40"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Monitors */}
                    <div className="flex flex-col items-center justify-center max-w-sm mx-auto text-center">
                        <img
                            src={monitors.img}
                            alt="Monitors"
                            className="mix-blend-multiply w-24 h-auto xs:w-28 sm:w-32 md:w-36 lg:w-40 mb-1"
                        />
                        <div className="text-xs text-neutral-400 mt-1 text-center uppercase leading-snug break-words whitespace-normal">
                            {t(monitors.captionKey)}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Rider;
