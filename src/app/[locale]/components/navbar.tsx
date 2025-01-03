'use client';

import React, { useState } from "react"
import Image from "next/image";
import { useRouter } from 'next/navigation'
import ModeToggle from "./ModeToggle";

const NavBar: React.FC = () => {

    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);

    const handleVisible = () => {
        setIsVisible(!isVisible);
    }


    return (
        <nav className="flex justify-between w-full" >
            <h2 className="font-archivoBlack">Melria</h2>
            <ul className="flex flex-rox gap-8">
                <li className="font-inter cursor-pointer" onClick={() => handleVisible()}>
                    {
                        isVisible
                            ?
                            <div className="flex flex-row gap-2">
                                Categorie
                                <Image src="/images/arrow down.svg" alt="arrow" width={20} height={20} />
                            </div>
                            : "Categorie"
                    }
                </li>
                {
                    isVisible &&
                    <div className="absolute flex flex-row flex-wrap gap-[10px] p-5 border border-gris6b rounded-lg top-20 right-15 w-3/12 bg-background">
                        <div className="flex flex-col gap-2 items-center w-5/12  cursor-pointer">
                            <Image src="/images/js.png" alt="arrow" width={50} height={50} />
                            <h2 className="text-xl">Javascript</h2>
                            <p className="text-gridad text-xs text-center">Sur ce blog, découvre des guides pratiques, des astuces de développeur, et des </p>
                        </div>
                        <div className="flex flex-col gap-2 w-5/12 items-start">
                            <div>
                                <div className="flex flex-row gap-2 items-center">
                                    <Image src="/images/react js.png" alt="arrow" width={25} height={25} />
                                    <h2 className="text-xl">React JS</h2>
                                </div>
                                <p className="text-gridad text-xs w-full">Sur ce blog, découvre des guides pratiques, </p>
                            </div>
                            <div>
                                <div className="flex flex-row gap-2 items-center">
                                    <Image src="/images/next js.png" alt="arrow" width={25} height={25} />
                                    <h2 className="text-xl">Next JS</h2>
                                </div>
                                <p className="text-gridad text-xs w-full">Sur ce blog, découvre des guides pratiques, </p>
                            </div>
                            <div>
                                <div className="flex flex-row gap-2 items-center">
                                    <Image src="/images/angular.png" alt="arrow" width={25} height={25} />
                                    <h2 className="text-xl">Angular</h2>
                                </div>
                                <p className="text-gridad text-xs w-full">Sur ce blog, découvre des guides pratiques, </p>
                            </div>
                        </div>
                    </div>
                }
                <li className="font-inter cursor-pointer" onClick={() => router.push(`/fr`)}>PostsFR</li>
                <li className="font-inter cursor-pointer" onClick={() => router.push(`/en`)}>PostsEN</li>
            </ul>
            <ModeToggle />
        </nav>
    )
}

export default NavBar;