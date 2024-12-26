'use client';

import { useRouter } from 'next/navigation';
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IPOST } from '../interface/interface';

const Post: React.FC<IPOST> = ({ id, DateCreation, Titre, SousTitre, image, tempsLecture }) => {
    const router = useRouter();
    const [locale, setLocale] = useState<string | null>(null);

    useEffect(() => {
        // Vérifiez si window est défini avant d'accéder à son contenu
        if (typeof window !== 'undefined') {
            const currentPath = window.location.pathname; // ou utiliser usePathname() si disponible
            const extractedLocale = currentPath.split('/')[1]; // Supposons que le format soit /[locale]/details/[id]
            setLocale(extractedLocale);
        }
    }, []);

    return (
        <div
            className="flex gap-y-2 flex-col hover:bg-violetHover hover:rounded-lg hover:p-5 hover:transition-all hover:duration-200 hover:delay-75 hover:ease-in-out cursor-pointer text-left"
            key={id}
        >
            <p className="text-gris6b font-archivo text-[16px]">{DateCreation}</p>
            <p className="font-semibold text-xl">{Titre}</p>
            <p className="text-gridad text-lg">{SousTitre}</p>
            <div className="flex flex-row">
                <button
                    className="text-violet font-semibold cursor-pointer"
                    onClick={() => locale && router.push(`/${locale}/details/${id}`)}
                >
                    Lire l’article
                </button>
                <Image
                    src="/images/direction-right.svg"
                    alt="direction right icon"
                    width={25}
                    height={25}
                    priority
                />
                <p className="text-gris6b font-archivo text-[16px]">/ {tempsLecture} min de lecture</p>
            </div>
        </div>
    );
}

export default Post;
