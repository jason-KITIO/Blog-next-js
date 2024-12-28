"use client"

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { useLocale } from "next-intl";

interface Slide {
    image: string;
    titre: string;
    text: string;
}

const slides: Slide[] = [
    {
        image: 'https://i.pinimg.com/736x/40/ca/11/40ca1118d8ca4a6ccc8b6b5dc8347f28.jpg',
        titre: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification",
        text: " Lorem Ipsum est le texte factice standard de l’industrie depuis les années 1500, lorsqu’un imprimeur inconnu a pris une galère de caractères et l’a brouillée pour en...",
    },
    {
        image: 'https://i.pinimg.com/736x/27/e9/f7/27e9f71dc92c613be4676c649eeef878.jpg',
        titre: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification",
        text: " Lorem Ipsum est le texte factice standard de l’industrie depuis les années 1500, lorsqu’un imprimeur inconnu a pris une galère de caractères et l’a brouillée pour en...",
    },
    {
        image: 'https://i.pinimg.com/736x/7b/c1/dc/7bc1dc3d945ef8eb786774d2128b8947.jpg',
        titre: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification",
        text: " Lorem Ipsum est le texte factice standard de l’industrie depuis les années 1500, lorsqu’un imprimeur inconnu a pris une galère de caractères et l’a brouillée pour en...",
    }
];

const login = () => {

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

    const [showInputPassword, setShowInputPassword] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");


    const handleSubmit = () => {
        console.log('email', email)
        console.log('password', password)

        locale && router.push(`/${locale}/dashboard/home/`)
    }


    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className="flex flex-row gap-4 p-4 w-full h-[100vh] bg-bgLogin">
            <div className="w-4/12 flex flex-col justify-between items-center bg-[#04021C] rounded-3xl border border-[#3E00FF14]">
                <Image
                    src={'/images/Ellipse 13.svg'}
                    alt="Ellipse 13.svg"
                    width={500}
                    height={300}
                    className="h-[200px]"
                />
                <div className="h-full w-full flex flex-col items-center p-4 justify-between">
                    <div className=" w-full flex flex-col items-center gap-2">
                        <h2 className="text-center text-xl">Bon retour ici !</h2>
                        <form className=" w-full flex flex-col items-center " onSubmit={handleSubmit}>
                            {
                                showInputPassword == false
                                    ?
                                    <div className="flex flex-row justify-between w-full p-4 bg-[#00000030] rounded-3xl border border-2 border-[#ffffff15]">
                                        <div>
                                            <label htmlFor="email" className="text-sm text-[#ffffff48]">Entrer votre adresse email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={email}
                                                placeholder="Entrer votre adresse email"
                                                className="border-none bg-transparent outline-none text-lg w-full"
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <a className="bg-violet rounded-2xl px-4 flex items-center cursor-pointer" onClick={() => setShowInputPassword(true)} >Suivant</a>
                                    </div>
                                    :
                                    <div className="flex flex-row justify-between w-full p-4 bg-[#00000030] rounded-3xl">
                                        <div>
                                            <label htmlFor="password" className="text-sm text-[#ffffff48]">Entrer votre mots de passe</label>
                                            <input
                                                type="password"
                                                name="password"
                                                value={password}
                                                placeholder="Entrer votre mots de passe"
                                                className="border-none bg-transparent outline-none text-lg w-full"
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <a className="bg-violet rounded-2xl px-4 flex items-center cursor-pointer" onClick={handleSubmit}>connexion</a>
                                    </div>}
                        </form>
                    </div>
                    <div className=" w-full flex flex-col gap-2">
                        <h2 className="text-center text-sm text-[#ffffff48]">Ou alors sélectionnez un compte</h2>
                        <div className="w-full px-12">
                            <div className=" flex flex-col gap-0.5 bg-[#ffffff0f] px-5 py-3 rounded-3xl cursor-pointer">
                                <h2 className="text-lg text-[#ffffff]">Melria 01</h2>
                                <i className="text-sm text-[#ffffff48]">Dernière activité il ya 12 heures</i>
                            </div>
                        </div>
                        <div className="w-full px-12">
                            <div className=" flex flex-col gap-0.5 bg-[#ffffff0f] px-5 py-3 rounded-3xl cursor-pointer">
                                <h2 className="text-lg text-[#ffffff]">Melria 02</h2>
                                <i className="text-sm text-[#ffffff48]">Dernière activité il ya 12 heures</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-8/12">

                <div className="relative w-full h-[95vh] flex items-end justify-center overflow-hidden border border-[#3E00FF15]">
                    <div
                        className="absolute inset-0 bg-cover bg-center rounded-2xl"
                        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
                    ></div>
                    <div className="relative z-10 p-4 text-white rounded-2xl h-full flex flex-col justify-end p-4 pb-8 bg-gradient-to-b from-[#04021C00] to-[#04021C] w-full">
                        <h2 className="text-xl font-bold">{slides[currentIndex].titre}</h2>
                        <p>{slides[currentIndex].text}</p>
                    </div>
                    <a onClick={handlePrev} className="absolute z-10 left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full select-none cursor-pointer">
                        &lt;
                    </a>
                    <a onClick={handleNext} className="absolute z-10 right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full select-none cursor-pointer">
                        &gt;
                    </a>
                    <div className="absolute z-10 bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {slides.map((_, index) => (
                            <a
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full cursor-pointer select-none ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
                            >
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default login;