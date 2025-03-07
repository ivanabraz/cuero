import React, { useEffect, useState } from "react";
import 'swiper/css';
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const Press = ({ t }) => {
    const [pressData, setPressData] = useState([]);
    const [showAll, setShowAll] = useState(false);

    // URL de tu Google Apps Script
    const DATA_URL = 'https://script.google.com/macros/s/AKfycbyKz7fnNcwpBJVXXwDjtbNpI4ntfzweat9VlET__yC4WvQFiBdJoxPV5QcjmQniE3tYXA/exec';

    // Fetch de datos del Google Sheets
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(DATA_URL);
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                console.log("Data fetched:", data); // Log para verificar los datos
                
                // Verifica si hay datos y los establece en el estado
                if (data && Array.isArray(data)) {
                    setPressData(data);
                } else {
                    console.log("No hay notas disponibles");
                }
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        };
        
        fetchData();
    }, []);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    // Filtrar notas con ShowOnWebsite en true
    const visiblePressData = pressData.filter(media => media.ShowOnWebsite);
    const displayedItems = showAll ? visiblePressData : visiblePressData.slice(0, 4);
    const hiddenItemsCount = visiblePressData.length - 4;

    return (
        <div id="press" className="w-full bg-neutral-100 text-center py-16 condensed uppercase text-black">
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-4xl pb-14"
            >
                {t('global.press')}
            </motion.p>
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 3, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="w-full"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5">
                    {displayedItems.length > 0 ? (
                        displayedItems.map((media, index) => (
                            <div key={index} className="w-full">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/press/${media.ID}.png` || 'https://placehold.co/400'}
                                    alt={media.Name || 'Media'}
                                    className="aspect-square xs:mt-5 md:mt-0"
                                />
                                <div className="flex flex-row justify-between mt-2">
                                    <p>{media.Name}</p>
                                    {media.Link ? (
                                        <a
                                            href={media.Link}
                                            className="text-emerald-400 whitespace-nowrap flex items-center"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {t('global.readnote')} <ArrowUpRightIcon className="h-4 w-4 ml-1 relative top-[0.05em]" />
                                        </a>
                                    ) : (
                                        <span className="text-neutral-400"></span>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-neutral-400 m-auto text-center">No hay notas disponibles</p>
                    )}
                </div>
            </motion.div>
            {hiddenItemsCount > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="w-fit mt-10 py-2 px-5 m-auto uppercase border border-black cursor-pointer"
                    onClick={toggleShowAll}
                >
                    {showAll
                        ? t('global.seeless')
                        : `${t('global.seemore')} (${hiddenItemsCount})`}
                </motion.div>
            )}
        </div>
    );
};

export default Press;
