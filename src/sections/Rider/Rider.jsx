import React from "react";

const Rider = ({ t, isOpen, setIsOpen }) => {
    if (!isOpen) return null;

    // En vez de texto plano, guardamos las KEYS
    const instruments = [
        {
            nameKey: "global.piano",
            img: "/images/rider/piano.png",
            techKeys: [
                "global.pianoTech1",
                "global.pianoTech2",
            ],
            widthClass: "w-[30%]",
        },
        {
            nameKey: "global.cello",
            img: "/images/rider/cello.png",
            techKeys: [
                "global.celloTech1",
                "global.celloTech2",
            ],
            widthClass: "w-[30%]",
        },
        {
            nameKey: "global.bandoneon",
            img: "/images/rider/bandoneon.png",
            techKeys: [
                "global.bandoneonTech1",
                "global.bandoneonTech2",
            ],
            widthClass: "w-[30%]",
        },
        {
            nameKey: "global.guitar",
            img: "/images/rider/guitar.png",
            techKeys: [
                "global.guitarTech1",
                "global.guitarTech2",
            ],
            widthClass: "w-[30%]",
        },
    ];

    const monitors = {
        img: "/images/rider/monitors.png",
        captionKey: "global.monitorsCaption",
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 condensed"
            onClick={() => setIsOpen(false)}
        >
            <div
                className="bg-white rounded-lg w-full max-w-4xl mx-auto py-8 px-3 relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Botón cerrar */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="text-5xl absolute top-3 right-8 text-gray-400 hover:text-gray-800"
                >
                    &times;
                </button>

                {/* Título */}
                <p className="text-4xl mb-9 uppercase text-center text-black">
                    {t('global.rider')}
                </p>

                {/* Contenido principal */}
                <div className="text-sm text-black w-full">
                    <div className="relative w-full max-w-3xl mx-auto">

                        {/* Fila de instrumentos */}
                        <div className="flex justify-between items-start">
                            {instruments.map((inst) => (
                                <div
                                    key={inst.nameKey}
                                    className={`flex flex-col items-center text-center ${inst.widthClass}`}
                                >
                                    {/* Texto arriba */}
                                    <div className="mb-3 px-3">
                                        <div className="text-neutral-600 text-sm uppercase">
                                            {t(inst.nameKey)}
                                        </div>
                                        <div className="text-xs text-neutral-400 leading-snug">
                                            {inst.techKeys.map((key, i) => (
                                                <div key={i}>{t(key)}</div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Imagen */}
                                    <img
                                        src={inst.img}
                                        alt={t(inst.nameKey)}
                                        className="w-40 h-auto"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Monitores */}
                        <div className="flex flex-col items-center justify-center">
                            <img
                                src={monitors.img}
                                alt="Monitors"
                                className="w-40 h-auto mb-1"
                            />
                            <div className="text-xs text-neutral-400 mt-1 text-center leading-snug">
                                {t(monitors.captionKey)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rider;
