'use client'
import React, { useEffect, useState } from "react";
import "./GlowingCursor.css";

const GlowingCursor: React.FC = () => {
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        // Use document instead of window for better compatibility
        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            className="glowing-cursor hidden lg:block"
            style={{
                position: 'fixed',
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
                zIndex: 10000, // Higher than navbar
            }}
        />
    );
};

export default GlowingCursor;
