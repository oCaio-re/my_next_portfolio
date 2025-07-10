'use client'
import React, { useEffect, useState } from "react";
import "./GlowingCursor.css";

const GlowingCursor: React.FC = () => {
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            className="glowing-cursor hidden lg:block"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        ></div>
    );
};

export default GlowingCursor;
