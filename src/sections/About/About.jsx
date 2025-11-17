import React from "react";
import { motion } from "framer-motion";

const About = ({ t }) => {
    const image = `${process.env.PUBLIC_URL}/images/photos/image-02.jpg`;
    
    return (
        <div id='about' className="w-full grid grid-cols-1 md:grid-cols-2">
            
            {/* Texto */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="w-5/6 md:w-3/4 m-auto py-16 text-base lg:text-lg condensed text-justify"
            >
                <p>{t('global.about-text')}</p>
            </motion.div>

            <div className="p-10 w-full h-full">
                
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="w-full h-full overflow-hidden group"
                >
                    <img
                        src={image}
                        alt="Cuero"
                        className="w-full h-full object-cover transition-transform duration-[700ms] group-hover:scale-[1.03]"
                    />
                </motion.div>

            </div>

        </div>
    );
};

export default About;
