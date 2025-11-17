import React from "react";
import { motion } from "framer-motion";

const Contact = ({ t }) => {
    return (
        <div id='contact' className="w-full bg-black py-16 text-center condensed uppercase text-white flex flex-col justify-center">

            {/* Título */}
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="text-4xl mb-14"
            >
                {t('global.contact')}
            </motion.p>

            {/* Links */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="w-[60%] grid grid-cols-1 lg:grid-cols-3 m-auto"
            >
                {/* Cada link con hover underline */}
                <a
                    href="mailto:cuerotango@gmail.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="relative w-fit mx-auto after:absolute after:left-0 after:bottom-0 
                            after:w-full after:h-[1px] after:bg-white after:opacity-0 
                            after:transition-opacity after:duration-300 hover:after:opacity-100"
                >
                    cuerotango@gmail.com
                </a>

                <a
                    href="mailto:emiliocossani@gmail.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="relative w-fit mx-auto after:absolute after:left-0 after:bottom-0 
                            after:w-full after:h-[1px] after:bg-white after:opacity-0 
                            after:transition-opacity after:duration-300 hover:after:opacity-100 mt-4 lg:mt-0"
                >
                    emiliocossani@gmail.com
                </a>

                <a
                    href="https://www.instagram.com/cuero.tango"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="relative w-fit mx-auto after:absolute after:left-0 after:bottom-0 
                            after:w-full after:h-[1px] after:bg-white after:opacity-0 
                            after:transition-opacity after:duration-300 hover:after:opacity-100 mt-4 lg:mt-0"
                >
                    @cuero.tango
                </a>
            </motion.div>
        </div>
    );
};

export default Contact;
