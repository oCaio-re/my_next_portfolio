'use client'

import { motion } from 'framer-motion';
import { cardAnimation } from './animations';

export const AnimatedCard = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            variants={cardAnimation}
        >
            {children}
        </motion.div>
    );
};
