'use client'

import { motion } from 'framer-motion';
import { sectionAnimation } from './animations';

export const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionAnimation}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};
