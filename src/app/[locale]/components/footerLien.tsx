import React, { useState } from 'react';
import Image from 'next/image';

interface IFooterLienProps {
    texte: string;
    lien: string;
    image: string;
}

const FooterLien = ({ texte, lien, image }: IFooterLienProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative">
            {/* Texte qui apparaît au survol */}
            {isHovered && (
                <p className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 bg-background p-2 rounded border border-blancD9">
                    {texte}
                </p>
            )}
            <div
                className="bg-background p-2 rounded-full flex items-center justify-center"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <a href={lien}>
                    <Image
                        src={image}
                        alt="twitter"
                        width={24}
                        height={24}
                    />
                </a>
            </div>
        </div>
    );
};

export default FooterLien;
